import csv
import random
import threading
from tandemAssign import assign

from exports import *

# format fichier tab :  pilote  canardos    hardware_priority_1 hardware_priority_2 hardware_priority_3 hardware_priority_4 hardware_priority_5 hardware_priority_6

MAX_PILOT_FOR_RANDOM_TEST = 10
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

    hardware_count = int(random.random() * MAX_HARDWARE_FOR_RANDOM_TEST) + 1
    pilots_count = int(random.random() * MAX_PILOT_FOR_RANDOM_TEST) + 1

    canardos = list(range(0, 100))

    for i in range(0, pilots_count):
        pilot = Pilot()
        pilot.name = chr(ord('A') + i)

        canardos_id = int(random.random() * len(canardos))
        pilot.canardos = canardos[canardos_id]
        canardos.remove(pilot.canardos)

        remaining_tandems = list(chr(ord('I') + i) for i in range(hardware_count))

        wish_count = int(random.random() * hardware_count) + 1
        for j in range(0, wish_count):
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


def produce_random_tests_fn(count, outputlist):
    for i in range(0, count):
        print("Building test " + str(i))
        pilots, result = produce_a_random_test_and_result()
        outputlist.append([pilots, result])


def produce_random_tests(dir, count):
    threads_count = 8
    tests = []

    threads = []
    for i in range(0, threads_count):
        t = threading.Thread(target=produce_random_tests_fn, args=(int(count / threads_count), tests), kwargs={})
        threads.append(t)

    for t in threads:
        t.start()
    for t in threads:
        t.join()

    export_random_test_to_js_munkres(tests, dir)
    export_random_test_to_js_biplace_booking(tests, dir)


def main():
   # run_from_file(r"../tests/test13.txt")

    produce_random_tests(r'd:/dev/attributionBiplace/testsAuto', 500)


if __name__ == '__main__':
    main()
