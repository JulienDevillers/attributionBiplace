from types_ import *
import time


# Class Run, permet d'obtenir toutes les solutions possibles
class Run:
    # Renvoie un tableau de biplaces. L ieme est affecté au ieme pilote (ordonné du plus au moins prioritaire)
    def get_first_combination(self, pilots: list[Pilot]) -> list[str]:
        result = []
        for pilot in pilots:
            pilot.index = 0
            result.append(pilot.requests[0])
        return result

    # Renvoie la prochaine combinaison en modifiant en premier le bas de l'arbre (pilotes les moins prioritaires)
    # Renvoie un tableau de biplaces. L ieme est affecté au ieme pilote (ordonné du plus au moins prioritaire)
    def get_next_combination(self, pilots: list[Pilot], result: list[str]):
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


def to_str(attributions: list[str], pilots: list[Pilot], show_unsatisfied_attributions: bool) -> str:
    result = "["
    bookings = {}
    i = 0
    for attribution in attributions:
        satisfied = False
        if not attribution in bookings:
            bookings[attribution] = 1
            satisfied = True
        if satisfied or show_unsatisfied_attributions:
            result += "[" + pilots[i].name + ", " + attribution + "], "
        i += 1
    result = result[:-2] + "]"
    return result


def attributions_to_array(attributions: list[str], pilots: list[Pilot]) -> list[list]:
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


# Compare deux listes d'id de pilotes non assignés(rappel : les ids représentent la priorité).
# La meilleure est la plus courte.
# En cas d'égalité, on compare le contenu. On itère sur les éléments des deux listes tant que les ids
# de sont les mêmes. Dès qu'ils sont différents, la meilleure solution est celle qui sert le
# pilote de priorité plus élevée.
def this_unassigneds_is_better_than_this_one(this, this_one):
    if len(this) < len(this_one):
        return True
    if len(this) > len(this_one):
        return False

    i = 0
    while i < len(this):
        if this[i] > this_one[i]:
            return True
        i += 1
    return False


# Renvoie le nombre d'affectations et les ids des pilotes non affectés de la solution.
# l'idée étant que le but est que le premier non affecté soit  assigné
# au pilote de priorité la plus faible possible
def evaluate(combination: list[str]):
    tandems_assigned = set()
    unassigneds = []
    i = 0
    for current_tandem_name in combination:
        current_tandem_as_set = {current_tandem_name}
        if not (tandems_assigned & current_tandem_as_set) == current_tandem_as_set:
            tandems_assigned = tandems_assigned.union(current_tandem_as_set)
        else:
            unassigneds.append(i)
        i += 1

    return len(tandems_assigned), unassigneds


# Affecte les biplaces au pilotes
# Principe de calcul :
# Note : il s'agit d'un algo brute force qui ne fonctionne que parce qu'on a une petite volumétrie.
# 1- Soit n le nombre de matériels disponibles
# 2- On choisit les n pilotes les plus prioritaires
# 3- On évalue toutes les combinaisons d'attribution (pilote-matériel) possibles et on retient
#    celle qui affecte du matériel au plus grand nombre de pilotes et qui minimise
#    les priorités des pilotes sans biplace ( = pour deux solutions qui affectent
#    le mm nombre de pilotes avec des pilotes sans affectation, on préfère celle qui affecte
#    du matériel au pilote de priorité 2 que de priorité 3). Voir fonction this_unassigned_is_better_than_this_one.
#    L'ordre dans lequel la partie qui produit les solutions fonctionne a son importance (voir fonction Run.get_next_combination)
# 4- S'il existe une solution qui attribue tous les biplaces, l'aglo s'arrête sinon on reprend à l'étape 2 avec n = n+1
def assign(pilots: list[Pilot]):
    start_ns = time.time_ns()
    best_combination: list[str]

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

        combination = run.get_first_combination(selected_pilots)
        best_evaluation, best_unassigneds = evaluate(combination)
        best_combination = combination.copy()


        count = 0
 #       print(str(count) + " " + str(combination) + " -> " + str(best_evaluation) + " / " + str(best_unassigneds))

        while run.get_next_combination(selected_pilots, combination):
            count += 1
            evaluation, unassigneds = evaluate(combination)
            if evaluation > best_evaluation or (evaluation == best_evaluation and this_unassigneds_is_better_than_this_one(unassigneds, best_unassigneds)):
                best_combination = combination.copy()
                best_evaluation = evaluation
                best_unassigneds = unassigneds
            #     print(str(count) + " " + str(combination) + " -> " + str(evaluation) + " / " + str(unassigneds)+ " best")
            # else:
            #     print(str(count) + " " + str(combination) + " -> " + str(evaluation) + " / " + str(unassigneds))

        found = best_evaluation == len(hardwares)

        pilots_count_for_run += 1

    # print("\nBest combination:")
    # print(toStr(best_combination, selected_pilots, False) + " -> " + str(best_evaluation) + " / " + str((time.time_ns() - start_ns) / 1000000000) + "s")
    return attributions_to_array(best_combination, selected_pilots)
