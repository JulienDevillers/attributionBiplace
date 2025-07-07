import argparse
import csv
import sys
from dataclasses import dataclass

# format fichier tab :  pilote  canardos    hardware_priority_1 hardware_priority_2 hardware_priority_3 hardware_priority_4 hardware_priority_5 hardware_priority_6


pilots = []  # of Pilot
hardwares = []


@dataclass
class Pilot:
    def __init__(self):
        self.name = ""
        self.canardos = 0
        self.requests = []
        self.served = False
        return


def append_combinaison(combinaisons, pilots: [], pilot_id: int, radix: []):
    if pilot_id >= len(pilots):
        combinaisons.append(radix)
    else:
        for request in pilots[pilot_id].requests:
            r = radix.copy()
            r.append([pilots[pilot_id].name, request])
            append_combinaison(combinaisons, pilots, pilot_id + 1, r)


def evaluate_combinaison(combinaison) -> bool:
    bookings = {}
    satisfied = 0
    for attribution in combinaison:

        hardware = attribution[1]
        if hardware in bookings:
            pass
        else:
            bookings[hardware] = 1
            satisfied += 1

    return satisfied


def attribution():
    global pilots
    global hardwares

    best_evaluation = 0
    best_combinaison = []

    pilots.sort(key=lambda pilot: pilot.canardos)

    i = 0
    found: bool = False
    while not found and i < len(pilots):
        print("\nRun " + str(i))

        selected_pilots = pilots[:i + 1]
        combinaisons = []

        append_combinaison(combinaisons, selected_pilots, 0, [])
        for combinaison in combinaisons:
            evaluation = evaluate_combinaison(combinaison)
            print(str(combinaison) + " -> " + str(evaluation))
            if evaluation > best_evaluation:
                best_evaluation = evaluation
                best_combinaison = combinaison.copy()
                found = evaluation == len(hardwares)
        i += 1

    print("\nBest combinaison:")
    print(str(best_combinaison) + " -> " + str(best_evaluation))


def add_requested_hardware(pilot: Pilot, hardware: str):
    pilot.requests.append(hardware)
    global hardwares
    hardwares.append(hardware)


def load_data(filename: str):
    global pilots
    global hardwares

#    with open(filename, 'r') as csvfile:
    with sys.stdin as csvfile:
        data_csv = csv.reader(csvfile, delimiter='\t')
        headers_row = next(data_csv, None)
        for row in data_csv:
            pilot = Pilot()
            pilot.name = row[0]
            pilot.canardos = int(row[1])
            for i in range(2, len(row)):
                add_requested_hardware(pilot, row[i])
            pilots.append(pilot)

    hardwares = list(set(hardwares))
    print("Hardware: " + str(hardwares))


def main():

    load_data(r"f:/Nextcloud/parapente/soft réservation matériel/test1.txt")
    attribution()


if __name__ == '__main__':
    main()
