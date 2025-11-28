import csv
import os.path
import random as random
import time
from multiprocessing.managers import Array

from exports import *


# format fichier tab :  pilote  canardos    hardware_priority_1 hardware_priority_2 hardware_priority_3 hardware_priority_4 hardware_priority_5 hardware_priority_6

# Principe de calcul :
# Note : il s'agit d'un algo brute force qui ne fonctionne que parce qu'on a une petite volumétrie.
# 1- Soit n le nombre de matériels disponibles
# 2- On choisit les n pilotes les plus prioritaires
# 3- On crée toutes les combinaisons d'attribution (pilote-matériel) possibles
# 4- Elles sont triées par priorité du pilote puis par priorité de souhait de matériel
# 5- La solution retenue est la première qui permet de servir tous les pilotes avec un matériel différent pour chaque
# 6- S'il n'existe pas de solution parce qu'il y a des conflits de souhait de matériels entre les pilotes,
#     on fait rentrer le pilote suivant en terme de priorité dans le calcul et on recommence en 3


class Run:
    def getFirstCombination(self, pilots: list[Pilot]) -> list[str]:
        result = []
        for pilot in pilots:
            pilot.index = 0
            result.append(pilot.requests[0])
        return result

    def getNextCombination(self, pilots: list[Pilot], result: list[str]):
        for i in range(len(pilots) - 1, -1, -1):
            pilot = pilots[i]
            pilot.index += 1
            overrun = False
            if pilot.index == len(pilot.requests):
                pilot.index = 0
                overrun = True
            result[i] = pilot.requests[pilot.index]
            if not overrun:
                return True
        return False


def toStr(attributions: list[str], pilots: list[Pilot], showUnsatisfiedAttributions: bool) -> str:
    result = "["
    bookings = {}
    i = 0
    for attribution in attributions:
        satisfied = False
        if not attribution in bookings:
            bookings[attribution] = 1
            satisfied = True
        if satisfied or showUnsatisfiedAttributions:
            result += "[" + pilots[i].name + ", " + attribution + "], "
        i += 1
    result = result[:-2] + "]"
    return result

def attributions_to_Array(attributions: list[str], pilots: list[Pilot]) -> list[list]:
    result = []
    bookings = {}
    i = 0
    for attribution in attributions:
        satisfied = False
        if not attribution in bookings:
            bookings[attribution] = 1
            satisfied = True
        if satisfied:
            result.append([pilots[i].name, attribution])
        else:
           result.append([pilots[i].name, ""])
        i += 1
    return result


def evaluate(combination: list[str]):
    unique = set(combination)
    return len(unique)


def assign(pilots: list[Pilot]):
    start_ns = time.time_ns()
    bestCombination: list[str] = None

    pilots.sort(key=lambda pilot: pilot.canardos)

    hardwares = []
    for pilot in pilots:
        for request in pilot.requests:
            hardwares.append(request)
    hardwares = list(set(hardwares))

    pilots_count_for_run = min(len(pilots), len(hardwares))
    found: bool = False

    while not found and pilots_count_for_run <= len(pilots):

        #        print("\nRun " + str(pilots_count_for_run) + " pilotes")
        selected_pilots = pilots[:pilots_count_for_run]

        run = Run()

        combination = run.getFirstCombination(selected_pilots)
        bestEvaluation = evaluate(combination)
        bestCombination = combination.copy()
        count = 0
        #   print(str(count) + " " + str(combination) + " -> " + str(bestEvaluation))

        while run.getNextCombination(selected_pilots, combination):
            count += 1
            evaluation = evaluate(combination)
            #       print(str(count)+" "+str(combination)+" -> "+str(evaluation))
            if evaluation > bestEvaluation:
                bestCombination = combination.copy()
                bestEvaluation = evaluation
                found = bestEvaluation == len(hardwares)

        pilots_count_for_run += 1

    print("\nBest combination:")
    print(toStr(bestCombination, selected_pilots, False) + " -> " + str(bestEvaluation) + " / " + str((time.time_ns() - start_ns) / 1000000000) + "s")
    return attributions_to_Array(bestCombination, selected_pilots)


def load_data(filename: str):
    pilots: list[Pilot] = []
    hardwares: list[str] = []

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
                hardwares.append(hardware)
            pilots.append(pilot)

    hardwares = list(set(hardwares))
    print("Hardware: " + str(hardwares))
    return pilots, hardwares


def run_from_file(filename: str):
    pilots, hardwares = load_data(filename)
    assign(pilots, len(hardwares))


def build_random_problem():
    MAX_PILOT = 9
    MAX_HARDWARE = 9
    pilots: list[Pilot] = []
    used_hardwares = []

    hardware_count = int(random.random() * MAX_HARDWARE) + 1
    pilots_count = int(random.random() * MAX_PILOT) + 1

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


def produce_random_test_and_result():
    pilots = build_random_problem()
    result = assign(pilots)

    return pilots, result


def produce_random_tests(dir, count):
    tests = []
    for i in range(0, count):
        pilots, result = produce_random_test_and_result()
        tests.append([pilots, result])

    export_random_test_to_js_munkres(tests, dir)
    export_random_test_to_js_biplace_booking(tests, dir)


def main():
    # run_from_file(r"../tests/test9.txt")

    produce_random_tests('/home/ju/dev/attributionBiplace/testsAuto', 100)


if __name__ == '__main__':
    main()
