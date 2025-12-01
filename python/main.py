import csv
import multiprocessing as mp
import queue
import random
import threading
import time
from multiprocessing import Manager

from exports import *
from tandemAssign import assign

# format fichier tab :  pilote  canardos    hardware_priority_1 hardware_priority_2 hardware_priority_3 hardware_priority_4 hardware_priority_5 hardware_priority_6

MAX_PILOTS_FOR_RANDOM_TEST = 30
MAX_HARDWARE_FOR_RANDOM_TEST = 10


def load_data(filename: str):
    pilots: list[Pilot] = []

    with open(filename, 'r') as csvfile:
        #    with sys.stdin as csvfile:
        data_csv = csv.reader(csvfile, delimiter='\t')
        headers_row = next(data_csv, None)
        for row in data_csv:
            pilot = Pilot()
            pilot.name = row[0]
            pilot.canardos = int(row[1])
            for i in range(2, len(row)):
                hardware = row[i]
                pilot.add_requested_hardware(hardware)
            pilots.append(pilot)

    return pilots


def run_from_file(filename: str):
    pilots = load_data(filename)
    assign(pilots)


def build_random_problem():
    pilots: list[Pilot] = []
    used_hardwares = []

    hardware_count = int(random.random() * (MAX_HARDWARE_FOR_RANDOM_TEST - 1)) + 2
    pilots_count = int(random.random() * (MAX_PILOTS_FOR_RANDOM_TEST - 1)) + 2

    canardos = list(range(100))

    for i in range(pilots_count):
        pilot = Pilot()
        pilot.name = chr(ord('A') + i)

        canardos_id = int(random.random() * len(canardos))
        pilot.canardos = canardos[canardos_id]
        canardos.remove(pilot.canardos)

        remaining_tandems = list(chr(ord('I') + i) for i in range(hardware_count))

        wish_count = int(random.random() * hardware_count) + 1
        for j in range(wish_count):
            tandem_id = int(random.random() * len(remaining_tandems))
            tandem = remaining_tandems[tandem_id]
            pilot.add_requested_hardware(tandem)
            remaining_tandems.remove(tandem)
            used_hardwares.append(tandem)

        pilots.append(pilot)
    return pilots


def produce_a_random_test_and_result():
    pilots = build_random_problem()
    result = assign(pilots)
    return pilots, result


def produce_random_tests_fn(tests_list: mp.Queue, output_list_queue: mp.Queue):
    while True:
        try:
            ident = tests_list.get(True, timeout=0.01)
            pilots, result = produce_a_random_test_and_result()
            output_list_queue.put([pilots, result], block=True, timeout=10)
            print("End test " + str(ident) + " " + str(threading.get_native_id()) + " " + str(output_list_queue.qsize()))
        except queue.Empty:
            print("stop")
            break
    print("end process " + str(threading.get_native_id()))


def produce_random_tests(directory, count, timeout_s):
    threads_count = 16
    # Use a Queue and a manager to safely collect results from all processes
    with Manager() as manager:
        results_queue = manager.Queue(count + 10)
        tests_todo_queue = manager.Queue()
        for i in range(count):
            tests_todo_queue.put(i)

        processes = []
        for i in range(threads_count):
            p = mp.Process(target=produce_random_tests_fn,
                           args=(tests_todo_queue, results_queue))
            p.start()
            processes.append(p)

        # Timout management
        if timeout_s != -1:
            start = time.time()
            while time.time() - start <= timeout_s:
                if not any(p.is_alive() for p in processes):
                    # All the processes are done, break now.
                    break
                time.sleep(1)  # Just to avoid hogging the CPU
            else:
                # We only enter this if we didn't 'break' above.
                print("timed out, killing all processes")
                for p in processes:
                    p.terminate()
                    p.join()
        else:
            for p in processes:
                p.join()

        # Collect results from the queue after all processes finish
        tests = []
        while True:
            try:
                tests.append(results_queue.get_nowait())
            except queue.Empty:
                break
        print(len(tests))

        export_random_test_to_js_munkres(tests, directory)
        export_random_test_to_js_biplace_booking(tests, directory)

    print("End of generation")


def main():
    # run_from_file(r"../tests/test13.txt")

    produce_random_tests(r'../testsAuto', 1000, 4*60*60)


if __name__ == '__main__':
    main()
