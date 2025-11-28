import os.path

from types_ import Pilot

JS_MUNKRES_HEADER = """import { assignTandemToPilots } from '../tandemAssign';

interface Pilot {
  name?: string;
  points: number;
  wishes: string[];
}

interface Assignment {
  pilotName: string;
  tandemName: string | undefined;
}


function getAssignmentForPilotName(assignments: Assignment[], pilotName: string): Assignment | undefined {
  return assignments.find(function (assignment) {
    return assignment.pilotName === pilotName;
  });
}
 
describe('assignTandemToPilotsRandomTests', () => {
"""
JS_MUNKRES_BELLY = """    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
"""

JS_BIPLACE_BOOKING_HEADER = """import { DateValueObject } from '@libs/ddd/date.value-object';
import { TestBuilder } from './test-builder';

"""


def export_random_test_to_js_munkres(tests, filename_radix):
    with open(os.path.join(filename_radix, "tandemAssignRandom.test.ts"), "w") as f:
        f.write(JS_MUNKRES_HEADER)
        i = 0
        for test in tests:
            pilots = test[0]
            results = test[1]
            f.write("  it('should solve this set " + str(i) + "', () => {\n")
            f.write("    const pilots: Pilot[] = [\n")

            for pilot in pilots:
                pilot_: Pilot = pilot
                wishes = ""
                for request in pilot_.requests:
                    wishes += "'%s', " % request
                f.write("      { name: '%s', points: %d, wishes: [%s] },\n" % (pilot_.name, pilot_.canardos, wishes))
            f.write("    ];\n")
            f.write(JS_MUNKRES_BELLY)
            f.write("    expect(result.assignments.length).toBe(%d);\n" % len(pilots))

            for result in results:
                if result[1] == "":
                    assigned = "undefined"
                else:
                    assigned = "'" + result[1] + "'"

                f.write("    expect(getAssignmentForPilotName(result.assignments, '%s')!.tandemName).toBe(%s);\n" % (result[0], assigned))
            f.write("  });\n\n")
            i += 1

        f.write("});\n")


def export_random_test_to_js_biplace_booking(tests, dir):
    with  open(os.path.join(dir, "index.ts"), "w") as findex:
        with open(os.path.join(dir, "test-case-random.test.ts"), "w") as f:
            f.write(JS_BIPLACE_BOOKING_HEADER)
            i = 0
            for test in tests:
                findex.write("export { testCaseRandom%d } from './test-case-random'\n" % i)

                pilots = test[0]
                results = test[1]

                f.write("export const testCaseRandom%d = () => {\n" % i)
                f.write("  const createdAt = DateValueObject.fromDate(new Date('2025-11-20T10:00:00Z'));\n")

                f.write("  let testBuilder: TestBuilder = new TestBuilder(\n")
                f.write("     'should attribute packs based on priority and conflict resolution %d',\n" % i)
                f.write("  );\n")

                for pilot in pilots:
                    pilot_: Pilot = pilot
                    wishes = ""
                    for request in pilot_.requests:
                        wishes += "'%s', " % request

                    for result in results:
                        if result[0]==pilot_.name:
                            if result[1] == "":
                                assigned = "undefined"
                            else:
                                assigned = "'" + result[1] + "'"
                    f.write("  testBuilder.addWish('%s', %d, createdAt, [%s], %s);\n" % (pilot_.name, pilot_.canardos, wishes, assigned))

                f.write("\n  return testBuilder.buildTest();\n ")

                f.write("});\n\n")
