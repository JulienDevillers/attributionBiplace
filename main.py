import argparse
import csv
import sys
from dataclasses import dataclass


# format fichier tab :  pilote  canardos    hardware_priority_1 hardware_priority_2 hardware_priority_3 hardware_priority_4 hardware_priority_5 hardware_priority_6


class Pilot:
    def __init__(self):
        self.name = ""
        self.canardos = 0
        self.requests = []
        self.served = False
        return

    def add_requested_hardware(self, hardware: str):
        self.requests.append(hardware)
        global hardwares
        hardwares.append(hardware)

class Attribution:
    def __init__(self, pilot: str, hardware: str):
        self.pilot = pilot
        self.hardware = hardware
        self.satisfied = False


pilots: list[Pilot] = []
hardwares: list[str] = []


def append_combinaison(combinaisons: list[list[Attribution]], pilots: list[Pilot], pilot_id: int, preinit: list[Attribution]):
    if pilot_id >= len(pilots):
        combinaisons.append(preinit)
    else:
        for request in pilots[pilot_id].requests:
            p = preinit.copy()
            attribution = Attribution(pilots[pilot_id].name, request)
            p.append(attribution)
            append_combinaison(combinaisons, pilots, pilot_id + 1, p)


def initCombinaisons(combinaisons: list[list[Attribution]], pilots: list[Pilot]):
    append_combinaison(combinaisons, pilots, 0, [])


def evaluate_combinaison(combinaison) -> bool:
    bookings = {}
    satisfied = 0
    for attribution in combinaison:

        hardware = attribution.hardware
        if not hardware in bookings:
            bookings[hardware] = 1
            satisfied += 1
            attribution.satisfied = True

    return satisfied


def combinaisonToStr(combinaison: list[Attribution], excludeNotSatisfied: bool) -> str:
    result = "["
    for attribution in combinaison:
        if attribution.satisfied or excludeNotSatisfied:
            result += "[" + attribution.pilot + ", " + attribution.hardware + "], "
    result = result[:-2] + "]"
    return result


def attribution():
    global pilots
    global hardwares

    best_evaluation = 0
    best_combinaison: list[Attribution]

    pilots.sort(key=lambda pilot: pilot.canardos)

    i = len(hardwares) - 1
    found: bool = False
    while not found and i < len(pilots):
        print("\nRun " + str(i + 1) + " pilotes")

        selected_pilots = pilots[:i + 1]
        combinaisons: list[list[Attribution]] = []

        initCombinaisons(combinaisons, selected_pilots)

        for combinaison in combinaisons:
            evaluation = evaluate_combinaison(combinaison)
            print(combinaisonToStr(combinaison, True) + " -> ", str(evaluation))
            if evaluation > best_evaluation:
                best_evaluation = evaluation
                best_combinaison = combinaison.copy()
                found = evaluation == len(hardwares)
        i += 1

    print("\nBest combinaison:")
    print(combinaisonToStr(best_combinaison, False) + " -> " + str(best_evaluation))


def load_data(filename: str):
    global pilots
    global hardwares

    with open(filename, 'r') as csvfile:
        #    with sys.stdin as csvfile:
        data_csv = csv.reader(csvfile, delimiter='\t')
        headers_row = next(data_csv, None)
        for row in data_csv:
            pilot = Pilot()
            pilot.name = row[0]
            pilot.canardos = int(row[1])
            for i in range(2, len(row)):
                pilot.add_requested_hardware(row[i])
            pilots.append(pilot)

    hardwares = list(set(hardwares))
    print("Hardware: " + str(hardwares))


def main():
    load_data(r"test1.txt")
    attribution()


if __name__ == '__main__':
    main()
