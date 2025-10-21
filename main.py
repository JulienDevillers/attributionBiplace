import argparse
import csv
import sys


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


class Attribution:
    def __init__(self, pilot: str, hardware: str):
        self.pilot = pilot
        self.hardware = hardware
        self.satisfied = False


class Combination:
    def __init__(self, attributions: list[Attribution]):
        self.attributions: list[Attribution] = attributions
        self.evaluation = -1

    def evaluate(self):
        bookings = {}
        satisfiedCount = 0

        for attribution in self.attributions:
            hardware = attribution.hardware
            if not hardware in bookings:
                bookings[hardware] = 1
                satisfiedCount += 1
                attribution.satisfied = True
        self.evaluation = satisfiedCount

    def toStr(self, excludeNotSatisfied: bool) -> str:
        result = "["
        for attribution in self.attributions:
            if attribution.satisfied or excludeNotSatisfied:
                result += "[" + attribution.pilot + ", " + attribution.hardware + "], "
        result = result[:-2] + "]"
        return result


class Run:
    def __init__(self):
        self.combinations: list[Combination] = []

    def appendCombination(self, pilots: list[Pilot], pilot_id: int, preinit: list[Attribution]):
        if pilot_id == len(pilots):
            self.combinations.append(Combination(preinit))
        else:
            for request in pilots[pilot_id].requests:
                p = preinit.copy()
                attribution = Attribution(pilots[pilot_id].name, request)
                p.append(attribution)
                self.appendCombination(pilots, pilot_id + 1, p)

    def buildCombinations(self, pilots: list[Pilot]):
        self.appendCombination(pilots, 0, [])

    def combinationsCount(self):
        return len(self.combinations)

    def at(self, index: int):
        return self.combinations[index]


def assign(pilots: list[Pilot], hardwaresCount):
    bestCombination: Combination = None

    pilots.sort(key=lambda pilot: pilot.canardos)

    i = hardwaresCount
    found: bool = False

    while not found and i < len(pilots):

        print("\nRun " + str(i) + " pilotes")
        selected_pilots = pilots[:i]

        run = Run()
        run.buildCombinations(selected_pilots)

        for j in range(0, run.combinationsCount()):
            combination = run.at(j)
            combination.evaluate()
            print(combination.toStr(True) + " -> ", str(combination.evaluation))

            if bestCombination is None or combination.evaluation > bestCombination.evaluation:
                bestCombination = combination
                found = bestCombination.evaluation == hardwaresCount
        i += 1

    print("\nBest combination:")
    print(bestCombination.toStr(False) + " -> " + str(bestCombination.evaluation))


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


def main():
    pilots, hardwares = load_data(r"test1.txt")
    assign(pilots, len(hardwares))


if __name__ == '__main__':
    main()
