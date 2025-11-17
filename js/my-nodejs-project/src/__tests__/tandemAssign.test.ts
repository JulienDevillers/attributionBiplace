import { assignTandemToPilots } from '../tandemAssign';

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

describe('assignTandemToPilots', () => {
  it('should solve this set', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['I', 'J', 'K'] },
      { name: 'B', points: 2, wishes: ['I', 'J', 'K'] },
      { name: 'C', points: 3, wishes: ['I', 'J', 'K'] },
    ];

    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(result.assignmentData).toBeDefined();

    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });


  it('should solve this set', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'B', points: 2, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'C', points: 3, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'D', points: 4, wishes: ['I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R'] },
      { name: 'E', points: 5, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R'] },
      { name: 'F', points: 6, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'G', points: 7, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'H', points: 8, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'I', points: 9, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
      { name: 'J', points: 10, wishes: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignments.length).toBe(10);
    expect(result.assignmentData).toBeDefined();
    expect(getAssignmentForPilotName(result.assignments, 'A')?.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')?.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')?.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')?.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')?.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')?.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')?.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'H')?.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'I')?.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'J')?.tandemName).toBe('R');
  });

  it('should solve this set', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['I', 'J', 'K'] },
      { name: 'B', points: 2, wishes: ['I'] },
      { name: 'C', points: 3, wishes: ['J', 'K'] },
      { name: 'D', points: 6, wishes: ['K'] },
      { name: 'E', points: 4, wishes: ['I', 'J', 'L'] },
      { name: 'F', points: 5, wishes: ['I', 'J', 'M'] },
      ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(result.assignmentData).toBeDefined();
    expect(getAssignmentForPilotName(result.assignments, 'A')?.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')?.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')?.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')?.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')?.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')?.tandemName).toBe('M');
  });

it('should solve this set', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 1, wishes: ['K'] },
      { name: 'E', points: 2, wishes: ['I', 'J', 'L'] },
      { name: 'F', points: 3, wishes: ['I', 'J', 'M'] },
      { name: 'B', points: 4, wishes: ['I'] },
      { name: 'C', points: 5, wishes: ['J', 'K'] },
      { name: 'A', points: 6, wishes: ['I', 'J', 'K'] },
      ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(result.assignmentData).toBeDefined();
    expect(getAssignmentForPilotName(result.assignments, 'A')?.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')?.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')?.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')?.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')?.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')?.tandemName).toBe('M');
  });

});

