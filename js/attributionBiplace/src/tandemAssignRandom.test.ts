import { assignTandemToPilots } from './tandemAssign';

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
/*  it('should solve this set 0', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['K', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 1', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 43, wishes: ['I', 'N', 'L', 'J', ] },
      { name: 'A', points: 77, wishes: ['I', 'N', 'O', 'M', 'K', 'L', 'J', ] },
      { name: 'B', points: 96, wishes: ['O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
  });

  it('should solve this set 2', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 26, wishes: ['J', ] },
      { name: 'G', points: 30, wishes: ['N', 'M', ] },
      { name: 'C', points: 36, wishes: ['J', 'I', 'L', ] },
      { name: 'A', points: 53, wishes: ['K', ] },
      { name: 'E', points: 69, wishes: ['I', 'K', 'J', 'M', 'N', 'L', ] },
      { name: 'D', points: 87, wishes: ['L', 'K', 'N', 'J', ] },
      { name: 'H', points: 91, wishes: ['J', 'I', 'K', 'M', ] },
      { name: 'B', points: 92, wishes: ['I', 'L', 'J', 'M', 'N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 3', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 20, wishes: ['L', 'I', 'K', 'J', ] },
      { name: 'C', points: 27, wishes: ['L', 'J', 'K', ] },
      { name: 'B', points: 40, wishes: ['K', 'J', ] },
      { name: 'D', points: 78, wishes: ['L', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 4', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 28, wishes: ['J', 'P', 'I', 'K', 'L', 'O', 'N', ] },
      { name: 'F', points: 38, wishes: ['N', 'I', 'O', ] },
      { name: 'B', points: 41, wishes: ['O', 'I', 'K', ] },
      { name: 'A', points: 51, wishes: ['N', 'K', 'P', 'J', 'O', 'M', ] },
      { name: 'E', points: 54, wishes: ['I', 'L', 'N', ] },
      { name: 'C', points: 86, wishes: ['O', 'M', 'L', 'P', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
  });

  it('should solve this set 5', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 14, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 6', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['N', 'K', ] },
      { name: 'C', points: 69, wishes: ['I', 'N', ] },
      { name: 'A', points: 99, wishes: ['M', 'L', 'J', 'O', 'N', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 7', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 15, wishes: ['K', 'P', 'J', 'M', 'I', 'O', ] },
      { name: 'B', points: 18, wishes: ['N', 'I', 'L', 'J', 'M', ] },
      { name: 'E', points: 39, wishes: ['O', 'P', ] },
      { name: 'A', points: 43, wishes: ['P', ] },
      { name: 'C', points: 51, wishes: ['O', 'N', 'P', 'K', 'I', 'M', 'Q', ] },
      { name: 'D', points: 78, wishes: ['L', 'P', 'Q', 'I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 8', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 15, wishes: ['J', 'I', ] },
      { name: 'E', points: 25, wishes: ['I', 'J', 'L', 'K', ] },
      { name: 'B', points: 29, wishes: ['L', 'K', 'I', 'J', ] },
      { name: 'D', points: 95, wishes: ['L', 'J', ] },
      { name: 'A', points: 98, wishes: ['K', 'J', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 9', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 15, wishes: ['L', 'K', 'J', 'I', 'M', ] },
      { name: 'E', points: 25, wishes: ['M', 'I', 'K', ] },
      { name: 'C', points: 46, wishes: ['I', 'K', 'L', 'M', 'J', ] },
      { name: 'F', points: 53, wishes: ['K', 'M', 'L', ] },
      { name: 'B', points: 60, wishes: ['I', 'J', 'L', ] },
      { name: 'A', points: 70, wishes: ['J', 'K', 'M', 'I', 'L', ] },
      { name: 'G', points: 97, wishes: ['K', 'L', 'J', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 10', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 0, wishes: ['I', 'L', 'M', ] },
      { name: 'F', points: 9, wishes: ['I', ] },
      { name: 'A', points: 11, wishes: ['J', 'M', 'I', ] },
      { name: 'E', points: 28, wishes: ['L', 'J', 'M', 'I', ] },
      { name: 'D', points: 81, wishes: ['I', 'L', 'J', 'M', 'K', ] },
      { name: 'C', points: 96, wishes: ['I', 'J', 'K', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
  });

  it('should solve this set 11', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 76, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 12', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 3, wishes: ['K', 'M', 'I', 'L', 'N', ] },
      { name: 'F', points: 10, wishes: ['J', ] },
      { name: 'E', points: 20, wishes: ['M', 'K', 'J', ] },
      { name: 'A', points: 27, wishes: ['M', 'N', 'K', 'J', 'L', 'I', ] },
      { name: 'C', points: 28, wishes: ['I', 'K', ] },
      { name: 'B', points: 99, wishes: ['L', 'I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 13', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 3, wishes: ['K', ] },
      { name: 'C', points: 62, wishes: ['K', 'L', 'O', 'I', ] },
      { name: 'D', points: 67, wishes: ['M', 'K', 'N', 'J', 'L', 'O', ] },
      { name: 'A', points: 98, wishes: ['K', 'I', 'L', 'N', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 14', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 12, wishes: ['I', 'J', 'L', ] },
      { name: 'D', points: 29, wishes: ['M', 'L', 'K', 'I', 'J', ] },
      { name: 'C', points: 50, wishes: ['K', 'I', 'J', 'L', 'M', ] },
      { name: 'B', points: 64, wishes: ['L', 'K', 'J', 'M', 'I', ] },
      { name: 'I', points: 69, wishes: ['I', ] },
      { name: 'H', points: 80, wishes: ['J', 'L', 'K', 'M', 'I', ] },
      { name: 'F', points: 83, wishes: ['L', 'M', 'K', 'I', ] },
      { name: 'A', points: 98, wishes: ['M', 'I', ] },
      { name: 'G', points: 99, wishes: ['L', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('I');
  });

  it('should solve this set 15', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 24, wishes: ['I', 'J', 'K', ] },
      { name: 'A', points: 82, wishes: ['I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 16', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['J', 'I', ] },
      { name: 'B', points: 97, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 17', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 56, wishes: ['J', ] },
      { name: 'B', points: 87, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 18', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 39, wishes: ['J', 'O', 'M', 'K', 'Q', 'I', 'N', 'L', ] },
      { name: 'C', points: 59, wishes: ['L', 'Q', 'O', 'J', 'M', ] },
      { name: 'B', points: 65, wishes: ['Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
  });

  it('should solve this set 19', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 3, wishes: ['M', 'K', ] },
      { name: 'H', points: 17, wishes: ['L', 'K', 'M', 'O', ] },
      { name: 'F', points: 32, wishes: ['J', 'M', 'N', 'K', 'O', 'I', ] },
      { name: 'A', points: 38, wishes: ['J', 'K', 'O', 'L', 'N', 'M', 'I', ] },
      { name: 'B', points: 48, wishes: ['M', 'J', 'K', 'O', 'N', ] },
      { name: 'E', points: 53, wishes: ['I', 'O', 'J', 'L', ] },
      { name: 'G', points: 56, wishes: ['L', ] },
      { name: 'C', points: 64, wishes: ['K', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
  });

  it('should solve this set 20', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 22, wishes: ['M', 'P', 'N', 'L', 'K', 'I', ] },
      { name: 'D', points: 31, wishes: ['J', 'L', 'M', 'O', 'P', 'K', 'N', ] },
      { name: 'E', points: 66, wishes: ['O', 'J', ] },
      { name: 'B', points: 80, wishes: ['P', 'K', 'I', 'M', 'N', 'L', 'J', ] },
      { name: 'A', points: 90, wishes: ['M', 'L', 'N', 'J', 'I', 'O', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 21', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 6, wishes: ['K', 'J', 'I', ] },
      { name: 'A', points: 89, wishes: ['M', 'K', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 22', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 46, wishes: ['J', 'I', ] },
      { name: 'B', points: 49, wishes: ['J', ] },
      { name: 'C', points: 58, wishes: ['I', ] },
      { name: 'I', points: 70, wishes: ['J', 'I', ] },
      { name: 'H', points: 71, wishes: ['J', 'I', ] },
      { name: 'E', points: 72, wishes: ['J', ] },
      { name: 'G', points: 79, wishes: ['I', 'J', ] },
      { name: 'F', points: 83, wishes: ['I', ] },
      { name: 'D', points: 88, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 23', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 1, wishes: ['J', 'I', ] },
      { name: 'B', points: 3, wishes: ['J', 'I', ] },
      { name: 'E', points: 37, wishes: ['J', 'I', ] },
      { name: 'D', points: 43, wishes: ['J', ] },
      { name: 'F', points: 67, wishes: ['I', 'J', ] },
      { name: 'G', points: 75, wishes: ['J', 'I', ] },
      { name: 'C', points: 91, wishes: ['J', 'I', ] },
      { name: 'A', points: 99, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 24', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 33, wishes: ['O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
  });

  it('should solve this set 25', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 62, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 26', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 39, wishes: ['K', 'O', 'I', 'J', 'N', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 27', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 11, wishes: ['N', 'L', 'J', 'K', 'I', ] },
      { name: 'A', points: 13, wishes: ['N', 'K', ] },
      { name: 'B', points: 31, wishes: ['J', ] },
      { name: 'C', points: 32, wishes: ['L', 'K', 'M', 'N', ] },
      { name: 'E', points: 84, wishes: ['L', 'I', 'J', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 28', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 13, wishes: ['J', ] },
      { name: 'C', points: 17, wishes: ['I', 'K', ] },
      { name: 'F', points: 27, wishes: ['L', 'K', ] },
      { name: 'E', points: 33, wishes: ['L', ] },
      { name: 'G', points: 46, wishes: ['J', 'K', 'L', ] },
      { name: 'B', points: 74, wishes: ['L', 'K', ] },
      { name: 'A', points: 82, wishes: ['I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
  });

  it('should solve this set 29', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 2, wishes: ['K', 'I', ] },
      { name: 'E', points: 3, wishes: ['N', 'L', 'I', 'J', 'O', 'M', 'K', ] },
      { name: 'B', points: 17, wishes: ['L', 'I', 'N', ] },
      { name: 'A', points: 54, wishes: ['M', 'L', 'O', 'I', 'K', ] },
      { name: 'D', points: 82, wishes: ['I', ] },
      { name: 'F', points: 99, wishes: ['M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
  });

  it('should solve this set 30', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 20, wishes: ['K', 'M', 'O', 'L', 'J', 'N', ] },
      { name: 'G', points: 29, wishes: ['I', 'N', ] },
      { name: 'I', points: 32, wishes: ['L', 'K', 'N', 'M', 'I', 'J', 'O', ] },
      { name: 'H', points: 43, wishes: ['N', 'J', 'K', 'M', 'I', 'L', ] },
      { name: 'D', points: 57, wishes: ['M', 'J', 'O', 'K', 'N', 'I', ] },
      { name: 'E', points: 61, wishes: ['I', 'K', 'N', 'J', 'O', 'L', ] },
      { name: 'C', points: 65, wishes: ['M', 'O', 'J', ] },
      { name: 'F', points: 66, wishes: ['O', 'L', 'K', ] },
      { name: 'A', points: 75, wishes: ['N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
  });

  it('should solve this set 31', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 22, wishes: ['J', ] },
      { name: 'C', points: 47, wishes: ['K', ] },
      { name: 'A', points: 66, wishes: ['I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 32', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['I', 'J', 'K', ] },
      { name: 'D', points: 10, wishes: ['I', ] },
      { name: 'F', points: 26, wishes: ['K', 'J', ] },
      { name: 'B', points: 82, wishes: ['J', ] },
      { name: 'E', points: 83, wishes: ['I', 'J', 'K', ] },
      { name: 'C', points: 93, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
  });

  it('should solve this set 33', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 43, wishes: ['O', 'J', 'I', 'M', 'L', 'K', 'P', ] },
      { name: 'B', points: 96, wishes: ['O', 'N', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
  });

  it('should solve this set 34', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 43, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 35', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 10, wishes: ['J', 'K', ] },
      { name: 'F', points: 65, wishes: ['J', 'M', 'L', 'I', ] },
      { name: 'C', points: 67, wishes: ['L', 'M', 'I', 'J', 'K', ] },
      { name: 'E', points: 73, wishes: ['I', 'L', 'J', ] },
      { name: 'D', points: 80, wishes: ['K', 'J', ] },
      { name: 'A', points: 92, wishes: ['I', 'L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
  });

  it('should solve this set 36', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['O', 'P', 'L', ] },
      { name: 'B', points: 95, wishes: ['L', 'O', 'I', 'J', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 37', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 10, wishes: ['L', 'K', ] },
      { name: 'D', points: 16, wishes: ['L', ] },
      { name: 'F', points: 23, wishes: ['J', ] },
      { name: 'E', points: 40, wishes: ['L', ] },
      { name: 'C', points: 71, wishes: ['L', 'I', 'J', 'K', ] },
      { name: 'A', points: 76, wishes: ['J', 'I', ] },
      { name: 'G', points: 94, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 38', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 13, wishes: ['J', ] },
      { name: 'E', points: 23, wishes: ['J', ] },
      { name: 'B', points: 38, wishes: ['J', 'I', ] },
      { name: 'A', points: 41, wishes: ['I', ] },
      { name: 'G', points: 45, wishes: ['J', 'I', ] },
      { name: 'F', points: 56, wishes: ['I', 'J', ] },
      { name: 'C', points: 83, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 39', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 3, wishes: ['K', ] },
      { name: 'B', points: 24, wishes: ['J', ] },
      { name: 'D', points: 33, wishes: ['J', ] },
      { name: 'G', points: 55, wishes: ['K', ] },
      { name: 'E', points: 91, wishes: ['J', 'K', ] },
      { name: 'F', points: 92, wishes: ['I', ] },
      { name: 'C', points: 96, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 40', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 71, wishes: ['K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 41', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 70, wishes: ['M', ] },
      { name: 'C', points: 77, wishes: ['K', 'M', 'I', 'Q', 'O', 'N', 'J', 'L', ] },
      { name: 'B', points: 81, wishes: ['N', 'J', ] },
      { name: 'A', points: 90, wishes: ['K', 'J', 'O', 'M', 'Q', ] },
      { name: 'D', points: 98, wishes: ['L', 'J', 'M', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 42', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 3, wishes: ['I', 'J', ] },
      { name: 'G', points: 17, wishes: ['I', 'J', ] },
      { name: 'B', points: 18, wishes: ['I', ] },
      { name: 'C', points: 25, wishes: ['J', 'I', ] },
      { name: 'F', points: 32, wishes: ['J', ] },
      { name: 'D', points: 34, wishes: ['J', ] },
      { name: 'A', points: 69, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
  });

  it('should solve this set 43', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 8, wishes: ['I', 'K', 'L', 'J', ] },
      { name: 'C', points: 19, wishes: ['J', 'L', 'I', ] },
      { name: 'D', points: 78, wishes: ['J', 'L', 'K', ] },
      { name: 'B', points: 94, wishes: ['I', 'L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 44', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 3, wishes: ['J', 'I', ] },
      { name: 'G', points: 11, wishes: ['J', ] },
      { name: 'D', points: 16, wishes: ['J', ] },
      { name: 'E', points: 19, wishes: ['J', 'I', ] },
      { name: 'H', points: 47, wishes: ['J', 'I', ] },
      { name: 'C', points: 49, wishes: ['J', ] },
      { name: 'B', points: 56, wishes: ['I', 'J', ] },
      { name: 'A', points: 86, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
  });

  it('should solve this set 45', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 35, wishes: ['Q', 'L', 'J', 'M', 'P', 'K', 'O', 'N', ] },
      { name: 'A', points: 44, wishes: ['M', 'P', 'J', 'O', 'N', 'L', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });
*/
  it('should solve this set 46', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 1, wishes: ['J', ] },
      { name: 'A', points: 2, wishes: ['J', ] },
      { name: 'B', points: 3, wishes: ['I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });
/*
  it('should solve this set 47', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 15, wishes: ['K', 'M', 'O', ] },
      { name: 'A', points: 54, wishes: ['K', 'O', 'P', 'I', 'J', 'L', ] },
      { name: 'B', points: 64, wishes: ['P', 'L', 'M', 'J', ] },
      { name: 'C', points: 65, wishes: ['J', 'P', ] },
      { name: 'F', points: 72, wishes: ['L', 'K', 'P', ] },
      { name: 'D', points: 87, wishes: ['K', 'M', 'I', 'N', 'J', 'P', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
  });

  it('should solve this set 48', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 10, wishes: ['I', 'K', ] },
      { name: 'A', points: 64, wishes: ['I', 'K', 'J', ] },
      { name: 'B', points: 75, wishes: ['J', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 49', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 86, wishes: ['L', 'Q', 'K', 'P', 'M', 'I', ] },
      { name: 'A', points: 97, wishes: ['M', 'J', 'I', 'K', 'Q', 'N', 'L', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 50', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 42, wishes: ['K', 'L', 'I', ] },
      { name: 'B', points: 52, wishes: ['M', 'I', 'O', 'P', 'L', 'N', 'K', 'J', ] },
      { name: 'C', points: 76, wishes: ['O', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
  });

  it('should solve this set 51', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 0, wishes: ['N', 'J', ] },
      { name: 'A', points: 21, wishes: ['M', 'P', 'L', 'J', 'I', ] },
      { name: 'B', points: 29, wishes: ['O', 'P', 'N', 'K', 'M', 'L', ] },
      { name: 'C', points: 60, wishes: ['L', 'K', 'I', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 52', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 1, wishes: ['L', ] },
      { name: 'A', points: 14, wishes: ['L', 'J', 'I', 'K', ] },
      { name: 'D', points: 21, wishes: ['M', ] },
      { name: 'C', points: 50, wishes: ['I', 'L', 'J', 'M', ] },
      { name: 'B', points: 69, wishes: ['K', 'I', 'J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 53', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 72, wishes: ['I', 'L', 'N', 'K', 'J', ] },
      { name: 'B', points: 74, wishes: ['K', 'L', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 54', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 2, wishes: ['L', 'K', 'I', 'J', ] },
      { name: 'F', points: 18, wishes: ['J', 'K', 'L', 'I', ] },
      { name: 'B', points: 22, wishes: ['K', ] },
      { name: 'I', points: 41, wishes: ['K', ] },
      { name: 'A', points: 42, wishes: ['K', 'I', 'L', ] },
      { name: 'E', points: 44, wishes: ['J', 'I', 'K', ] },
      { name: 'D', points: 81, wishes: ['I', 'L', 'J', ] },
      { name: 'G', points: 87, wishes: ['J', ] },
      { name: 'H', points: 88, wishes: ['K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 55', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 6, wishes: ['I', ] },
      { name: 'H', points: 13, wishes: ['I', ] },
      { name: 'E', points: 30, wishes: ['I', ] },
      { name: 'G', points: 36, wishes: ['I', ] },
      { name: 'C', points: 50, wishes: ['I', ] },
      { name: 'F', points: 62, wishes: ['I', ] },
      { name: 'A', points: 74, wishes: ['I', ] },
      { name: 'D', points: 76, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 56', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 3, wishes: ['K', 'I', 'J', ] },
      { name: 'G', points: 14, wishes: ['I', 'K', 'J', ] },
      { name: 'B', points: 22, wishes: ['J', 'K', ] },
      { name: 'C', points: 23, wishes: ['I', ] },
      { name: 'D', points: 43, wishes: ['J', ] },
      { name: 'F', points: 80, wishes: ['I', ] },
      { name: 'A', points: 87, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 57', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 5, wishes: ['O', 'J', ] },
      { name: 'F', points: 18, wishes: ['I', 'O', ] },
      { name: 'C', points: 22, wishes: ['O', ] },
      { name: 'B', points: 31, wishes: ['I', 'L', 'J', 'K', 'N', ] },
      { name: 'D', points: 33, wishes: ['I', 'L', 'O', 'M', ] },
      { name: 'E', points: 49, wishes: ['M', 'L', ] },
      { name: 'G', points: 65, wishes: ['L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
  });

  it('should solve this set 58', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 9, wishes: ['M', 'K', 'O', 'J', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 59', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 47, wishes: ['O', 'L', 'K', ] },
      { name: 'C', points: 52, wishes: ['I', 'J', 'M', ] },
      { name: 'B', points: 92, wishes: ['K', 'L', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 60', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 23, wishes: ['M', 'I', 'N', 'J', ] },
      { name: 'F', points: 33, wishes: ['I', 'J', 'N', 'M', 'K', 'L', ] },
      { name: 'E', points: 47, wishes: ['M', ] },
      { name: 'C', points: 57, wishes: ['I', 'L', ] },
      { name: 'A', points: 75, wishes: ['J', 'M', 'L', 'I', 'K', 'N', ] },
      { name: 'B', points: 92, wishes: ['J', 'K', 'M', 'N', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
  });

  it('should solve this set 61', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['I', 'N', 'L', 'K', 'J', ] },
      { name: 'B', points: 12, wishes: ['K', 'N', 'I', 'J', 'L', ] },
      { name: 'D', points: 17, wishes: ['L', 'N', 'I', 'J', ] },
      { name: 'A', points: 85, wishes: ['J', ] },
      { name: 'E', points: 95, wishes: ['L', 'J', 'N', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
  });

  it('should solve this set 62', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 3, wishes: ['P', 'M', ] },
      { name: 'D', points: 10, wishes: ['N', ] },
      { name: 'I', points: 27, wishes: ['P', 'M', 'K', 'J', 'L', 'O', 'I', 'N', ] },
      { name: 'A', points: 43, wishes: ['L', ] },
      { name: 'F', points: 55, wishes: ['L', 'M', ] },
      { name: 'G', points: 57, wishes: ['O', 'I', 'J', ] },
      { name: 'E', points: 67, wishes: ['L', 'O', 'K', 'N', 'I', 'P', 'J', ] },
      { name: 'C', points: 85, wishes: ['K', 'N', 'M', 'L', ] },
      { name: 'H', points: 99, wishes: ['N', 'L', 'M', 'K', 'I', 'O', 'J', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 63', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 18, wishes: ['N', 'Q', 'I', 'P', 'O', 'J', ] },
      { name: 'E', points: 26, wishes: ['K', 'P', 'N', 'L', 'M', 'O', ] },
      { name: 'F', points: 48, wishes: ['L', 'M', ] },
      { name: 'B', points: 58, wishes: ['I', ] },
      { name: 'C', points: 79, wishes: ['N', 'K', 'O', 'Q', 'P', 'L', ] },
      { name: 'A', points: 95, wishes: ['I', 'Q', 'P', 'K', 'O', 'J', 'L', 'M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
  });

  it('should solve this set 64', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 31, wishes: ['M', 'N', 'O', 'I', 'K', ] },
      { name: 'H', points: 34, wishes: ['I', 'N', 'J', 'L', ] },
      { name: 'G', points: 38, wishes: ['I', 'M', 'N', ] },
      { name: 'F', points: 39, wishes: ['J', 'N', ] },
      { name: 'E', points: 40, wishes: ['N', 'J', 'O', 'L', ] },
      { name: 'C', points: 47, wishes: ['K', 'J', 'M', ] },
      { name: 'A', points: 73, wishes: ['K', 'M', ] },
      { name: 'I', points: 74, wishes: ['I', ] },
      { name: 'B', points: 89, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 65', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 5, wishes: ['I', 'O', ] },
      { name: 'I', points: 23, wishes: ['J', 'P', 'M', 'K', ] },
      { name: 'E', points: 35, wishes: ['N', 'M', 'Q', 'K', 'O', 'J', 'I', 'P', 'L', ] },
      { name: 'A', points: 37, wishes: ['K', 'N', 'M', 'L', 'I', 'O', 'Q', 'J', ] },
      { name: 'F', points: 40, wishes: ['M', 'K', 'O', 'P', 'L', 'I', 'N', ] },
      { name: 'C', points: 43, wishes: ['M', 'K', 'Q', 'I', 'O', ] },
      { name: 'G', points: 44, wishes: ['I', 'O', 'P', 'K', 'Q', ] },
      { name: 'B', points: 82, wishes: ['N', 'Q', 'K', 'P', 'L', 'O', 'I', 'M', 'J', ] },
      { name: 'H', points: 91, wishes: ['M', 'K', 'N', 'O', 'P', 'L', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
  });

  it('should solve this set 66', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 14, wishes: ['J', 'I', ] },
      { name: 'D', points: 28, wishes: ['J', ] },
      { name: 'G', points: 44, wishes: ['I', ] },
      { name: 'F', points: 77, wishes: ['J', ] },
      { name: 'B', points: 84, wishes: ['J', 'I', ] },
      { name: 'A', points: 95, wishes: ['I', ] },
      { name: 'C', points: 98, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 67', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 77, wishes: ['O', 'N', 'L', 'K', 'J', ] },
      { name: 'A', points: 79, wishes: ['J', 'P', ] },
      { name: 'C', points: 97, wishes: ['K', 'N', 'I', 'P', 'L', 'J', 'M', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 68', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 78, wishes: ['J', ] },
      { name: 'A', points: 91, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 69', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['K', 'M', 'J', 'L', ] },
      { name: 'F', points: 16, wishes: ['I', 'K', 'J', 'L', 'M', ] },
      { name: 'A', points: 28, wishes: ['L', 'I', 'M', 'K', ] },
      { name: 'G', points: 33, wishes: ['M', 'L', 'K', 'J', 'I', ] },
      { name: 'E', points: 67, wishes: ['K', ] },
      { name: 'D', points: 69, wishes: ['M', 'K', 'J', 'L', ] },
      { name: 'B', points: 83, wishes: ['I', 'M', 'L', ] },
      { name: 'H', points: 90, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 70', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 20, wishes: ['I', 'J', ] },
      { name: 'G', points: 24, wishes: ['I', 'J', ] },
      { name: 'C', points: 29, wishes: ['I', ] },
      { name: 'D', points: 48, wishes: ['I', ] },
      { name: 'E', points: 56, wishes: ['J', ] },
      { name: 'H', points: 57, wishes: ['J', 'I', ] },
      { name: 'F', points: 81, wishes: ['J', 'I', ] },
      { name: 'A', points: 96, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
  });

  it('should solve this set 71', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 20, wishes: ['J', 'K', 'M', ] },
      { name: 'D', points: 22, wishes: ['L', 'I', 'K', ] },
      { name: 'E', points: 50, wishes: ['K', 'I', 'M', 'J', 'L', ] },
      { name: 'A', points: 86, wishes: ['I', 'M', 'K', ] },
      { name: 'B', points: 90, wishes: ['L', 'M', 'I', 'J', 'K', ] },
      { name: 'C', points: 97, wishes: ['I', 'J', 'L', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 72', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 5, wishes: ['I', ] },
      { name: 'A', points: 6, wishes: ['I', ] },
      { name: 'B', points: 51, wishes: ['I', ] },
      { name: 'E', points: 58, wishes: ['I', ] },
      { name: 'C', points: 59, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 73', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['J', 'Q', 'K', 'M', 'N', 'L', 'O', 'I', ] },
      { name: 'C', points: 4, wishes: ['O', 'N', ] },
      { name: 'D', points: 17, wishes: ['L', 'J', 'P', 'K', 'M', ] },
      { name: 'E', points: 43, wishes: ['I', 'Q', 'L', 'P', ] },
      { name: 'F', points: 64, wishes: ['N', 'M', 'Q', 'J', 'L', 'K', 'I', ] },
      { name: 'A', points: 80, wishes: ['O', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
  });

  it('should solve this set 74', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 5, wishes: ['I', ] },
      { name: 'C', points: 26, wishes: ['I', ] },
      { name: 'A', points: 65, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 75', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 4, wishes: ['N', 'J', 'K', ] },
      { name: 'D', points: 23, wishes: ['L', ] },
      { name: 'C', points: 35, wishes: ['M', 'N', 'J', 'L', 'K', 'I', ] },
      { name: 'A', points: 42, wishes: ['M', 'N', 'J', 'I', 'L', 'K', ] },
      { name: 'B', points: 75, wishes: ['I', 'K', 'N', 'M', 'L', ] },
      { name: 'F', points: 77, wishes: ['N', 'K', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
  });

  it('should solve this set 76', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 2, wishes: ['O', 'J', 'P', 'Q', 'N', 'I', 'K', 'M', ] },
      { name: 'A', points: 32, wishes: ['I', 'Q', 'M', 'O', 'L', 'P', 'J', 'N', 'K', ] },
      { name: 'E', points: 33, wishes: ['N', 'O', 'J', 'M', 'Q', 'L', 'I', ] },
      { name: 'D', points: 53, wishes: ['I', 'P', 'O', 'M', ] },
      { name: 'G', points: 57, wishes: ['M', 'N', 'K', 'J', ] },
      { name: 'F', points: 69, wishes: ['L', 'M', 'Q', ] },
      { name: 'B', points: 91, wishes: ['M', 'O', 'Q', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
  });

  it('should solve this set 77', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 5, wishes: ['N', 'P', 'O', 'I', 'Q', ] },
      { name: 'B', points: 10, wishes: ['Q', 'P', 'I', 'O', 'L', 'J', 'K', 'M', 'N', ] },
      { name: 'A', points: 84, wishes: ['I', 'M', 'L', 'O', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 78', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 24, wishes: ['N', 'L', 'P', 'Q', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 79', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 20, wishes: ['J', ] },
      { name: 'A', points: 22, wishes: ['J', ] },
      { name: 'E', points: 33, wishes: ['J', 'I', ] },
      { name: 'G', points: 45, wishes: ['I', ] },
      { name: 'F', points: 47, wishes: ['I', ] },
      { name: 'B', points: 53, wishes: ['J', 'I', ] },
      { name: 'H', points: 56, wishes: ['J', 'I', ] },
      { name: 'C', points: 81, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 80', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['J', 'I', 'L', 'K', ] },
      { name: 'A', points: 29, wishes: ['I', 'K', ] },
      { name: 'D', points: 69, wishes: ['L', 'K', ] },
      { name: 'B', points: 96, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 81', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 47, wishes: ['P', 'L', 'J', 'N', 'O', 'M', 'I', 'K', ] },
      { name: 'B', points: 75, wishes: ['N', ] },
      { name: 'A', points: 97, wishes: ['I', 'J', 'N', 'M', 'O', 'L', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 82', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 16, wishes: ['K', 'N', 'I', 'M', ] },
      { name: 'D', points: 19, wishes: ['J', 'L', 'O', 'P', 'K', 'M', 'N', ] },
      { name: 'C', points: 25, wishes: ['M', ] },
      { name: 'A', points: 71, wishes: ['P', 'K', ] },
      { name: 'E', points: 87, wishes: ['N', 'P', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
  });

  it('should solve this set 83', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 2, wishes: ['M', 'N', 'J', ] },
      { name: 'C', points: 9, wishes: ['N', ] },
      { name: 'E', points: 15, wishes: ['L', 'M', ] },
      { name: 'B', points: 22, wishes: ['M', 'I', ] },
      { name: 'G', points: 31, wishes: ['K', 'L', 'M', ] },
      { name: 'A', points: 34, wishes: ['J', ] },
      { name: 'F', points: 69, wishes: ['M', 'N', 'J', 'K', ] },
      { name: 'I', points: 74, wishes: ['N', 'I', 'L', 'J', 'K', 'M', ] },
      { name: 'H', points: 76, wishes: ['J', 'N', 'M', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 84', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 2, wishes: ['M', 'O', 'I', ] },
      { name: 'B', points: 6, wishes: ['M', 'N', ] },
      { name: 'A', points: 15, wishes: ['L', 'O', 'M', ] },
      { name: 'D', points: 77, wishes: ['I', 'N', 'O', 'K', 'M', 'J', ] },
      { name: 'F', points: 91, wishes: ['O', 'J', 'N', 'L', 'M', 'I', 'K', ] },
      { name: 'E', points: 94, wishes: ['J', 'O', 'K', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 85', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 34, wishes: ['K', ] },
      { name: 'A', points: 58, wishes: ['K', 'L', 'M', 'I', 'J', 'N', ] },
      { name: 'C', points: 64, wishes: ['I', 'M', 'N', 'J', ] },
      { name: 'D', points: 69, wishes: ['J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 86', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['I', ] },
      { name: 'D', points: 27, wishes: ['I', ] },
      { name: 'B', points: 62, wishes: ['I', ] },
      { name: 'A', points: 70, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 87', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 9, wishes: ['I', ] },
      { name: 'C', points: 10, wishes: ['I', ] },
      { name: 'A', points: 12, wishes: ['J', ] },
      { name: 'G', points: 19, wishes: ['J', ] },
      { name: 'F', points: 43, wishes: ['I', ] },
      { name: 'H', points: 55, wishes: ['J', ] },
      { name: 'E', points: 71, wishes: ['I', 'J', ] },
      { name: 'D', points: 72, wishes: ['I', 'J', ] },
      { name: 'I', points: 86, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
  });

  it('should solve this set 88', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 17, wishes: ['I', 'K', 'L', 'M', 'J', ] },
      { name: 'G', points: 23, wishes: ['M', ] },
      { name: 'A', points: 26, wishes: ['L', ] },
      { name: 'F', points: 32, wishes: ['M', 'I', 'K', 'J', 'L', ] },
      { name: 'H', points: 36, wishes: ['K', 'L', ] },
      { name: 'B', points: 88, wishes: ['L', 'K', 'M', ] },
      { name: 'C', points: 97, wishes: ['J', 'L', ] },
      { name: 'E', points: 98, wishes: ['L', 'I', 'M', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
  });

  it('should solve this set 89', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 28, wishes: ['P', 'M', 'L', 'N', 'J', 'I', 'K', 'O', ] },
      { name: 'B', points: 38, wishes: ['L', 'O', ] },
      { name: 'D', points: 58, wishes: ['N', 'M', 'J', 'L', 'P', ] },
      { name: 'C', points: 71, wishes: ['K', 'P', 'M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 90', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 69, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 91', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 41, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 92', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 53, wishes: ['J', 'M', 'N', 'K', 'L', 'O', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 93', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['N', ] },
      { name: 'E', points: 25, wishes: ['I', 'M', 'L', 'P', ] },
      { name: 'A', points: 28, wishes: ['K', 'P', ] },
      { name: 'D', points: 51, wishes: ['M', ] },
      { name: 'C', points: 78, wishes: ['K', 'O', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
  });

  it('should solve this set 94', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['M', 'J', 'L', 'I', 'K', ] },
      { name: 'C', points: 2, wishes: ['L', 'N', 'K', 'J', 'I', 'M', ] },
      { name: 'D', points: 12, wishes: ['K', 'I', 'J', 'N', 'L', ] },
      { name: 'E', points: 76, wishes: ['N', 'M', ] },
      { name: 'B', points: 85, wishes: ['I', 'K', 'J', 'M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 95', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 7, wishes: ['J', ] },
      { name: 'F', points: 41, wishes: ['J', ] },
      { name: 'C', points: 54, wishes: ['I', ] },
      { name: 'E', points: 58, wishes: ['I', 'J', ] },
      { name: 'D', points: 65, wishes: ['I', ] },
      { name: 'A', points: 79, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 96', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['K', 'L', 'I', ] },
      { name: 'B', points: 12, wishes: ['L', 'J', 'K', 'I', ] },
      { name: 'E', points: 27, wishes: ['J', 'I', 'L', 'K', ] },
      { name: 'C', points: 54, wishes: ['J', 'L', 'K', ] },
      { name: 'D', points: 60, wishes: ['K', 'I', ] },
      { name: 'F', points: 77, wishes: ['J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 97', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 55, wishes: ['I', ] },
      { name: 'A', points: 78, wishes: ['N', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 98', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 27, wishes: ['N', 'I', 'K', 'M', 'L', ] },
      { name: 'A', points: 29, wishes: ['J', 'N', 'M', 'I', 'L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 99', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['I', ] },
      { name: 'C', points: 24, wishes: ['I', ] },
      { name: 'A', points: 34, wishes: ['I', 'K', ] },
      { name: 'D', points: 50, wishes: ['L', 'J', ] },
      { name: 'E', points: 65, wishes: ['I', 'J', 'L', 'K', ] },
      { name: 'G', points: 75, wishes: ['K', 'I', ] },
      { name: 'F', points: 91, wishes: ['K', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 100', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 4, wishes: ['L', ] },
      { name: 'G', points: 15, wishes: ['O', 'N', 'I', 'M', 'K', ] },
      { name: 'F', points: 19, wishes: ['K', ] },
      { name: 'B', points: 27, wishes: ['K', 'M', 'L', ] },
      { name: 'D', points: 32, wishes: ['O', 'N', 'M', 'K', 'J', 'L', 'I', ] },
      { name: 'A', points: 64, wishes: ['M', 'J', ] },
      { name: 'H', points: 70, wishes: ['I', ] },
      { name: 'E', points: 81, wishes: ['O', 'J', 'P', 'N', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
  });

  it('should solve this set 101', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 3, wishes: ['O', 'N', 'M', 'P', 'K', 'I', 'J', 'L', ] },
      { name: 'G', points: 9, wishes: ['I', 'Q', 'P', 'O', 'M', 'L', 'K', 'N', ] },
      { name: 'F', points: 12, wishes: ['M', 'I', 'P', 'N', 'J', ] },
      { name: 'H', points: 25, wishes: ['O', 'K', 'J', 'I', ] },
      { name: 'A', points: 27, wishes: ['O', 'I', ] },
      { name: 'D', points: 29, wishes: ['Q', 'N', ] },
      { name: 'E', points: 30, wishes: ['P', 'J', ] },
      { name: 'C', points: 86, wishes: ['O', 'Q', 'N', 'M', 'P', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
  });

  it('should solve this set 102', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['M', 'J', ] },
      { name: 'A', points: 55, wishes: ['I', 'L', 'K', 'N', 'J', 'M', ] },
      { name: 'D', points: 68, wishes: ['L', 'M', ] },
      { name: 'B', points: 81, wishes: ['I', ] },
      { name: 'E', points: 96, wishes: ['M', 'L', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 103', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 67, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 104', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 41, wishes: ['O', 'I', 'L', 'J', 'N', 'K', 'M', ] },
      { name: 'A', points: 87, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 105', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 19, wishes: ['I', 'K', 'L', 'M', ] },
      { name: 'A', points: 46, wishes: ['K', 'I', 'L', 'M', 'J', ] },
      { name: 'B', points: 94, wishes: ['K', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 106', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 30, wishes: ['I', ] },
      { name: 'B', points: 98, wishes: ['I', 'J', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 107', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 19, wishes: ['M', 'J', 'I', 'N', 'L', ] },
      { name: 'D', points: 25, wishes: ['M', 'I', 'O', 'P', 'L', ] },
      { name: 'A', points: 28, wishes: ['N', 'J', 'M', 'P', 'L', 'O', 'I', 'K', ] },
      { name: 'B', points: 45, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 108', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 4, wishes: ['J', 'I', 'L', ] },
      { name: 'A', points: 8, wishes: ['J', ] },
      { name: 'B', points: 46, wishes: ['J', 'K', 'L', 'I', ] },
      { name: 'E', points: 49, wishes: ['L', ] },
      { name: 'H', points: 68, wishes: ['L', 'K', ] },
      { name: 'F', points: 80, wishes: ['K', 'J', 'I', ] },
      { name: 'D', points: 93, wishes: ['I', 'L', ] },
      { name: 'C', points: 99, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
  });

  it('should solve this set 109', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 31, wishes: ['J', 'I', ] },
      { name: 'D', points: 49, wishes: ['I', ] },
      { name: 'A', points: 51, wishes: ['J', 'I', ] },
      { name: 'C', points: 90, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 110', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 41, wishes: ['I', 'K', ] },
      { name: 'B', points: 54, wishes: ['K', 'J', 'M', 'I', 'L', ] },
      { name: 'C', points: 71, wishes: ['K', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 111', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 10, wishes: ['J', ] },
      { name: 'E', points: 35, wishes: ['J', 'I', ] },
      { name: 'A', points: 42, wishes: ['J', ] },
      { name: 'F', points: 50, wishes: ['J', ] },
      { name: 'C', points: 62, wishes: ['I', 'J', ] },
      { name: 'B', points: 67, wishes: ['I', ] },
      { name: 'G', points: 80, wishes: ['I', ] },
      { name: 'H', points: 87, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 112', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 3, wishes: ['I', 'Q', 'J', ] },
      { name: 'A', points: 29, wishes: ['O', 'M', 'P', 'K', ] },
      { name: 'C', points: 35, wishes: ['K', 'I', 'O', 'M', 'J', 'Q', 'L', ] },
      { name: 'G', points: 61, wishes: ['N', 'P', 'O', 'K', 'L', ] },
      { name: 'D', points: 79, wishes: ['M', ] },
      { name: 'E', points: 85, wishes: ['O', 'Q', 'P', 'I', 'J', ] },
      { name: 'H', points: 86, wishes: ['K', 'N', ] },
      { name: 'B', points: 98, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 113', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['K', 'J', 'M', 'L', ] },
      { name: 'A', points: 69, wishes: ['K', 'L', 'N', 'J', 'M', 'I', ] },
      { name: 'C', points: 74, wishes: ['I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 114', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['I', ] },
      { name: 'I', points: 7, wishes: ['J', 'I', ] },
      { name: 'B', points: 23, wishes: ['J', ] },
      { name: 'D', points: 25, wishes: ['I', ] },
      { name: 'F', points: 48, wishes: ['I', 'J', ] },
      { name: 'C', points: 53, wishes: ['I', ] },
      { name: 'H', points: 85, wishes: ['I', 'J', ] },
      { name: 'E', points: 87, wishes: ['J', 'I', ] },
      { name: 'G', points: 92, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
  });

  it('should solve this set 115', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['N', 'K', 'I', ] },
      { name: 'G', points: 6, wishes: ['N', 'J', 'L', ] },
      { name: 'B', points: 7, wishes: ['I', 'M', ] },
      { name: 'A', points: 23, wishes: ['N', 'I', 'J', 'K', 'L', ] },
      { name: 'D', points: 27, wishes: ['K', 'L', ] },
      { name: 'F', points: 72, wishes: ['L', 'K', 'M', 'I', 'N', 'J', ] },
      { name: 'E', points: 89, wishes: ['I', 'N', 'J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
  });

  it('should solve this set 116', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 17, wishes: ['M', 'J', 'L', 'I', 'K', ] },
      { name: 'I', points: 18, wishes: ['I', 'J', 'M', 'K', ] },
      { name: 'E', points: 23, wishes: ['J', 'K', ] },
      { name: 'F', points: 45, wishes: ['J', 'L', ] },
      { name: 'A', points: 49, wishes: ['K', 'L', ] },
      { name: 'C', points: 60, wishes: ['M', 'I', ] },
      { name: 'G', points: 66, wishes: ['I', 'K', 'J', 'L', 'M', ] },
      { name: 'B', points: 73, wishes: ['J', 'M', 'L', 'K', 'I', ] },
      { name: 'D', points: 96, wishes: ['L', 'I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 117', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 2, wishes: ['N', 'M', 'L', ] },
      { name: 'B', points: 40, wishes: ['P', 'J', 'M', 'K', 'I', ] },
      { name: 'C', points: 44, wishes: ['I', 'J', 'O', 'M', 'L', ] },
      { name: 'D', points: 60, wishes: ['N', 'L', 'J', 'O', ] },
      { name: 'F', points: 63, wishes: ['O', 'M', ] },
      { name: 'A', points: 71, wishes: ['K', ] },
      { name: 'G', points: 93, wishes: ['K', 'I', 'J', 'M', 'P', 'L', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
  });

  it('should solve this set 118', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 14, wishes: ['N', ] },
      { name: 'C', points: 15, wishes: ['J', 'I', 'M', ] },
      { name: 'D', points: 25, wishes: ['N', ] },
      { name: 'B', points: 27, wishes: ['J', 'I', ] },
      { name: 'A', points: 31, wishes: ['L', 'J', ] },
      { name: 'G', points: 59, wishes: ['K', 'M', 'L', ] },
      { name: 'F', points: 68, wishes: ['L', ] },
      { name: 'E', points: 73, wishes: ['M', 'J', 'K', 'N', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
  });

  it('should solve this set 119', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['I', 'J', 'K', ] },
      { name: 'A', points: 12, wishes: ['K', ] },
      { name: 'D', points: 39, wishes: ['J', 'K', ] },
      { name: 'C', points: 64, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 120', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 1, wishes: ['I', ] },
      { name: 'C', points: 30, wishes: ['K', 'I', 'J', ] },
      { name: 'H', points: 47, wishes: ['K', 'J', ] },
      { name: 'A', points: 61, wishes: ['J', 'I', ] },
      { name: 'G', points: 70, wishes: ['K', 'J', 'I', ] },
      { name: 'I', points: 77, wishes: ['K', 'I', ] },
      { name: 'E', points: 88, wishes: ['J', 'I', 'K', ] },
      { name: 'F', points: 89, wishes: ['K', 'I', 'J', ] },
      { name: 'B', points: 97, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
  });

  it('should solve this set 121', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 20, wishes: ['M', 'P', 'N', 'K', 'J', 'O', ] },
      { name: 'D', points: 42, wishes: ['O', 'M', 'P', 'I', 'L', 'K', 'J', ] },
      { name: 'B', points: 44, wishes: ['I', 'J', 'M', 'N', 'L', 'P', 'K', 'O', ] },
      { name: 'C', points: 89, wishes: ['P', 'N', 'O', 'L', 'I', 'J', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
  });

  it('should solve this set 122', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 28, wishes: ['I', 'L', 'J', 'M', ] },
      { name: 'B', points: 76, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 123', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 15, wishes: ['I', ] },
      { name: 'B', points: 17, wishes: ['I', ] },
      { name: 'A', points: 49, wishes: ['I', ] },
      { name: 'D', points: 51, wishes: ['I', ] },
      { name: 'G', points: 59, wishes: ['I', ] },
      { name: 'C', points: 78, wishes: ['I', ] },
      { name: 'E', points: 81, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 124', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 3, wishes: ['I', ] },
      { name: 'E', points: 7, wishes: ['I', ] },
      { name: 'A', points: 18, wishes: ['I', ] },
      { name: 'D', points: 31, wishes: ['I', ] },
      { name: 'C', points: 75, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 125', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 0, wishes: ['K', 'I', 'J', ] },
      { name: 'F', points: 5, wishes: ['I', 'J', 'K', ] },
      { name: 'E', points: 35, wishes: ['J', ] },
      { name: 'A', points: 53, wishes: ['J', 'K', 'I', ] },
      { name: 'C', points: 72, wishes: ['I', ] },
      { name: 'B', points: 87, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 126', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 2, wishes: ['I', 'L', 'P', 'K', 'N', 'O', 'J', 'M', ] },
      { name: 'E', points: 26, wishes: ['M', ] },
      { name: 'D', points: 60, wishes: ['P', ] },
      { name: 'A', points: 74, wishes: ['L', 'K', 'O', 'J', 'I', 'P', 'N', 'M', ] },
      { name: 'C', points: 76, wishes: ['L', 'K', 'I', 'M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 127', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 23, wishes: ['I', ] },
      { name: 'C', points: 62, wishes: ['J', 'K', 'I', ] },
      { name: 'A', points: 68, wishes: ['J', 'K', 'I', ] },
      { name: 'D', points: 98, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 128', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 10, wishes: ['I', ] },
      { name: 'E', points: 25, wishes: ['I', ] },
      { name: 'B', points: 29, wishes: ['J', ] },
      { name: 'D', points: 94, wishes: ['I', ] },
      { name: 'A', points: 96, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 129', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 42, wishes: ['N', 'I', 'M', 'O', 'L', 'J', 'K', ] },
      { name: 'B', points: 53, wishes: ['O', 'I', 'L', 'J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
  });

  it('should solve this set 130', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 9, wishes: ['P', 'N', 'I', 'J', 'O', ] },
      { name: 'D', points: 37, wishes: ['O', 'N', 'L', 'K', 'J', 'P', 'Q', 'M', ] },
      { name: 'A', points: 43, wishes: ['Q', 'N', 'O', 'L', ] },
      { name: 'C', points: 50, wishes: ['M', 'K', 'P', 'O', 'J', 'N', ] },
      { name: 'F', points: 77, wishes: ['M', 'L', 'N', 'Q', 'K', 'J', 'P', 'I', 'O', ] },
      { name: 'E', points: 88, wishes: ['J', 'O', 'Q', 'N', 'M', 'I', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 131', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 12, wishes: ['I', ] },
      { name: 'A', points: 24, wishes: ['I', ] },
      { name: 'B', points: 37, wishes: ['I', ] },
      { name: 'E', points: 40, wishes: ['I', ] },
      { name: 'C', points: 41, wishes: ['I', ] },
      { name: 'G', points: 44, wishes: ['I', ] },
      { name: 'F', points: 93, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
  });

  it('should solve this set 132', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 23, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 133', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 10, wishes: ['M', 'N', 'I', 'O', 'K', 'J', 'L', ] },
      { name: 'E', points: 13, wishes: ['L', 'J', 'O', 'I', 'N', 'K', ] },
      { name: 'A', points: 21, wishes: ['O', 'M', 'J', 'I', 'L', ] },
      { name: 'C', points: 25, wishes: ['N', 'L', 'K', 'M', 'O', 'I', ] },
      { name: 'F', points: 40, wishes: ['N', 'K', 'J', 'M', 'I', ] },
      { name: 'D', points: 73, wishes: ['K', 'O', 'M', 'L', 'J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 134', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 23, wishes: ['J', 'K', 'M', 'L', 'N', 'I', ] },
      { name: 'C', points: 40, wishes: ['K', 'N', 'J', ] },
      { name: 'E', points: 64, wishes: ['M', 'N', ] },
      { name: 'D', points: 91, wishes: ['M', ] },
      { name: 'B', points: 98, wishes: ['I', 'N', 'M', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 135', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 16, wishes: ['I', 'J', ] },
      { name: 'A', points: 36, wishes: ['J', 'I', ] },
      { name: 'C', points: 46, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 136', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 2, wishes: ['J', 'I', ] },
      { name: 'C', points: 17, wishes: ['I', 'J', ] },
      { name: 'B', points: 26, wishes: ['I', 'J', ] },
      { name: 'D', points: 48, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 137', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 11, wishes: ['J', ] },
      { name: 'B', points: 22, wishes: ['I', 'J', ] },
      { name: 'G', points: 24, wishes: ['I', 'J', ] },
      { name: 'C', points: 67, wishes: ['J', 'I', ] },
      { name: 'D', points: 68, wishes: ['J', ] },
      { name: 'F', points: 80, wishes: ['J', 'I', ] },
      { name: 'A', points: 92, wishes: ['J', ] },
      { name: 'H', points: 94, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
  });

  it('should solve this set 138', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 26, wishes: ['K', ] },
      { name: 'B', points: 34, wishes: ['N', 'L', 'I', 'M', ] },
      { name: 'F', points: 38, wishes: ['O', 'J', 'K', ] },
      { name: 'A', points: 42, wishes: ['O', 'M', 'K', ] },
      { name: 'E', points: 82, wishes: ['M', 'L', 'N', 'K', 'O', ] },
      { name: 'D', points: 84, wishes: ['O', 'K', 'M', 'N', 'J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 139', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 7, wishes: ['J', ] },
      { name: 'E', points: 27, wishes: ['J', 'I', ] },
      { name: 'C', points: 31, wishes: ['I', 'J', ] },
      { name: 'H', points: 51, wishes: ['J', 'I', ] },
      { name: 'G', points: 55, wishes: ['I', ] },
      { name: 'F', points: 68, wishes: ['J', 'I', ] },
      { name: 'D', points: 71, wishes: ['J', 'I', ] },
      { name: 'B', points: 75, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 140', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 0, wishes: ['J', 'K', ] },
      { name: 'A', points: 25, wishes: ['J', ] },
      { name: 'D', points: 31, wishes: ['K', 'L', ] },
      { name: 'F', points: 35, wishes: ['I', 'L', 'J', ] },
      { name: 'B', points: 39, wishes: ['I', 'L', 'K', 'J', ] },
      { name: 'G', points: 40, wishes: ['K', ] },
      { name: 'C', points: 42, wishes: ['K', 'L', 'J', ] },
      { name: 'E', points: 46, wishes: ['K', 'I', 'L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
  });

  it('should solve this set 141', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 12, wishes: ['Q', 'K', 'P', ] },
      { name: 'A', points: 33, wishes: ['O', 'P', 'L', 'I', ] },
      { name: 'F', points: 36, wishes: ['L', 'K', 'J', 'O', ] },
      { name: 'E', points: 49, wishes: ['J', 'Q', 'I', 'N', 'M', 'O', ] },
      { name: 'B', points: 50, wishes: ['J', 'K', ] },
      { name: 'C', points: 60, wishes: ['I', 'M', 'L', 'J', 'O', 'Q', ] },
      { name: 'H', points: 88, wishes: ['J', 'Q', 'M', 'L', 'O', 'K', 'N', 'P', 'I', ] },
      { name: 'D', points: 97, wishes: ['L', 'O', 'P', 'K', 'J', 'I', 'N', 'M', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
  });

  it('should solve this set 142', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 9, wishes: ['J', ] },
      { name: 'G', points: 36, wishes: ['J', 'I', 'L', 'K', ] },
      { name: 'C', points: 42, wishes: ['I', 'J', 'K', ] },
      { name: 'B', points: 45, wishes: ['K', ] },
      { name: 'D', points: 73, wishes: ['L', 'J', ] },
      { name: 'E', points: 75, wishes: ['J', 'I', ] },
      { name: 'H', points: 87, wishes: ['K', 'J', 'L', 'I', ] },
      { name: 'A', points: 94, wishes: ['J', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 143', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 31, wishes: ['M', ] },
      { name: 'D', points: 54, wishes: ['N', 'O', 'I', ] },
      { name: 'A', points: 69, wishes: ['P', 'I', 'N', 'M', 'J', 'Q', 'K', 'L', ] },
      { name: 'E', points: 72, wishes: ['Q', 'L', 'P', 'J', 'I', 'O', 'M', 'K', ] },
      { name: 'B', points: 81, wishes: ['N', 'I', 'M', 'J', 'O', 'L', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 144', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 11, wishes: ['O', 'M', 'N', 'J', 'I', 'K', 'L', ] },
      { name: 'D', points: 23, wishes: ['L', 'J', 'N', 'O', 'I', 'K', ] },
      { name: 'C', points: 44, wishes: ['K', 'L', 'J', 'N', 'O', ] },
      { name: 'A', points: 49, wishes: ['K', 'N', 'O', 'I', 'L', ] },
      { name: 'H', points: 58, wishes: ['N', 'L', ] },
      { name: 'G', points: 65, wishes: ['O', 'N', 'L', 'I', 'K', 'M', ] },
      { name: 'F', points: 76, wishes: ['O', 'N', 'I', 'J', ] },
      { name: 'E', points: 79, wishes: ['L', 'N', 'J', ] },
      { name: 'B', points: 84, wishes: ['N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
  });

  it('should solve this set 145', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 10, wishes: ['M', 'K', 'J', 'L', ] },
      { name: 'D', points: 14, wishes: ['I', 'K', 'L', 'M', 'J', ] },
      { name: 'B', points: 17, wishes: ['M', 'I', 'J', 'K', 'L', ] },
      { name: 'E', points: 28, wishes: ['K', 'I', 'M', 'L', ] },
      { name: 'F', points: 44, wishes: ['K', ] },
      { name: 'H', points: 55, wishes: ['M', 'L', 'K', 'I', 'J', ] },
      { name: 'G', points: 68, wishes: ['L', 'M', 'I', 'J', ] },
      { name: 'C', points: 97, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
  });

  it('should solve this set 146', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 69, wishes: ['L', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 147', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 94, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 148', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 12, wishes: ['L', 'J', ] },
      { name: 'D', points: 24, wishes: ['M', 'K', 'J', 'L', ] },
      { name: 'E', points: 26, wishes: ['K', 'J', 'L', 'I', ] },
      { name: 'C', points: 38, wishes: ['M', 'J', 'L', ] },
      { name: 'H', points: 39, wishes: ['J', 'I', 'K', 'M', 'L', ] },
      { name: 'G', points: 49, wishes: ['M', 'K', 'L', 'J', 'I', ] },
      { name: 'B', points: 64, wishes: ['L', 'M', ] },
      { name: 'A', points: 69, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
  });

  it('should solve this set 149', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 2, wishes: ['I', 'L', 'N', 'J', 'M', ] },
      { name: 'F', points: 11, wishes: ['J', 'M', 'N', 'L', 'K', 'I', ] },
      { name: 'D', points: 24, wishes: ['I', 'K', 'N', ] },
      { name: 'E', points: 35, wishes: ['N', ] },
      { name: 'C', points: 82, wishes: ['M', ] },
      { name: 'A', points: 98, wishes: ['M', 'J', 'N', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 150', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 62, wishes: ['K', 'N', 'O', 'L', 'M', 'J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 151', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 11, wishes: ['K', 'M', 'L', 'J', 'O', 'I', 'N', ] },
      { name: 'E', points: 24, wishes: ['N', ] },
      { name: 'D', points: 41, wishes: ['L', ] },
      { name: 'F', points: 44, wishes: ['O', 'M', 'K', 'N', ] },
      { name: 'A', points: 78, wishes: ['N', 'O', 'I', 'J', 'K', 'L', 'M', ] },
      { name: 'G', points: 83, wishes: ['L', ] },
      { name: 'C', points: 99, wishes: ['N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 152', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 93, wishes: ['M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 153', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 52, wishes: ['L', 'J', 'M', 'K', ] },
      { name: 'C', points: 62, wishes: ['J', ] },
      { name: 'A', points: 82, wishes: ['M', 'I', 'J', ] },
      { name: 'B', points: 94, wishes: ['J', 'L', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 154', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 49, wishes: ['I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 155', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 4, wishes: ['O', 'J', ] },
      { name: 'A', points: 12, wishes: ['L', 'M', 'J', 'K', 'I', ] },
      { name: 'E', points: 15, wishes: ['K', ] },
      { name: 'C', points: 29, wishes: ['K', 'J', 'N', 'O', 'L', 'I', ] },
      { name: 'F', points: 57, wishes: ['N', ] },
      { name: 'D', points: 67, wishes: ['L', 'I', 'K', ] },
      { name: 'H', points: 68, wishes: ['O', 'N', 'M', 'L', 'K', 'J', ] },
      { name: 'I', points: 85, wishes: ['M', 'J', 'K', 'L', 'N', 'O', 'I', ] },
      { name: 'B', points: 96, wishes: ['L', 'N', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
  });

  it('should solve this set 156', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 10, wishes: ['J', ] },
      { name: 'A', points: 42, wishes: ['J', ] },
      { name: 'C', points: 87, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 157', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 13, wishes: ['K', ] },
      { name: 'A', points: 24, wishes: ['P', 'M', 'Q', ] },
      { name: 'C', points: 74, wishes: ['J', 'M', 'L', ] },
      { name: 'B', points: 94, wishes: ['I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 158', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 51, wishes: ['I', 'L', 'N', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 159', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 14, wishes: ['J', 'K', ] },
      { name: 'B', points: 30, wishes: ['K', 'I', 'J', ] },
      { name: 'G', points: 32, wishes: ['J', ] },
      { name: 'E', points: 56, wishes: ['K', 'J', 'I', ] },
      { name: 'H', points: 65, wishes: ['I', ] },
      { name: 'I', points: 68, wishes: ['J', ] },
      { name: 'C', points: 74, wishes: ['J', 'K', ] },
      { name: 'F', points: 80, wishes: ['J', ] },
      { name: 'D', points: 84, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
  });

  it('should solve this set 160', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 95, wishes: ['M', 'Q', 'L', 'P', 'I', 'N', 'J', 'K', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 161', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 14, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 162', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 88, wishes: ['M', 'K', 'N', 'P', 'I', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 163', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 3, wishes: ['N', 'L', 'K', 'I', ] },
      { name: 'C', points: 61, wishes: ['K', 'M', 'I', 'J', ] },
      { name: 'D', points: 66, wishes: ['I', 'M', 'J', 'L', 'O', ] },
      { name: 'B', points: 78, wishes: ['L', ] },
      { name: 'E', points: 95, wishes: ['J', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 164', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['K', 'L', 'J', 'M', 'I', ] },
      { name: 'C', points: 6, wishes: ['I', ] },
      { name: 'B', points: 16, wishes: ['L', 'J', 'I', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 165', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 28, wishes: ['J', 'I', ] },
      { name: 'A', points: 29, wishes: ['J', 'K', 'I', ] },
      { name: 'F', points: 33, wishes: ['J', ] },
      { name: 'B', points: 38, wishes: ['J', ] },
      { name: 'H', points: 55, wishes: ['J', ] },
      { name: 'E', points: 66, wishes: ['K', 'I', 'J', ] },
      { name: 'C', points: 77, wishes: ['J', 'I', ] },
      { name: 'G', points: 92, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
  });

  it('should solve this set 166', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 45, wishes: ['L', 'J', 'K', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 167', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 25, wishes: ['K', 'L', 'P', 'I', 'J', ] },
      { name: 'B', points: 40, wishes: ['I', 'M', 'P', 'K', 'J', ] },
      { name: 'D', points: 58, wishes: ['K', 'L', 'M', 'P', 'J', 'I', 'O', ] },
      { name: 'F', points: 67, wishes: ['K', ] },
      { name: 'A', points: 68, wishes: ['J', 'N', 'K', 'M', 'I', 'O', ] },
      { name: 'E', points: 85, wishes: ['J', 'P', 'O', 'K', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
  });

  it('should solve this set 168', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 0, wishes: ['M', ] },
      { name: 'A', points: 79, wishes: ['J', 'M', 'I', 'L', 'K', ] },
      { name: 'B', points: 85, wishes: ['M', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 169', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 26, wishes: ['J', ] },
      { name: 'C', points: 57, wishes: ['K', 'J', ] },
      { name: 'A', points: 67, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 170', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 27, wishes: ['M', 'K', ] },
      { name: 'D', points: 49, wishes: ['M', 'J', ] },
      { name: 'A', points: 91, wishes: ['J', 'M', ] },
      { name: 'B', points: 94, wishes: ['M', 'I', 'K', 'L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 171', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 48, wishes: ['I', ] },
      { name: 'A', points: 63, wishes: ['I', ] },
      { name: 'C', points: 64, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 172', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 8, wishes: ['I', ] },
      { name: 'D', points: 27, wishes: ['I', ] },
      { name: 'B', points: 57, wishes: ['I', ] },
      { name: 'E', points: 87, wishes: ['I', ] },
      { name: 'A', points: 97, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 173', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 53, wishes: ['L', ] },
      { name: 'A', points: 56, wishes: ['L', 'K', ] },
      { name: 'E', points: 62, wishes: ['K', 'L', ] },
      { name: 'C', points: 76, wishes: ['I', ] },
      { name: 'B', points: 77, wishes: ['L', 'J', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 174', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 10, wishes: ['M', ] },
      { name: 'E', points: 19, wishes: ['I', 'M', 'K', 'L', ] },
      { name: 'A', points: 20, wishes: ['I', 'J', 'L', 'N', ] },
      { name: 'F', points: 22, wishes: ['M', 'N', 'L', ] },
      { name: 'I', points: 27, wishes: ['I', 'J', 'L', 'N', 'M', ] },
      { name: 'D', points: 31, wishes: ['N', 'M', ] },
      { name: 'B', points: 61, wishes: ['J', ] },
      { name: 'C', points: 69, wishes: ['K', 'N', 'I', 'M', 'J', 'L', ] },
      { name: 'H', points: 85, wishes: ['K', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
  });

  it('should solve this set 175', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['I', 'M', 'P', 'K', 'L', ] },
      { name: 'H', points: 15, wishes: ['J', 'I', 'K', 'M', 'L', 'P', 'N', 'O', ] },
      { name: 'F', points: 19, wishes: ['J', 'M', 'K', 'P', 'N', 'O', 'I', ] },
      { name: 'G', points: 22, wishes: ['M', 'J', 'L', 'K', ] },
      { name: 'C', points: 34, wishes: ['N', 'P', 'O', 'I', 'K', 'J', 'M', 'L', ] },
      { name: 'A', points: 50, wishes: ['N', ] },
      { name: 'D', points: 58, wishes: ['P', 'L', 'O', 'I', 'N', 'J', 'M', ] },
      { name: 'E', points: 62, wishes: ['P', 'I', 'O', 'J', 'M', 'L', 'N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 176', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 15, wishes: ['J', 'I', 'K', 'M', 'L', 'P', 'O', ] },
      { name: 'F', points: 26, wishes: ['M', 'P', 'Q', 'L', 'K', 'O', ] },
      { name: 'I', points: 27, wishes: ['P', 'Q', 'O', 'J', 'K', 'M', ] },
      { name: 'G', points: 41, wishes: ['J', 'Q', 'N', 'L', 'M', 'O', ] },
      { name: 'C', points: 54, wishes: ['I', 'J', 'P', 'M', ] },
      { name: 'D', points: 60, wishes: ['Q', 'O', 'L', 'M', 'N', 'K', 'I', ] },
      { name: 'A', points: 79, wishes: ['O', 'N', 'I', 'J', 'M', 'Q', 'P', 'L', ] },
      { name: 'E', points: 87, wishes: ['N', 'P', 'J', 'O', 'L', 'Q', 'M', 'I', ] },
      { name: 'H', points: 95, wishes: ['P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('P');
  });

  it('should solve this set 177', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 29, wishes: ['I', 'K', 'M', 'L', 'N', 'J', ] },
      { name: 'A', points: 87, wishes: ['I', 'N', 'M', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 178', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 11, wishes: ['P', ] },
      { name: 'D', points: 23, wishes: ['O', 'K', 'N', 'I', 'L', 'M', 'P', 'J', ] },
      { name: 'B', points: 40, wishes: ['O', 'N', 'L', 'M', ] },
      { name: 'C', points: 53, wishes: ['K', 'J', 'L', 'O', 'N', 'I', 'P', ] },
      { name: 'E', points: 79, wishes: ['P', 'L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
  });

  it('should solve this set 179', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 22, wishes: ['I', 'M', 'L', ] },
      { name: 'A', points: 25, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 180', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 12, wishes: ['I', 'K', 'J', ] },
      { name: 'A', points: 13, wishes: ['J', 'I', ] },
      { name: 'C', points: 40, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 181', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 12, wishes: ['I', 'J', 'L', ] },
      { name: 'C', points: 18, wishes: ['L', 'J', 'K', 'I', ] },
      { name: 'A', points: 51, wishes: ['I', ] },
      { name: 'B', points: 62, wishes: ['K', 'L', 'J', ] },
      { name: 'E', points: 99, wishes: ['J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 182', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 6, wishes: ['J', 'K', 'M', 'N', 'P', ] },
      { name: 'D', points: 8, wishes: ['M', 'J', 'K', 'P', 'L', 'O', 'I', 'Q', ] },
      { name: 'F', points: 12, wishes: ['N', 'L', 'Q', 'P', 'J', 'I', 'M', ] },
      { name: 'I', points: 17, wishes: ['L', ] },
      { name: 'E', points: 51, wishes: ['O', 'N', ] },
      { name: 'C', points: 58, wishes: ['M', 'L', ] },
      { name: 'A', points: 81, wishes: ['I', 'P', 'O', 'M', 'N', ] },
      { name: 'B', points: 90, wishes: ['L', 'I', 'N', 'J', 'O', 'Q', ] },
      { name: 'G', points: 95, wishes: ['J', 'N', 'P', 'M', 'I', 'O', 'K', 'L', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('P');
  });

  it('should solve this set 183', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 1, wishes: ['K', 'I', ] },
      { name: 'D', points: 39, wishes: ['J', 'I', 'K', ] },
      { name: 'B', points: 62, wishes: ['K', 'I', ] },
      { name: 'F', points: 66, wishes: ['J', ] },
      { name: 'A', points: 68, wishes: ['I', 'J', 'K', ] },
      { name: 'G', points: 77, wishes: ['J', ] },
      { name: 'C', points: 80, wishes: ['I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 184', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 11, wishes: ['J', 'K', ] },
      { name: 'H', points: 31, wishes: ['K', 'J', 'I', ] },
      { name: 'D', points: 58, wishes: ['J', 'K', 'I', ] },
      { name: 'F', points: 65, wishes: ['L', 'K', ] },
      { name: 'A', points: 72, wishes: ['L', 'K', 'I', ] },
      { name: 'B', points: 74, wishes: ['J', 'I', 'L', ] },
      { name: 'I', points: 78, wishes: ['L', 'J', 'I', ] },
      { name: 'C', points: 96, wishes: ['K', 'J', 'L', 'I', ] },
      { name: 'E', points: 98, wishes: ['L', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
  });

  it('should solve this set 185', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 15, wishes: ['L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 186', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 7, wishes: ['K', ] },
      { name: 'A', points: 30, wishes: ['I', ] },
      { name: 'F', points: 31, wishes: ['I', 'K', 'L', 'J', ] },
      { name: 'C', points: 33, wishes: ['M', 'J', 'I', 'L', 'K', ] },
      { name: 'I', points: 39, wishes: ['K', 'I', 'M', 'L', ] },
      { name: 'D', points: 50, wishes: ['I', ] },
      { name: 'B', points: 63, wishes: ['I', ] },
      { name: 'E', points: 80, wishes: ['I', 'J', 'K', 'L', ] },
      { name: 'G', points: 84, wishes: ['J', 'K', 'L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('M');
  });

  it('should solve this set 187', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 5, wishes: ['I', ] },
      { name: 'A', points: 46, wishes: ['I', ] },
      { name: 'D', points: 96, wishes: ['I', ] },
      { name: 'B', points: 97, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 188', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 65, wishes: ['J', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 189', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 59, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 190', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['J', ] },
      { name: 'D', points: 24, wishes: ['J', 'O', 'K', 'L', 'I', 'N', 'M', ] },
      { name: 'E', points: 34, wishes: ['L', 'J', 'I', 'M', ] },
      { name: 'B', points: 42, wishes: ['L', 'M', 'N', 'I', ] },
      { name: 'C', points: 47, wishes: ['O', 'L', 'J', 'N', 'M', 'I', ] },
      { name: 'G', points: 49, wishes: ['L', ] },
      { name: 'H', points: 55, wishes: ['K', 'J', 'L', 'N', 'M', ] },
      { name: 'F', points: 83, wishes: ['J', ] },
      { name: 'I', points: 87, wishes: ['M', 'N', 'I', 'J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
  });

  it('should solve this set 191', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 12, wishes: ['I', ] },
      { name: 'D', points: 29, wishes: ['I', ] },
      { name: 'H', points: 35, wishes: ['I', ] },
      { name: 'F', points: 42, wishes: ['I', ] },
      { name: 'E', points: 43, wishes: ['I', ] },
      { name: 'B', points: 51, wishes: ['I', ] },
      { name: 'I', points: 59, wishes: ['I', ] },
      { name: 'G', points: 74, wishes: ['I', ] },
      { name: 'C', points: 80, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 192', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 29, wishes: ['L', 'P', 'M', 'I', 'N', 'J', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 193', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 25, wishes: ['J', 'I', ] },
      { name: 'B', points: 34, wishes: ['J', ] },
      { name: 'A', points: 49, wishes: ['J', ] },
      { name: 'E', points: 51, wishes: ['J', ] },
      { name: 'G', points: 59, wishes: ['J', ] },
      { name: 'F', points: 79, wishes: ['J', 'I', ] },
      { name: 'D', points: 91, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 194', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 6, wishes: ['N', 'O', 'P', 'J', 'L', 'K', 'I', 'M', 'Q', ] },
      { name: 'E', points: 18, wishes: ['M', 'O', 'Q', ] },
      { name: 'H', points: 32, wishes: ['Q', 'J', 'N', 'I', 'L', ] },
      { name: 'D', points: 36, wishes: ['Q', ] },
      { name: 'F', points: 43, wishes: ['O', 'M', 'N', 'I', 'L', 'P', 'J', 'Q', 'K', ] },
      { name: 'A', points: 47, wishes: ['Q', 'J', 'N', 'P', 'L', 'K', 'O', ] },
      { name: 'G', points: 48, wishes: ['Q', 'N', 'I', 'K', 'J', ] },
      { name: 'C', points: 83, wishes: ['L', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 195', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 5, wishes: ['P', 'M', 'L', 'O', 'J', ] },
      { name: 'B', points: 17, wishes: ['J', 'L', 'M', 'I', 'N', ] },
      { name: 'E', points: 29, wishes: ['N', ] },
      { name: 'G', points: 53, wishes: ['M', 'Q', 'I', 'O', 'K', 'L', 'N', 'J', ] },
      { name: 'A', points: 68, wishes: ['L', 'M', 'N', 'K', 'P', ] },
      { name: 'F', points: 70, wishes: ['J', 'L', 'O', ] },
      { name: 'C', points: 82, wishes: ['Q', 'N', 'O', 'K', 'M', ] },
      { name: 'H', points: 90, wishes: ['M', 'O', 'J', 'K', 'N', 'P', 'Q', 'I', 'L', ] },
      { name: 'D', points: 98, wishes: ['K', 'O', 'P', 'Q', 'J', 'M', 'N', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
  });

  it('should solve this set 196', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 7, wishes: ['J', ] },
      { name: 'F', points: 38, wishes: ['J', 'I', ] },
      { name: 'C', points: 49, wishes: ['I', ] },
      { name: 'G', points: 50, wishes: ['K', ] },
      { name: 'A', points: 72, wishes: ['J', 'K', ] },
      { name: 'B', points: 77, wishes: ['I', ] },
      { name: 'E', points: 98, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 197', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 11, wishes: ['M', 'J', 'L', 'K', ] },
      { name: 'C', points: 31, wishes: ['L', ] },
      { name: 'B', points: 34, wishes: ['L', 'K', 'J', 'M', ] },
      { name: 'G', points: 42, wishes: ['L', 'M', 'I', ] },
      { name: 'D', points: 54, wishes: ['L', ] },
      { name: 'E', points: 55, wishes: ['I', ] },
      { name: 'F', points: 78, wishes: ['L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 198', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 12, wishes: ['K', 'I', ] },
      { name: 'D', points: 17, wishes: ['I', ] },
      { name: 'I', points: 55, wishes: ['L', 'K', 'I', ] },
      { name: 'C', points: 74, wishes: ['K', 'I', 'L', ] },
      { name: 'H', points: 84, wishes: ['J', 'L', 'I', 'K', ] },
      { name: 'G', points: 86, wishes: ['I', 'L', 'J', ] },
      { name: 'E', points: 89, wishes: ['I', 'J', 'K', ] },
      { name: 'F', points: 95, wishes: ['L', ] },
      { name: 'A', points: 98, wishes: ['L', 'J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 199', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 19, wishes: ['I', 'Q', ] },
      { name: 'E', points: 22, wishes: ['L', 'Q', 'N', 'I', 'K', 'J', 'M', 'O', 'P', ] },
      { name: 'D', points: 41, wishes: ['K', ] },
      { name: 'C', points: 64, wishes: ['M', 'Q', 'O', 'L', 'P', 'K', 'J', ] },
      { name: 'A', points: 77, wishes: ['J', 'K', 'L', 'P', 'M', 'N', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 200', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 48, wishes: ['L', ] },
      { name: 'A', points: 50, wishes: ['M', 'J', ] },
      { name: 'B', points: 58, wishes: ['L', 'K', 'I', 'J', 'N', ] },
      { name: 'D', points: 65, wishes: ['I', 'L', 'M', 'N', ] },
      { name: 'E', points: 76, wishes: ['L', 'M', 'J', 'I', ] },
      { name: 'F', points: 94, wishes: ['M', 'J', 'L', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
  });

  it('should solve this set 201', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 73, wishes: ['I', 'J', ] },
      { name: 'A', points: 91, wishes: ['Q', 'M', 'P', 'I', 'J', 'N', 'L', 'K', 'O', ] },
      { name: 'B', points: 95, wishes: ['K', 'N', 'I', 'M', 'O', 'L', 'P', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 202', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 0, wishes: ['J', 'I', 'K', ] },
      { name: 'B', points: 17, wishes: ['I', 'J', ] },
      { name: 'C', points: 75, wishes: ['K', 'J', 'I', ] },
      { name: 'D', points: 81, wishes: ['J', 'I', 'K', ] },
      { name: 'A', points: 89, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 203', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 23, wishes: ['L', 'I', 'K', ] },
      { name: 'E', points: 36, wishes: ['J', 'K', 'I', ] },
      { name: 'A', points: 39, wishes: ['J', 'L', 'K', 'I', ] },
      { name: 'C', points: 48, wishes: ['L', ] },
      { name: 'D', points: 65, wishes: ['L', ] },
      { name: 'H', points: 68, wishes: ['I', 'L', 'K', ] },
      { name: 'I', points: 72, wishes: ['I', 'J', 'K', ] },
      { name: 'B', points: 75, wishes: ['J', ] },
      { name: 'G', points: 83, wishes: ['J', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 204', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 5, wishes: ['Q', 'N', 'I', ] },
      { name: 'C', points: 10, wishes: ['K', 'Q', 'L', 'P', 'I', 'J', 'O', 'N', 'M', ] },
      { name: 'G', points: 43, wishes: ['K', 'O', 'Q', ] },
      { name: 'D', points: 46, wishes: ['M', 'P', 'I', 'Q', 'J', 'L', 'K', 'O', ] },
      { name: 'E', points: 54, wishes: ['L', 'P', 'J', 'M', 'N', 'O', 'K', ] },
      { name: 'B', points: 66, wishes: ['L', 'N', 'M', 'Q', 'K', ] },
      { name: 'H', points: 81, wishes: ['M', ] },
      { name: 'F', points: 86, wishes: ['L', 'O', 'Q', 'K', 'N', ] },
      { name: 'I', points: 87, wishes: ['P', 'Q', 'O', 'J', 'L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
  });

  it('should solve this set 205', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 7, wishes: ['I', ] },
      { name: 'B', points: 10, wishes: ['I', ] },
      { name: 'E', points: 21, wishes: ['I', ] },
      { name: 'F', points: 22, wishes: ['I', ] },
      { name: 'D', points: 25, wishes: ['I', ] },
      { name: 'A', points: 70, wishes: ['I', ] },
      { name: 'G', points: 96, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
  });

  it('should solve this set 206', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 3, wishes: ['J', ] },
      { name: 'D', points: 28, wishes: ['I', ] },
      { name: 'E', points: 42, wishes: ['J', ] },
      { name: 'H', points: 53, wishes: ['I', ] },
      { name: 'G', points: 56, wishes: ['J', 'I', ] },
      { name: 'B', points: 58, wishes: ['J', 'I', ] },
      { name: 'F', points: 66, wishes: ['I', 'J', ] },
      { name: 'C', points: 96, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 207', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 37, wishes: ['M', 'L', ] },
      { name: 'A', points: 93, wishes: ['J', 'P', 'I', 'O', 'M', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 208', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 61, wishes: ['N', 'M', 'P', 'J', 'I', 'K', 'O', 'L', ] },
      { name: 'A', points: 64, wishes: ['N', 'K', 'I', 'P', ] },
      { name: 'C', points: 79, wishes: ['I', 'P', 'J', 'N', 'L', 'O', ] },
      { name: 'D', points: 88, wishes: ['L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 209', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['I', ] },
      { name: 'B', points: 31, wishes: ['I', ] },
      { name: 'A', points: 62, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 210', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 36, wishes: ['L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 211', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 41, wishes: ['L', 'O', 'J', 'K', 'I', 'M', ] },
      { name: 'F', points: 46, wishes: ['J', 'M', 'I', ] },
      { name: 'C', points: 62, wishes: ['K', ] },
      { name: 'D', points: 65, wishes: ['I', 'M', 'J', 'K', 'N', 'O', ] },
      { name: 'A', points: 81, wishes: ['L', 'I', 'M', 'K', 'O', 'J', ] },
      { name: 'B', points: 95, wishes: ['O', 'L', 'K', 'J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
  });

  it('should solve this set 212', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 5, wishes: ['L', 'J', 'I', ] },
      { name: 'A', points: 60, wishes: ['N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 213', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['L', ] },
      { name: 'A', points: 17, wishes: ['L', 'J', 'P', 'M', 'K', ] },
      { name: 'B', points: 29, wishes: ['M', 'I', 'N', 'P', 'L', 'K', ] },
      { name: 'E', points: 32, wishes: ['K', 'O', 'M', 'N', 'I', ] },
      { name: 'D', points: 43, wishes: ['O', 'K', 'N', 'I', 'M', ] },
      { name: 'F', points: 60, wishes: ['P', 'I', 'J', 'K', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('P');
  });

  it('should solve this set 214', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 6, wishes: ['J', ] },
      { name: 'I', points: 16, wishes: ['J', 'K', 'I', ] },
      { name: 'E', points: 21, wishes: ['J', 'I', ] },
      { name: 'C', points: 23, wishes: ['J', 'I', 'K', ] },
      { name: 'F', points: 50, wishes: ['I', 'J', ] },
      { name: 'G', points: 51, wishes: ['J', 'K', ] },
      { name: 'D', points: 72, wishes: ['J', 'I', ] },
      { name: 'A', points: 76, wishes: ['J', 'I', 'K', ] },
      { name: 'H', points: 91, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 215', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 2, wishes: ['K', 'M', 'L', 'J', ] },
      { name: 'E', points: 13, wishes: ['J', 'M', ] },
      { name: 'B', points: 23, wishes: ['K', ] },
      { name: 'D', points: 26, wishes: ['L', 'M', 'J', 'K', ] },
      { name: 'H', points: 36, wishes: ['L', 'M', 'K', 'I', 'J', ] },
      { name: 'A', points: 57, wishes: ['J', ] },
      { name: 'F', points: 75, wishes: ['L', 'J', 'K', 'M', 'I', ] },
      { name: 'G', points: 86, wishes: ['L', 'J', 'K', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
  });

  it('should solve this set 216', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 13, wishes: ['J', ] },
      { name: 'B', points: 18, wishes: ['I', 'L', 'J', 'K', 'M', ] },
      { name: 'C', points: 29, wishes: ['J', 'I', 'K', ] },
      { name: 'A', points: 70, wishes: ['J', 'M', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 217', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 15, wishes: ['K', 'I', 'M', 'L', ] },
      { name: 'B', points: 31, wishes: ['J', ] },
      { name: 'E', points: 36, wishes: ['J', 'I', 'L', 'M', ] },
      { name: 'A', points: 55, wishes: ['J', 'I', ] },
      { name: 'D', points: 94, wishes: ['J', 'L', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
  });

  it('should solve this set 218', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 19, wishes: ['J', ] },
      { name: 'B', points: 55, wishes: ['J', ] },
      { name: 'D', points: 64, wishes: ['J', 'O', 'L', 'K', ] },
      { name: 'E', points: 71, wishes: ['N', 'L', 'K', 'M', ] },
      { name: 'A', points: 92, wishes: ['O', 'I', ] },
      { name: 'C', points: 97, wishes: ['K', 'L', 'M', 'O', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 219', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 8, wishes: ['N', 'M', 'K', 'L', 'I', ] },
      { name: 'C', points: 34, wishes: ['M', 'K', 'J', 'N', ] },
      { name: 'A', points: 54, wishes: ['K', 'M', 'I', 'L', ] },
      { name: 'B', points: 71, wishes: ['K', 'N', 'J', 'M', 'L', ] },
      { name: 'D', points: 75, wishes: ['K', 'M', 'J', 'N', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
  });

  it('should solve this set 220', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 24, wishes: ['I', ] },
      { name: 'A', points: 57, wishes: ['I', ] },
      { name: 'D', points: 62, wishes: ['I', ] },
      { name: 'B', points: 98, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 221', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 19, wishes: ['P', 'I', ] },
      { name: 'B', points: 38, wishes: ['P', 'I', 'N', 'O', 'J', 'K', 'L', ] },
      { name: 'F', points: 56, wishes: ['L', 'K', ] },
      { name: 'D', points: 60, wishes: ['O', 'M', 'L', 'I', 'J', ] },
      { name: 'H', points: 65, wishes: ['I', 'P', 'N', 'J', ] },
      { name: 'G', points: 67, wishes: ['I', 'J', 'N', 'L', 'O', 'K', 'M', 'P', ] },
      { name: 'E', points: 71, wishes: ['J', ] },
      { name: 'A', points: 72, wishes: ['J', ] },
      { name: 'C', points: 81, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 222', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 15, wishes: ['I', 'M', 'J', 'L', 'K', ] },
      { name: 'B', points: 89, wishes: ['L', 'M', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 223', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 3, wishes: ['J', ] },
      { name: 'C', points: 20, wishes: ['J', ] },
      { name: 'E', points: 39, wishes: ['J', 'I', ] },
      { name: 'A', points: 68, wishes: ['I', ] },
      { name: 'F', points: 70, wishes: ['J', ] },
      { name: 'H', points: 74, wishes: ['I', ] },
      { name: 'D', points: 79, wishes: ['I', ] },
      { name: 'B', points: 86, wishes: ['I', 'J', ] },
      { name: 'I', points: 96, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 224', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 15, wishes: ['M', 'P', 'I', ] },
      { name: 'B', points: 83, wishes: ['P', ] },
      { name: 'A', points: 90, wishes: ['M', 'I', 'P', 'J', 'L', 'N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 225', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 21, wishes: ['L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 226', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 92, wishes: ['J', 'M', 'I', 'K', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 227', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 7, wishes: ['J', 'M', 'O', 'K', 'N', 'I', 'P', ] },
      { name: 'A', points: 27, wishes: ['P', 'L', 'O', 'J', 'N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
  });

  it('should solve this set 228', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 61, wishes: ['I', ] },
      { name: 'C', points: 66, wishes: ['I', ] },
      { name: 'B', points: 73, wishes: ['I', ] },
      { name: 'A', points: 85, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 229', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 94, wishes: ['L', 'M', 'J', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 230', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 0, wishes: ['I', ] },
      { name: 'F', points: 7, wishes: ['I', ] },
      { name: 'B', points: 9, wishes: ['I', ] },
      { name: 'A', points: 58, wishes: ['I', ] },
      { name: 'C', points: 64, wishes: ['I', ] },
      { name: 'D', points: 69, wishes: ['I', ] },
      { name: 'E', points: 71, wishes: ['I', ] },
      { name: 'G', points: 82, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
  });

  it('should solve this set 231', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 0, wishes: ['Q', 'P', 'M', 'J', 'I', 'N', ] },
      { name: 'G', points: 28, wishes: ['K', 'N', 'I', 'P', 'M', ] },
      { name: 'B', points: 31, wishes: ['I', 'Q', 'L', 'P', 'K', 'O', 'M', 'J', ] },
      { name: 'C', points: 32, wishes: ['N', 'J', 'L', 'P', 'M', 'I', ] },
      { name: 'H', points: 34, wishes: ['J', 'N', 'I', 'Q', 'P', 'O', 'M', 'K', 'L', ] },
      { name: 'A', points: 55, wishes: ['Q', ] },
      { name: 'E', points: 69, wishes: ['M', 'O', ] },
      { name: 'D', points: 79, wishes: ['M', 'Q', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 232', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 89, wishes: ['I', 'J', ] },
      { name: 'A', points: 92, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 233', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 20, wishes: ['M', 'K', ] },
      { name: 'C', points: 29, wishes: ['N', 'I', 'M', 'J', ] },
      { name: 'D', points: 57, wishes: ['M', 'K', 'I', 'L', 'N', ] },
      { name: 'B', points: 63, wishes: ['I', 'M', 'L', 'J', ] },
      { name: 'G', points: 68, wishes: ['M', 'L', ] },
      { name: 'H', points: 74, wishes: ['I', 'N', 'M', 'L', 'J', ] },
      { name: 'A', points: 81, wishes: ['I', 'L', 'N', 'J', 'K', 'M', ] },
      { name: 'F', points: 85, wishes: ['J', 'M', 'L', 'I', 'N', 'K', ] },
      { name: 'E', points: 97, wishes: ['I', 'N', 'M', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
  });

  it('should solve this set 234', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 1, wishes: ['K', 'I', ] },
      { name: 'E', points: 19, wishes: ['J', 'K', ] },
      { name: 'H', points: 37, wishes: ['J', ] },
      { name: 'B', points: 60, wishes: ['K', ] },
      { name: 'G', points: 64, wishes: ['K', ] },
      { name: 'A', points: 71, wishes: ['I', 'K', ] },
      { name: 'D', points: 74, wishes: ['J', ] },
      { name: 'F', points: 93, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
  });

  it('should solve this set 235', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 10, wishes: ['P', 'M', ] },
      { name: 'B', points: 69, wishes: ['I', 'L', 'J', 'P', 'M', 'O', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 236', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 52, wishes: ['J', ] },
      { name: 'C', points: 54, wishes: ['I', ] },
      { name: 'A', points: 72, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 237', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 83, wishes: ['J', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 238', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 4, wishes: ['M', ] },
      { name: 'C', points: 10, wishes: ['M', 'O', 'J', 'L', 'N', 'P', 'I', 'K', ] },
      { name: 'A', points: 29, wishes: ['I', 'K', ] },
      { name: 'D', points: 32, wishes: ['N', 'P', 'O', ] },
      { name: 'B', points: 37, wishes: ['L', 'N', 'K', ] },
      { name: 'F', points: 45, wishes: ['N', 'L', 'I', 'P', 'K', 'M', 'J', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('P');
  });

  it('should solve this set 239', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 47, wishes: ['K', 'J', 'I', ] },
      { name: 'C', points: 52, wishes: ['L', 'K', 'J', 'I', ] },
      { name: 'A', points: 63, wishes: ['J', 'K', ] },
      { name: 'E', points: 84, wishes: ['J', 'I', ] },
      { name: 'B', points: 93, wishes: ['L', 'M', 'I', 'K', 'J', ] },
      { name: 'F', points: 97, wishes: ['I', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 240', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 30, wishes: ['N', 'J', 'M', 'I', ] },
      { name: 'A', points: 92, wishes: ['K', 'L', 'J', 'N', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 241', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 31, wishes: ['L', 'N', 'K', 'I', 'P', 'J', 'O', 'M', 'Q', ] },
      { name: 'A', points: 44, wishes: ['O', 'L', 'M', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
  });

  it('should solve this set 242', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 0, wishes: ['M', 'I', 'K', 'N', 'L', 'O', 'J', ] },
      { name: 'D', points: 14, wishes: ['I', 'J', 'K', 'O', 'N', 'L', ] },
      { name: 'C', points: 18, wishes: ['O', 'K', ] },
      { name: 'F', points: 22, wishes: ['N', 'M', 'O', 'K', ] },
      { name: 'G', points: 45, wishes: ['N', ] },
      { name: 'A', points: 65, wishes: ['J', 'M', ] },
      { name: 'B', points: 84, wishes: ['M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 243', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['I', 'J', ] },
      { name: 'C', points: 3, wishes: ['I', ] },
      { name: 'B', points: 8, wishes: ['I', ] },
      { name: 'D', points: 61, wishes: ['I', ] },
      { name: 'E', points: 69, wishes: ['I', 'J', ] },
      { name: 'F', points: 82, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 244', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 19, wishes: ['I', ] },
      { name: 'B', points: 24, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 245', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 19, wishes: ['L', 'I', ] },
      { name: 'A', points: 37, wishes: ['K', 'J', ] },
      { name: 'B', points: 99, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 246', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['I', ] },
      { name: 'C', points: 44, wishes: ['J', ] },
      { name: 'A', points: 54, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 247', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 82, wishes: ['K', 'P', 'O', ] },
      { name: 'A', points: 97, wishes: ['K', 'M', 'O', 'P', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 248', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['Q', 'P', ] },
      { name: 'A', points: 20, wishes: ['J', 'Q', 'I', 'L', 'O', 'M', 'P', ] },
      { name: 'B', points: 36, wishes: ['Q', 'M', 'I', 'P', 'N', ] },
      { name: 'D', points: 67, wishes: ['K', ] },
      { name: 'E', points: 95, wishes: ['M', 'N', 'O', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
  });

  it('should solve this set 249', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 9, wishes: ['L', 'O', 'M', ] },
      { name: 'D', points: 28, wishes: ['M', 'I', 'L', ] },
      { name: 'F', points: 37, wishes: ['K', ] },
      { name: 'E', points: 40, wishes: ['M', 'I', 'O', 'N', ] },
      { name: 'C', points: 41, wishes: ['M', 'J', 'K', 'P', 'I', ] },
      { name: 'B', points: 87, wishes: ['O', 'L', 'I', 'M', ] },
      { name: 'G', points: 97, wishes: ['M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('N');
  });

  it('should solve this set 250', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 0, wishes: ['I', ] },
      { name: 'C', points: 19, wishes: ['I', ] },
      { name: 'D', points: 31, wishes: ['I', ] },
      { name: 'G', points: 37, wishes: ['I', ] },
      { name: 'F', points: 45, wishes: ['I', ] },
      { name: 'B', points: 77, wishes: ['I', ] },
      { name: 'A', points: 84, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 251', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['I', 'M', 'P', 'K', 'O', 'N', ] },
      { name: 'C', points: 12, wishes: ['I', 'J', ] },
      { name: 'B', points: 38, wishes: ['K', ] },
      { name: 'D', points: 84, wishes: ['P', 'L', 'O', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
  });

  it('should solve this set 252', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 27, wishes: ['P', 'I', 'J', 'N', 'O', ] },
      { name: 'A', points: 69, wishes: ['K', 'N', 'J', 'I', 'L', 'M', 'P', 'O', ] },
      { name: 'B', points: 96, wishes: ['K', 'O', 'J', 'N', 'I', 'P', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
  });

  it('should solve this set 253', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 3, wishes: ['I', ] },
      { name: 'G', points: 11, wishes: ['I', ] },
      { name: 'F', points: 14, wishes: ['I', ] },
      { name: 'A', points: 39, wishes: ['I', ] },
      { name: 'D', points: 40, wishes: ['I', ] },
      { name: 'C', points: 52, wishes: ['I', ] },
      { name: 'E', points: 81, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 254', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 22, wishes: ['I', ] },
      { name: 'D', points: 30, wishes: ['I', ] },
      { name: 'C', points: 34, wishes: ['I', ] },
      { name: 'G', points: 40, wishes: ['I', ] },
      { name: 'F', points: 79, wishes: ['I', ] },
      { name: 'A', points: 91, wishes: ['I', ] },
      { name: 'E', points: 94, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 255', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 10, wishes: ['Q', 'O', 'P', 'J', 'N', ] },
      { name: 'E', points: 35, wishes: ['K', 'P', 'O', 'I', 'Q', 'N', 'J', 'L', 'M', ] },
      { name: 'F', points: 39, wishes: ['Q', 'J', 'L', 'P', 'N', 'K', 'M', 'I', 'O', ] },
      { name: 'B', points: 48, wishes: ['Q', 'O', 'L', 'K', 'I', ] },
      { name: 'A', points: 71, wishes: ['Q', ] },
      { name: 'C', points: 91, wishes: ['N', 'J', 'L', 'K', 'O', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
  });

  it('should solve this set 256', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 5, wishes: ['J', 'L', 'N', 'K', ] },
      { name: 'F', points: 6, wishes: ['L', 'N', ] },
      { name: 'A', points: 14, wishes: ['I', 'M', 'N', 'K', 'L', ] },
      { name: 'C', points: 24, wishes: ['N', 'J', 'I', 'K', ] },
      { name: 'G', points: 32, wishes: ['K', 'M', 'N', ] },
      { name: 'E', points: 34, wishes: ['L', 'K', 'J', ] },
      { name: 'D', points: 68, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 257', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 0, wishes: ['M', 'I', 'L', 'K', 'J', ] },
      { name: 'B', points: 13, wishes: ['L', 'J', ] },
      { name: 'A', points: 31, wishes: ['I', 'M', ] },
      { name: 'C', points: 54, wishes: ['L', 'J', 'K', ] },
      { name: 'F', points: 63, wishes: ['M', 'J', ] },
      { name: 'H', points: 76, wishes: ['J', 'M', 'L', 'I', 'K', ] },
      { name: 'D', points: 83, wishes: ['K', 'L', 'I', 'M', ] },
      { name: 'E', points: 84, wishes: ['I', 'K', 'L', 'M', 'J', ] },
      { name: 'G', points: 86, wishes: ['K', 'I', 'L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
  });

  it('should solve this set 258', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 34, wishes: ['J', 'K', ] },
      { name: 'A', points: 36, wishes: ['K', 'I', ] },
      { name: 'B', points: 40, wishes: ['K', ] },
      { name: 'C', points: 60, wishes: ['J', 'K', ] },
      { name: 'E', points: 90, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 259', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 9, wishes: ['P', 'K', 'N', 'O', 'Q', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
  });

  it('should solve this set 260', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 25, wishes: ['J', 'O', ] },
      { name: 'C', points: 26, wishes: ['K', 'J', 'P', 'M', 'I', 'N', ] },
      { name: 'B', points: 51, wishes: ['N', 'L', ] },
      { name: 'A', points: 87, wishes: ['K', 'L', 'N', ] },
      { name: 'D', points: 92, wishes: ['P', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
  });

  it('should solve this set 261', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 34, wishes: ['L', 'M', 'I', 'J', 'K', ] },
      { name: 'B', points: 49, wishes: ['K', 'M', ] },
      { name: 'E', points: 61, wishes: ['M', 'J', 'L', 'I', ] },
      { name: 'D', points: 81, wishes: ['I', 'L', ] },
      { name: 'A', points: 90, wishes: ['M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 262', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 21, wishes: ['O', 'L', ] },
      { name: 'B', points: 31, wishes: ['Q', 'P', 'M', ] },
      { name: 'E', points: 45, wishes: ['I', 'N', 'P', 'J', 'O', 'M', 'Q', ] },
      { name: 'A', points: 56, wishes: ['J', 'K', 'L', 'N', 'O', 'M', 'P', 'I', ] },
      { name: 'D', points: 61, wishes: ['Q', 'I', 'O', ] },
      { name: 'F', points: 81, wishes: ['O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
  });

  it('should solve this set 263', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 4, wishes: ['J', ] },
      { name: 'A', points: 9, wishes: ['I', 'J', ] },
      { name: 'E', points: 39, wishes: ['K', 'I', ] },
      { name: 'F', points: 44, wishes: ['J', 'K', ] },
      { name: 'C', points: 59, wishes: ['I', 'J', 'K', ] },
      { name: 'H', points: 61, wishes: ['I', 'J', 'K', ] },
      { name: 'B', points: 83, wishes: ['J', 'K', 'I', ] },
      { name: 'D', points: 89, wishes: ['K', 'J', ] },
      { name: 'I', points: 92, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
  });

  it('should solve this set 264', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 14, wishes: ['I', 'O', 'K', 'N', 'J', 'M', ] },
      { name: 'D', points: 29, wishes: ['K', 'O', 'L', 'N', 'J', 'M', 'I', ] },
      { name: 'C', points: 50, wishes: ['L', 'I', 'N', 'K', 'J', 'O', 'M', ] },
      { name: 'F', points: 65, wishes: ['I', 'M', 'K', 'O', 'N', 'J', 'L', ] },
      { name: 'A', points: 68, wishes: ['J', ] },
      { name: 'B', points: 70, wishes: ['O', 'L', ] },
      { name: 'G', points: 98, wishes: ['I', 'L', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
  });

  it('should solve this set 265', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 49, wishes: ['I', ] },
      { name: 'B', points: 58, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 266', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 11, wishes: ['I', 'J', 'L', 'O', 'P', ] },
      { name: 'B', points: 26, wishes: ['I', 'J', 'O', 'L', 'Q', 'K', ] },
      { name: 'C', points: 61, wishes: ['N', ] },
      { name: 'A', points: 84, wishes: ['N', 'J', 'Q', 'I', 'M', 'K', 'L', 'P', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
  });

  it('should solve this set 267', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 20, wishes: ['M', 'I', 'O', 'P', 'L', 'N', 'K', 'J', ] },
      { name: 'A', points: 61, wishes: ['P', 'O', 'N', 'L', 'K', 'M', 'J', 'I', ] },
      { name: 'C', points: 88, wishes: ['L', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 268', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 36, wishes: ['M', 'O', 'I', 'K', 'L', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 269', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['I', ] },
      { name: 'E', points: 7, wishes: ['I', ] },
      { name: 'D', points: 21, wishes: ['I', ] },
      { name: 'C', points: 28, wishes: ['I', ] },
      { name: 'B', points: 45, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 270', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 18, wishes: ['K', 'J', 'I', ] },
      { name: 'E', points: 24, wishes: ['J', ] },
      { name: 'A', points: 25, wishes: ['K', 'J', 'I', ] },
      { name: 'D', points: 30, wishes: ['I', 'K', 'J', ] },
      { name: 'B', points: 42, wishes: ['K', 'J', ] },
      { name: 'G', points: 83, wishes: ['J', 'K', ] },
      { name: 'H', points: 91, wishes: ['I', 'J', 'K', ] },
      { name: 'C', points: 96, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 271', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 87, wishes: ['Q', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
  });

  it('should solve this set 272', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 33, wishes: ['N', 'I', 'J', 'L', 'M', ] },
      { name: 'E', points: 35, wishes: ['I', 'N', 'K', 'J', 'M', 'L', ] },
      { name: 'A', points: 40, wishes: ['M', ] },
      { name: 'H', points: 45, wishes: ['L', ] },
      { name: 'D', points: 53, wishes: ['N', 'I', 'L', ] },
      { name: 'I', points: 55, wishes: ['K', 'M', 'I', 'N', 'L', 'J', ] },
      { name: 'B', points: 85, wishes: ['I', 'M', 'N', 'J', ] },
      { name: 'F', points: 88, wishes: ['K', 'M', ] },
      { name: 'C', points: 91, wishes: ['M', 'N', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
  });

  it('should solve this set 273', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 29, wishes: ['K', 'J', ] },
      { name: 'C', points: 36, wishes: ['I', 'J', ] },
      { name: 'H', points: 45, wishes: ['I', 'J', ] },
      { name: 'B', points: 54, wishes: ['K', 'I', ] },
      { name: 'G', points: 58, wishes: ['J', 'K', 'I', ] },
      { name: 'A', points: 62, wishes: ['I', 'J', 'K', ] },
      { name: 'D', points: 65, wishes: ['J', 'K', 'I', ] },
      { name: 'I', points: 74, wishes: ['J', ] },
      { name: 'E', points: 82, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
  });

  it('should solve this set 274', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 25, wishes: ['J', ] },
      { name: 'B', points: 26, wishes: ['L', 'N', 'J', 'M', ] },
      { name: 'A', points: 73, wishes: ['O', ] },
      { name: 'E', points: 91, wishes: ['K', ] },
      { name: 'C', points: 98, wishes: ['K', 'M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
  });

  it('should solve this set 275', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 5, wishes: ['O', 'L', 'N', 'J', ] },
      { name: 'A', points: 31, wishes: ['J', 'O', 'K', 'M', 'N', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 276', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 16, wishes: ['I', ] },
      { name: 'B', points: 24, wishes: ['I', ] },
      { name: 'C', points: 82, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 277', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 12, wishes: ['J', ] },
      { name: 'C', points: 18, wishes: ['N', 'K', 'I', 'M', 'L', 'J', ] },
      { name: 'B', points: 60, wishes: ['N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 278', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 10, wishes: ['I', ] },
      { name: 'C', points: 23, wishes: ['I', 'J', ] },
      { name: 'G', points: 38, wishes: ['J', ] },
      { name: 'D', points: 60, wishes: ['J', ] },
      { name: 'E', points: 70, wishes: ['J', 'I', ] },
      { name: 'F', points: 73, wishes: ['I', 'J', ] },
      { name: 'H', points: 75, wishes: ['I', 'J', ] },
      { name: 'B', points: 97, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 279', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 11, wishes: ['I', 'J', ] },
      { name: 'G', points: 35, wishes: ['I', ] },
      { name: 'F', points: 38, wishes: ['I', 'J', ] },
      { name: 'D', points: 44, wishes: ['I', 'J', ] },
      { name: 'C', points: 66, wishes: ['J', ] },
      { name: 'H', points: 82, wishes: ['J', ] },
      { name: 'B', points: 87, wishes: ['I', ] },
      { name: 'A', points: 92, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
  });

  it('should solve this set 280', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 49, wishes: ['M', 'L', 'K', 'N', 'O', 'P', 'J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 281', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['I', ] },
      { name: 'C', points: 59, wishes: ['I', ] },
      { name: 'D', points: 61, wishes: ['I', ] },
      { name: 'B', points: 68, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 282', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 8, wishes: ['J', 'I', 'K', ] },
      { name: 'B', points: 18, wishes: ['I', ] },
      { name: 'A', points: 40, wishes: ['J', 'I', 'K', ] },
      { name: 'D', points: 85, wishes: ['K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 283', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 5, wishes: ['I', ] },
      { name: 'A', points: 25, wishes: ['I', ] },
      { name: 'E', points: 30, wishes: ['I', ] },
      { name: 'B', points: 31, wishes: ['I', ] },
      { name: 'F', points: 41, wishes: ['I', ] },
      { name: 'D', points: 86, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 284', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 8, wishes: ['M', 'I', 'N', ] },
      { name: 'G', points: 16, wishes: ['J', 'N', 'L', 'K', ] },
      { name: 'C', points: 18, wishes: ['L', 'O', 'J', 'N', 'M', ] },
      { name: 'E', points: 26, wishes: ['L', ] },
      { name: 'A', points: 28, wishes: ['O', 'N', 'L', 'M', 'K', ] },
      { name: 'F', points: 75, wishes: ['J', 'O', 'K', 'I', ] },
      { name: 'B', points: 88, wishes: ['M', 'J', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
  });

  it('should solve this set 285', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 19, wishes: ['K', 'J', 'L', ] },
      { name: 'A', points: 21, wishes: ['L', ] },
      { name: 'H', points: 25, wishes: ['J', ] },
      { name: 'E', points: 27, wishes: ['I', 'J', 'K', 'L', ] },
      { name: 'C', points: 44, wishes: ['I', 'L', 'J', 'K', ] },
      { name: 'G', points: 60, wishes: ['K', 'I', 'L', 'J', ] },
      { name: 'D', points: 74, wishes: ['K', ] },
      { name: 'B', points: 81, wishes: ['I', 'K', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 286', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 25, wishes: ['N', 'L', ] },
      { name: 'C', points: 52, wishes: ['N', 'L', 'K', 'J', 'I', ] },
      { name: 'B', points: 69, wishes: ['L', ] },
      { name: 'A', points: 76, wishes: ['L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 287', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 20, wishes: ['K', 'J', 'I', 'L', 'M', ] },
      { name: 'I', points: 51, wishes: ['J', 'L', 'I', ] },
      { name: 'F', points: 53, wishes: ['M', 'I', ] },
      { name: 'B', points: 57, wishes: ['K', 'I', ] },
      { name: 'G', points: 61, wishes: ['K', 'J', 'M', 'I', 'L', ] },
      { name: 'A', points: 85, wishes: ['K', 'I', 'L', 'J', ] },
      { name: 'H', points: 88, wishes: ['I', 'M', 'K', 'J', ] },
      { name: 'D', points: 96, wishes: ['J', ] },
      { name: 'E', points: 98, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
  });

  it('should solve this set 288', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 69, wishes: ['M', 'J', ] },
      { name: 'A', points: 74, wishes: ['J', 'M', 'K', 'N', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 289', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 23, wishes: ['K', 'J', ] },
      { name: 'B', points: 29, wishes: ['L', 'M', 'J', 'I', 'K', ] },
      { name: 'A', points: 32, wishes: ['M', ] },
      { name: 'D', points: 63, wishes: ['K', 'L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 290', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 5, wishes: ['I', 'M', 'L', 'J', 'K', ] },
      { name: 'H', points: 19, wishes: ['L', 'J', 'M', 'I', 'K', ] },
      { name: 'E', points: 23, wishes: ['L', 'M', ] },
      { name: 'A', points: 25, wishes: ['K', ] },
      { name: 'D', points: 37, wishes: ['M', 'K', 'L', 'J', 'I', ] },
      { name: 'B', points: 40, wishes: ['I', 'J', 'L', 'M', ] },
      { name: 'C', points: 44, wishes: ['M', ] },
      { name: 'F', points: 70, wishes: ['K', 'L', 'M', ] },
      { name: 'G', points: 81, wishes: ['J', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 291', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 78, wishes: ['M', 'K', 'I', 'J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 292', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 28, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 293', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 30, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 294', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 7, wishes: ['O', 'N', 'J', 'L', 'M', ] },
      { name: 'A', points: 18, wishes: ['I', ] },
      { name: 'G', points: 39, wishes: ['K', 'N', 'L', 'O', 'I', 'M', ] },
      { name: 'C', points: 43, wishes: ['O', 'I', 'L', 'N', 'M', 'J', ] },
      { name: 'F', points: 45, wishes: ['L', 'O', 'M', 'K', 'J', ] },
      { name: 'E', points: 47, wishes: ['N', 'I', 'J', ] },
      { name: 'D', points: 69, wishes: ['M', 'O', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
  });

  it('should solve this set 295', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 0, wishes: ['J', 'N', 'M', ] },
      { name: 'A', points: 99, wishes: ['J', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 296', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 30, wishes: ['N', 'O', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 297', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 50, wishes: ['M', 'I', 'L', 'Q', ] },
      { name: 'E', points: 67, wishes: ['M', 'Q', 'P', 'L', 'I', 'K', ] },
      { name: 'G', points: 72, wishes: ['I', 'P', 'O', 'M', 'L', 'Q', 'J', 'K', 'N', ] },
      { name: 'B', points: 75, wishes: ['K', 'Q', 'P', ] },
      { name: 'F', points: 80, wishes: ['O', 'P', 'K', 'Q', ] },
      { name: 'C', points: 85, wishes: ['N', 'I', 'P', 'J', 'L', 'K', 'O', 'Q', ] },
      { name: 'A', points: 94, wishes: ['J', 'N', 'P', 'I', 'O', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 298', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 8, wishes: ['I', ] },
      { name: 'C', points: 45, wishes: ['I', ] },
      { name: 'A', points: 67, wishes: ['I', ] },
      { name: 'B', points: 85, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 299', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 7, wishes: ['J', 'O', 'N', 'L', ] },
      { name: 'B', points: 23, wishes: ['M', 'O', 'J', 'K', 'L', 'I', 'N', ] },
      { name: 'A', points: 28, wishes: ['M', 'I', 'N', 'K', 'L', 'J', ] },
      { name: 'E', points: 61, wishes: ['K', 'J', 'L', 'O', ] },
      { name: 'C', points: 66, wishes: ['J', 'N', ] },
      { name: 'F', points: 68, wishes: ['I', ] },
      { name: 'G', points: 75, wishes: ['I', 'L', 'M', 'N', 'O', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
  });

  it('should solve this set 300', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 38, wishes: ['Q', 'M', 'I', 'P', 'K', 'L', 'O', ] },
      { name: 'A', points: 69, wishes: ['M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 301', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 0, wishes: ['K', 'I', 'M', 'L', 'J', ] },
      { name: 'B', points: 47, wishes: ['I', ] },
      { name: 'C', points: 64, wishes: ['I', 'M', 'L', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
  });

  it('should solve this set 302', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 15, wishes: ['I', ] },
      { name: 'A', points: 30, wishes: ['I', ] },
      { name: 'C', points: 82, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 303', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 27, wishes: ['L', 'M', ] },
      { name: 'C', points: 72, wishes: ['K', 'O', 'M', 'J', 'P', 'N', 'I', ] },
      { name: 'A', points: 95, wishes: ['J', 'N', 'M', 'P', 'K', 'L', 'O', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 304', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 53, wishes: ['I', 'K', ] },
      { name: 'B', points: 55, wishes: ['N', 'K', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
  });

  it('should solve this set 305', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 82, wishes: ['I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 306', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 71, wishes: ['J', 'N', 'K', 'I', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 307', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 21, wishes: ['K', 'J', 'M', 'Q', 'I', 'L', 'N', 'O', ] },
      { name: 'B', points: 73, wishes: ['Q', 'O', 'P', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('Q');
  });

  it('should solve this set 308', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 46, wishes: ['K', 'I', 'M', 'L', ] },
      { name: 'C', points: 69, wishes: ['I', 'M', 'J', ] },
      { name: 'A', points: 73, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 309', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 23, wishes: ['I', 'O', ] },
      { name: 'A', points: 75, wishes: ['O', 'I', 'J', 'L', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
  });

  it('should solve this set 310', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 45, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 311', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 25, wishes: ['I', 'K', ] },
      { name: 'C', points: 42, wishes: ['J', 'K', 'I', ] },
      { name: 'B', points: 45, wishes: ['I', 'K', 'J', ] },
      { name: 'F', points: 49, wishes: ['I', ] },
      { name: 'A', points: 54, wishes: ['J', 'I', 'K', ] },
      { name: 'E', points: 62, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 312', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 12, wishes: ['J', 'M', 'N', 'L', 'O', 'I', 'K', ] },
      { name: 'B', points: 36, wishes: ['N', 'M', 'O', ] },
      { name: 'E', points: 78, wishes: ['I', 'K', 'L', ] },
      { name: 'A', points: 90, wishes: ['N', 'L', 'K', 'M', 'J', 'I', 'O', ] },
      { name: 'C', points: 91, wishes: ['J', 'N', 'K', 'O', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 313', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 36, wishes: ['J', 'Q', 'O', 'P', ] },
      { name: 'A', points: 95, wishes: ['P', 'Q', 'I', 'J', 'L', 'K', ] },
      { name: 'C', points: 98, wishes: ['N', 'O', 'L', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
  });

  it('should solve this set 314', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 41, wishes: ['M', 'K', 'N', 'I', 'J', 'L', ] },
      { name: 'C', points: 52, wishes: ['N', 'M', ] },
      { name: 'D', points: 76, wishes: ['J', 'O', 'L', ] },
      { name: 'B', points: 95, wishes: ['O', 'L', 'K', 'I', 'M', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
  });

  it('should solve this set 315', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 2, wishes: ['I', ] },
      { name: 'H', points: 20, wishes: ['I', ] },
      { name: 'G', points: 28, wishes: ['I', ] },
      { name: 'B', points: 38, wishes: ['I', ] },
      { name: 'E', points: 57, wishes: ['I', ] },
      { name: 'F', points: 69, wishes: ['I', ] },
      { name: 'D', points: 71, wishes: ['I', ] },
      { name: 'A', points: 85, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 316', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 1, wishes: ['K', 'L', 'I', 'N', ] },
      { name: 'C', points: 35, wishes: ['I', 'N', 'M', ] },
      { name: 'B', points: 47, wishes: ['J', 'L', ] },
      { name: 'A', points: 57, wishes: ['J', 'K', 'L', 'N', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 317', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 13, wishes: ['J', ] },
      { name: 'B', points: 28, wishes: ['I', ] },
      { name: 'E', points: 42, wishes: ['I', 'J', ] },
      { name: 'D', points: 58, wishes: ['I', 'J', ] },
      { name: 'C', points: 71, wishes: ['I', ] },
      { name: 'A', points: 81, wishes: ['J', 'I', ] },
      { name: 'F', points: 95, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
  });

  it('should solve this set 318', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 8, wishes: ['I', 'J', ] },
      { name: 'D', points: 18, wishes: ['K', 'I', ] },
      { name: 'B', points: 25, wishes: ['J', 'K', ] },
      { name: 'C', points: 38, wishes: ['J', 'K', 'I', ] },
      { name: 'A', points: 45, wishes: ['J', 'K', ] },
      { name: 'E', points: 71, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 319', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 6, wishes: ['O', 'N', 'M', 'I', ] },
      { name: 'F', points: 16, wishes: ['J', ] },
      { name: 'G', points: 17, wishes: ['O', ] },
      { name: 'A', points: 50, wishes: ['K', 'L', 'J', 'N', 'O', ] },
      { name: 'B', points: 62, wishes: ['M', 'J', 'O', 'N', 'K', ] },
      { name: 'H', points: 82, wishes: ['I', 'J', 'M', ] },
      { name: 'D', points: 97, wishes: ['I', 'M', 'L', 'N', 'O', ] },
      { name: 'C', points: 99, wishes: ['I', 'M', 'N', 'K', 'J', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 320', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 22, wishes: ['I', ] },
      { name: 'B', points: 24, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 321', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 31, wishes: ['L', 'N', 'P', 'M', ] },
      { name: 'B', points: 41, wishes: ['J', 'K', 'L', 'Q', 'O', 'P', ] },
      { name: 'G', points: 42, wishes: ['M', 'N', 'Q', 'P', 'L', ] },
      { name: 'D', points: 61, wishes: ['J', 'K', 'N', 'Q', 'I', 'O', ] },
      { name: 'A', points: 69, wishes: ['P', 'O', ] },
      { name: 'E', points: 84, wishes: ['N', 'K', 'Q', 'L', ] },
      { name: 'C', points: 89, wishes: ['J', 'L', 'Q', 'I', 'O', 'N', 'P', ] },
      { name: 'F', points: 96, wishes: ['K', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('Q');
  });

  it('should solve this set 322', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 38, wishes: ['O', 'I', 'J', 'M', 'N', ] },
      { name: 'A', points: 99, wishes: ['L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 323', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 30, wishes: ['M', 'L', 'N', 'K', ] },
      { name: 'A', points: 38, wishes: ['I', 'J', 'M', 'N', 'K', 'L', ] },
      { name: 'B', points: 74, wishes: ['L', 'J', 'N', 'M', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 324', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 8, wishes: ['I', ] },
      { name: 'B', points: 42, wishes: ['I', ] },
      { name: 'C', points: 65, wishes: ['I', ] },
      { name: 'E', points: 83, wishes: ['I', ] },
      { name: 'F', points: 86, wishes: ['I', ] },
      { name: 'A', points: 97, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 325', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 10, wishes: ['J', 'P', 'N', 'M', ] },
      { name: 'D', points: 72, wishes: ['L', 'Q', 'N', ] },
      { name: 'A', points: 82, wishes: ['M', 'P', 'I', 'J', 'O', 'K', 'N', 'L', ] },
      { name: 'B', points: 99, wishes: ['L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 326', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 5, wishes: ['L', 'I', 'N', 'J', ] },
      { name: 'E', points: 32, wishes: ['M', 'N', ] },
      { name: 'A', points: 39, wishes: ['J', 'N', 'M', 'L', 'K', ] },
      { name: 'C', points: 48, wishes: ['M', 'N', 'L', ] },
      { name: 'B', points: 61, wishes: ['L', 'J', ] },
      { name: 'F', points: 72, wishes: ['I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
  });

  it('should solve this set 327', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 29, wishes: ['I', 'J', 'P', 'L', ] },
      { name: 'D', points: 34, wishes: ['N', 'J', 'K', 'P', 'M', ] },
      { name: 'F', points: 40, wishes: ['J', ] },
      { name: 'A', points: 41, wishes: ['O', 'K', 'L', 'N', ] },
      { name: 'C', points: 45, wishes: ['K', 'L', 'O', 'P', 'J', ] },
      { name: 'E', points: 49, wishes: ['J', 'I', 'O', 'K', 'L', 'P', 'N', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
  });

  it('should solve this set 328', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['I', ] },
      { name: 'E', points: 2, wishes: ['I', 'J', ] },
      { name: 'A', points: 3, wishes: ['I', ] },
      { name: 'F', points: 11, wishes: ['J', 'I', ] },
      { name: 'C', points: 43, wishes: ['I', 'J', ] },
      { name: 'G', points: 58, wishes: ['J', 'I', ] },
      { name: 'D', points: 81, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 329', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 12, wishes: ['I', 'J', 'L', ] },
      { name: 'C', points: 27, wishes: ['K', ] },
      { name: 'H', points: 38, wishes: ['K', 'M', 'J', 'L', 'I', ] },
      { name: 'G', points: 43, wishes: ['J', 'M', 'L', 'K', 'I', ] },
      { name: 'D', points: 61, wishes: ['J', 'K', 'M', ] },
      { name: 'E', points: 63, wishes: ['I', 'M', 'L', 'J', ] },
      { name: 'A', points: 69, wishes: ['I', ] },
      { name: 'B', points: 75, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 330', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 7, wishes: ['I', 'M', 'J', ] },
      { name: 'A', points: 18, wishes: ['N', 'J', 'I', 'M', ] },
      { name: 'I', points: 38, wishes: ['K', 'N', 'I', ] },
      { name: 'C', points: 46, wishes: ['K', 'I', 'J', 'M', ] },
      { name: 'H', points: 52, wishes: ['K', 'N', ] },
      { name: 'D', points: 55, wishes: ['K', 'M', 'I', 'J', ] },
      { name: 'B', points: 68, wishes: ['K', 'M', 'N', 'L', ] },
      { name: 'G', points: 73, wishes: ['K', 'N', 'I', 'J', 'M', 'L', ] },
      { name: 'E', points: 93, wishes: ['M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 331', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 60, wishes: ['J', ] },
      { name: 'B', points: 99, wishes: ['J', 'L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 332', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 25, wishes: ['J', ] },
      { name: 'C', points: 55, wishes: ['J', 'I', 'K', 'L', 'M', ] },
      { name: 'B', points: 63, wishes: ['J', 'I', 'M', 'L', 'K', ] },
      { name: 'A', points: 70, wishes: ['I', 'M', 'J', ] },
      { name: 'D', points: 91, wishes: ['J', 'M', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
  });

  it('should solve this set 333', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 30, wishes: ['J', 'I', 'K', ] },
      { name: 'B', points: 32, wishes: ['I', 'K', 'J', ] },
      { name: 'A', points: 34, wishes: ['K', ] },
      { name: 'D', points: 51, wishes: ['I', 'J', 'K', ] },
      { name: 'E', points: 64, wishes: ['J', ] },
      { name: 'C', points: 84, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 334', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 3, wishes: ['I', ] },
      { name: 'B', points: 69, wishes: ['J', 'L', 'K', ] },
      { name: 'A', points: 80, wishes: ['J', 'K', ] },
      { name: 'C', points: 88, wishes: ['L', 'J', 'K', ] },
      { name: 'F', points: 90, wishes: ['L', 'I', 'J', ] },
      { name: 'E', points: 98, wishes: ['J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 335', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 3, wishes: ['K', 'I', 'J', ] },
      { name: 'F', points: 15, wishes: ['I', 'J', ] },
      { name: 'I', points: 17, wishes: ['K', ] },
      { name: 'C', points: 24, wishes: ['J', ] },
      { name: 'G', points: 25, wishes: ['J', 'K', ] },
      { name: 'A', points: 28, wishes: ['K', ] },
      { name: 'B', points: 42, wishes: ['I', ] },
      { name: 'E', points: 46, wishes: ['J', 'K', ] },
      { name: 'D', points: 47, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('K');
  });

  it('should solve this set 336', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 5, wishes: ['N', 'K', 'M', 'I', ] },
      { name: 'D', points: 16, wishes: ['I', 'K', 'L', 'N', 'M', 'J', ] },
      { name: 'E', points: 72, wishes: ['K', 'J', 'L', ] },
      { name: 'C', points: 78, wishes: ['N', 'J', 'I', ] },
      { name: 'B', points: 81, wishes: ['N', 'L', 'I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 337', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 4, wishes: ['I', ] },
      { name: 'C', points: 15, wishes: ['K', 'J', ] },
      { name: 'E', points: 33, wishes: ['J', 'K', ] },
      { name: 'G', points: 37, wishes: ['I', ] },
      { name: 'A', points: 50, wishes: ['I', ] },
      { name: 'B', points: 57, wishes: ['K', ] },
      { name: 'F', points: 59, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
  });

  it('should solve this set 338', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 6, wishes: ['O', 'J', ] },
      { name: 'A', points: 27, wishes: ['K', 'J', 'I', 'N', 'M', 'L', ] },
      { name: 'E', points: 46, wishes: ['K', 'N', 'O', 'P', ] },
      { name: 'C', points: 74, wishes: ['P', 'O', ] },
      { name: 'B', points: 97, wishes: ['M', 'O', 'I', 'N', 'P', 'J', 'K', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 339', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 93, wishes: ['L', 'J', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 340', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 10, wishes: ['L', 'K', 'N', 'I', ] },
      { name: 'G', points: 25, wishes: ['K', 'N', 'I', 'J', 'M', 'L', ] },
      { name: 'F', points: 44, wishes: ['K', 'M', ] },
      { name: 'E', points: 46, wishes: ['J', 'K', 'L', 'I', ] },
      { name: 'D', points: 61, wishes: ['N', 'J', 'K', 'L', 'M', 'I', ] },
      { name: 'C', points: 72, wishes: ['M', 'K', 'J', 'L', ] },
      { name: 'B', points: 94, wishes: ['N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 341', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 42, wishes: ['J', 'I', ] },
      { name: 'B', points: 55, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 342', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 34, wishes: ['I', ] },
      { name: 'A', points: 36, wishes: ['I', ] },
      { name: 'H', points: 52, wishes: ['I', ] },
      { name: 'G', points: 68, wishes: ['I', ] },
      { name: 'D', points: 69, wishes: ['I', ] },
      { name: 'B', points: 70, wishes: ['I', ] },
      { name: 'F', points: 71, wishes: ['I', ] },
      { name: 'C', points: 93, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 343', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 7, wishes: ['I', ] },
      { name: 'H', points: 10, wishes: ['I', ] },
      { name: 'D', points: 43, wishes: ['I', ] },
      { name: 'G', points: 44, wishes: ['I', ] },
      { name: 'B', points: 69, wishes: ['I', ] },
      { name: 'F', points: 73, wishes: ['I', ] },
      { name: 'E', points: 76, wishes: ['I', ] },
      { name: 'A', points: 81, wishes: ['I', ] },
      { name: 'I', points: 88, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
  });

  it('should solve this set 344', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 14, wishes: ['M', ] },
      { name: 'B', points: 16, wishes: ['I', 'L', ] },
      { name: 'D', points: 22, wishes: ['J', 'I', 'L', 'K', ] },
      { name: 'A', points: 35, wishes: ['M', 'J', ] },
      { name: 'C', points: 85, wishes: ['M', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 345', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 16, wishes: ['I', 'J', ] },
      { name: 'A', points: 99, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 346', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 18, wishes: ['I', ] },
      { name: 'D', points: 30, wishes: ['K', 'J', 'I', ] },
      { name: 'F', points: 34, wishes: ['J', 'I', ] },
      { name: 'C', points: 48, wishes: ['K', 'I', ] },
      { name: 'E', points: 51, wishes: ['I', 'J', 'K', ] },
      { name: 'B', points: 53, wishes: ['K', 'J', ] },
      { name: 'A', points: 86, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 347', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 45, wishes: ['K', ] },
      { name: 'E', points: 49, wishes: ['J', 'K', ] },
      { name: 'A', points: 65, wishes: ['J', ] },
      { name: 'C', points: 76, wishes: ['K', 'J', 'I', ] },
      { name: 'D', points: 77, wishes: ['K', 'I', ] },
      { name: 'B', points: 89, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 348', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 2, wishes: ['I', 'M', 'L', 'N', 'J', 'K', ] },
      { name: 'B', points: 6, wishes: ['M', 'N', 'L', ] },
      { name: 'G', points: 19, wishes: ['J', 'I', 'L', 'M', ] },
      { name: 'F', points: 42, wishes: ['M', 'I', 'N', 'K', ] },
      { name: 'E', points: 57, wishes: ['N', ] },
      { name: 'A', points: 68, wishes: ['N', 'J', 'L', 'I', 'M', ] },
      { name: 'C', points: 97, wishes: ['I', 'L', 'K', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 349', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 18, wishes: ['J', 'M', 'L', 'I', 'O', 'N', 'K', ] },
      { name: 'B', points: 30, wishes: ['N', 'K', 'O', 'L', 'J', 'M', 'I', ] },
      { name: 'A', points: 94, wishes: ['J', 'I', 'K', 'O', 'L', 'N', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 350', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 8, wishes: ['I', ] },
      { name: 'B', points: 62, wishes: ['I', ] },
      { name: 'C', points: 75, wishes: ['I', ] },
      { name: 'D', points: 87, wishes: ['I', ] },
      { name: 'F', points: 94, wishes: ['I', ] },
      { name: 'E', points: 99, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 351', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 6, wishes: ['L', 'J', 'I', 'M', 'N', 'K', ] },
      { name: 'C', points: 18, wishes: ['N', 'L', 'J', 'K', ] },
      { name: 'D', points: 19, wishes: ['I', 'N', 'M', 'L', ] },
      { name: 'F', points: 46, wishes: ['J', ] },
      { name: 'A', points: 80, wishes: ['N', 'I', ] },
      { name: 'B', points: 83, wishes: ['M', 'L', 'J', 'N', 'I', 'K', ] },
      { name: 'G', points: 92, wishes: ['L', 'N', 'J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 352', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 29, wishes: ['J', ] },
      { name: 'I', points: 31, wishes: ['N', 'K', 'P', 'J', 'O', 'I', ] },
      { name: 'C', points: 36, wishes: ['P', 'J', ] },
      { name: 'B', points: 46, wishes: ['M', 'K', 'P', 'N', 'O', 'L', ] },
      { name: 'F', points: 62, wishes: ['O', 'P', 'J', 'N', 'I', 'L', 'M', ] },
      { name: 'A', points: 80, wishes: ['I', 'K', ] },
      { name: 'E', points: 85, wishes: ['M', 'O', ] },
      { name: 'H', points: 91, wishes: ['L', 'I', 'M', ] },
      { name: 'D', points: 97, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
  });

  it('should solve this set 353', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 0, wishes: ['L', ] },
      { name: 'C', points: 7, wishes: ['L', 'N', 'K', 'M', 'J', ] },
      { name: 'F', points: 11, wishes: ['K', 'J', 'L', 'M', ] },
      { name: 'D', points: 86, wishes: ['J', ] },
      { name: 'B', points: 88, wishes: ['K', 'J', 'M', ] },
      { name: 'A', points: 98, wishes: ['M', 'K', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 354', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 35, wishes: ['I', ] },
      { name: 'B', points: 48, wishes: ['I', ] },
      { name: 'E', points: 75, wishes: ['I', ] },
      { name: 'A', points: 88, wishes: ['I', ] },
      { name: 'C', points: 97, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 355', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 17, wishes: ['K', ] },
      { name: 'B', points: 22, wishes: ['K', 'I', ] },
      { name: 'C', points: 27, wishes: ['J', 'K', 'I', ] },
      { name: 'I', points: 33, wishes: ['J', 'K', ] },
      { name: 'D', points: 61, wishes: ['J', ] },
      { name: 'E', points: 65, wishes: ['K', 'J', ] },
      { name: 'H', points: 66, wishes: ['J', 'K', ] },
      { name: 'A', points: 72, wishes: ['K', 'J', 'I', ] },
      { name: 'G', points: 73, wishes: ['I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 356', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 5, wishes: ['N', 'L', 'I', 'O', 'K', 'J', ] },
      { name: 'A', points: 34, wishes: ['K', 'L', 'O', 'J', 'I', ] },
      { name: 'D', points: 38, wishes: ['N', 'O', 'I', 'K', 'M', 'J', 'L', ] },
      { name: 'C', points: 46, wishes: ['K', 'N', 'J', 'I', 'O', 'M', ] },
      { name: 'E', points: 98, wishes: ['I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 357', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 78, wishes: ['J', ] },
      { name: 'C', points: 81, wishes: ['I', ] },
      { name: 'A', points: 82, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 358', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 39, wishes: ['P', 'L', 'N', 'M', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
  });

  it('should solve this set 359', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 24, wishes: ['K', 'I', ] },
      { name: 'C', points: 25, wishes: ['I', 'J', 'K', ] },
      { name: 'F', points: 43, wishes: ['J', ] },
      { name: 'B', points: 89, wishes: ['I', 'J', ] },
      { name: 'A', points: 91, wishes: ['I', 'K', ] },
      { name: 'D', points: 96, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 360', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 7, wishes: ['O', 'I', 'L', 'J', 'N', 'M', 'K', ] },
      { name: 'I', points: 13, wishes: ['K', 'I', 'O', 'J', 'N', 'L', ] },
      { name: 'C', points: 16, wishes: ['O', 'J', 'M', 'L', 'N', 'I', 'K', ] },
      { name: 'G', points: 21, wishes: ['M', 'O', 'K', 'L', 'I', ] },
      { name: 'H', points: 37, wishes: ['O', 'N', 'K', ] },
      { name: 'D', points: 50, wishes: ['J', 'I', 'O', 'N', 'M', ] },
      { name: 'F', points: 88, wishes: ['M', 'I', 'N', 'O', 'L', 'J', 'K', ] },
      { name: 'A', points: 91, wishes: ['L', ] },
      { name: 'E', points: 93, wishes: ['L', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
  });

  it('should solve this set 361', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 28, wishes: ['I', 'K', 'J', ] },
      { name: 'B', points: 41, wishes: ['K', ] },
      { name: 'E', points: 52, wishes: ['I', 'J', ] },
      { name: 'C', points: 54, wishes: ['K', ] },
      { name: 'A', points: 68, wishes: ['I', ] },
      { name: 'F', points: 99, wishes: ['I', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 362', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 74, wishes: ['J', 'I', ] },
      { name: 'A', points: 98, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 363', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 9, wishes: ['I', 'L', 'M', 'K', 'J', ] },
      { name: 'B', points: 93, wishes: ['J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 364', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 2, wishes: ['J', 'I', ] },
      { name: 'B', points: 4, wishes: ['J', ] },
      { name: 'A', points: 11, wishes: ['I', ] },
      { name: 'E', points: 48, wishes: ['I', ] },
      { name: 'F', points: 74, wishes: ['I', 'J', ] },
      { name: 'C', points: 89, wishes: ['J', ] },
      { name: 'D', points: 92, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 365', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 9, wishes: ['I', 'N', 'L', 'J', 'K', 'O', ] },
      { name: 'E', points: 18, wishes: ['L', 'K', 'J', 'I', 'O', 'M', ] },
      { name: 'A', points: 55, wishes: ['I', 'N', 'L', 'O', ] },
      { name: 'B', points: 71, wishes: ['O', 'I', 'L', 'J', ] },
      { name: 'C', points: 83, wishes: ['M', 'J', 'N', 'O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
  });

  it('should solve this set 366', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 39, wishes: ['I', 'L', 'J', 'K', ] },
      { name: 'B', points: 77, wishes: ['K', 'I', 'J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 367', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 41, wishes: ['L', 'K', ] },
      { name: 'A', points: 68, wishes: ['K', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 368', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 15, wishes: ['K', 'J', 'L', ] },
      { name: 'C', points: 21, wishes: ['L', ] },
      { name: 'A', points: 28, wishes: ['I', 'J', 'K', 'L', ] },
      { name: 'E', points: 35, wishes: ['K', 'L', ] },
      { name: 'I', points: 48, wishes: ['I', 'J', 'K', 'L', ] },
      { name: 'F', points: 55, wishes: ['I', 'L', 'K', 'J', ] },
      { name: 'H', points: 57, wishes: ['J', 'I', 'K', 'L', ] },
      { name: 'G', points: 72, wishes: ['L', ] },
      { name: 'D', points: 96, wishes: ['K', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 369', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 27, wishes: ['O', 'J', 'P', 'Q', 'M', 'I', 'N', 'K', ] },
      { name: 'F', points: 32, wishes: ['I', 'O', 'N', 'J', 'M', 'L', 'Q', ] },
      { name: 'D', points: 39, wishes: ['K', 'I', 'O', 'M', 'J', 'P', 'Q', 'N', 'L', ] },
      { name: 'C', points: 44, wishes: ['M', 'L', 'J', 'P', 'O', 'Q', 'K', ] },
      { name: 'E', points: 87, wishes: ['M', 'P', 'N', 'K', 'I', ] },
      { name: 'A', points: 95, wishes: ['O', 'K', 'Q', 'P', 'N', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
  });

  it('should solve this set 370', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 13, wishes: ['I', ] },
      { name: 'B', points: 28, wishes: ['I', ] },
      { name: 'A', points: 68, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 371', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 16, wishes: ['K', ] },
      { name: 'A', points: 58, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 372', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 8, wishes: ['I', ] },
      { name: 'H', points: 10, wishes: ['I', ] },
      { name: 'C', points: 12, wishes: ['I', ] },
      { name: 'A', points: 15, wishes: ['I', ] },
      { name: 'D', points: 33, wishes: ['I', ] },
      { name: 'B', points: 63, wishes: ['I', ] },
      { name: 'F', points: 67, wishes: ['I', ] },
      { name: 'E', points: 68, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 373', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 82, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 374', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 23, wishes: ['J', 'P', 'L', 'I', 'N', ] },
      { name: 'C', points: 28, wishes: ['I', 'M', 'L', ] },
      { name: 'B', points: 45, wishes: ['K', 'L', 'N', 'I', 'J', ] },
      { name: 'D', points: 55, wishes: ['M', 'L', ] },
      { name: 'E', points: 70, wishes: ['O', 'J', 'M', 'P', 'L', 'N', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
  });

  it('should solve this set 375', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 12, wishes: ['O', 'P', 'N', 'M', 'L', 'K', 'I', ] },
      { name: 'F', points: 20, wishes: ['J', 'K', 'O', ] },
      { name: 'C', points: 32, wishes: ['L', 'J', 'N', ] },
      { name: 'E', points: 36, wishes: ['P', 'K', ] },
      { name: 'A', points: 43, wishes: ['O', 'L', 'N', ] },
      { name: 'B', points: 56, wishes: ['J', 'P', 'I', 'K', ] },
      { name: 'D', points: 83, wishes: ['K', 'I', 'L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
  });

  it('should solve this set 376', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['J', ] },
      { name: 'C', points: 7, wishes: ['K', 'L', ] },
      { name: 'E', points: 70, wishes: ['I', 'L', ] },
      { name: 'A', points: 85, wishes: ['J', 'L', 'I', ] },
      { name: 'D', points: 97, wishes: ['J', 'K', 'I', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 377', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 33, wishes: ['L', 'J', ] },
      { name: 'H', points: 47, wishes: ['N', 'I', 'M', 'J', 'L', ] },
      { name: 'A', points: 51, wishes: ['I', 'L', 'K', 'J', 'N', 'M', ] },
      { name: 'G', points: 54, wishes: ['M', 'K', 'J', ] },
      { name: 'F', points: 66, wishes: ['M', ] },
      { name: 'E', points: 68, wishes: ['M', ] },
      { name: 'C', points: 69, wishes: ['J', 'K', 'I', ] },
      { name: 'D', points: 82, wishes: ['N', 'L', 'M', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 378', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 3, wishes: ['J', 'M', 'N', 'K', 'O', 'I', 'P', ] },
      { name: 'G', points: 15, wishes: ['L', 'I', 'P', 'M', ] },
      { name: 'C', points: 18, wishes: ['L', 'P', 'M', 'K', ] },
      { name: 'H', points: 26, wishes: ['K', 'I', 'O', 'Q', 'L', 'N', 'P', 'M', 'J', ] },
      { name: 'E', points: 40, wishes: ['J', 'M', 'P', 'K', 'L', 'N', 'O', 'I', ] },
      { name: 'B', points: 65, wishes: ['J', 'O', 'L', 'Q', 'I', 'K', 'N', ] },
      { name: 'A', points: 79, wishes: ['I', 'J', 'K', 'P', 'L', ] },
      { name: 'F', points: 92, wishes: ['Q', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('Q');
  });

  it('should solve this set 379', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 0, wishes: ['K', ] },
      { name: 'B', points: 24, wishes: ['I', 'K', 'J', ] },
      { name: 'D', points: 49, wishes: ['K', ] },
      { name: 'A', points: 97, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 380', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 2, wishes: ['I', ] },
      { name: 'D', points: 14, wishes: ['I', ] },
      { name: 'C', points: 34, wishes: ['I', ] },
      { name: 'G', points: 41, wishes: ['I', ] },
      { name: 'B', points: 52, wishes: ['I', ] },
      { name: 'F', points: 54, wishes: ['I', ] },
      { name: 'E', points: 79, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 381', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 17, wishes: ['I', 'N', 'M', 'J', 'K', ] },
      { name: 'D', points: 18, wishes: ['L', 'I', ] },
      { name: 'C', points: 48, wishes: ['I', 'M', 'J', 'L', ] },
      { name: 'A', points: 74, wishes: ['J', 'L', 'K', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 382', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 8, wishes: ['I', ] },
      { name: 'H', points: 9, wishes: ['M', 'K', 'O', ] },
      { name: 'D', points: 35, wishes: ['J', 'M', 'P', 'I', 'O', 'K', 'N', 'L', ] },
      { name: 'A', points: 42, wishes: ['I', 'M', 'O', 'P', 'N', 'K', ] },
      { name: 'E', points: 50, wishes: ['M', 'L', ] },
      { name: 'C', points: 77, wishes: ['J', ] },
      { name: 'I', points: 85, wishes: ['I', 'M', 'K', 'O', 'L', ] },
      { name: 'F', points: 91, wishes: ['M', 'L', 'N', 'K', 'J', 'I', ] },
      { name: 'B', points: 94, wishes: ['O', 'K', 'P', 'L', 'N', 'J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
  });

  it('should solve this set 383', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 3, wishes: ['O', 'L', 'K', 'I', 'N', ] },
      { name: 'C', points: 4, wishes: ['O', 'K', 'N', ] },
      { name: 'D', points: 18, wishes: ['O', 'J', 'N', 'M', 'K', 'I', 'L', ] },
      { name: 'G', points: 21, wishes: ['I', 'J', 'O', 'M', 'N', 'L', ] },
      { name: 'B', points: 31, wishes: ['M', 'L', 'O', 'J', ] },
      { name: 'A', points: 41, wishes: ['O', 'N', 'K', ] },
      { name: 'F', points: 87, wishes: ['K', 'L', 'J', 'O', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
  });

  it('should solve this set 384', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 5, wishes: ['J', 'I', 'O', 'M', 'K', ] },
      { name: 'B', points: 10, wishes: ['I', 'L', 'O', 'M', ] },
      { name: 'D', points: 24, wishes: ['O', 'N', ] },
      { name: 'A', points: 42, wishes: ['N', 'K', 'L', 'J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
  });

  it('should solve this set 385', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['I', ] },
      { name: 'C', points: 46, wishes: ['I', ] },
      { name: 'A', points: 71, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 386', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 3, wishes: ['I', ] },
      { name: 'A', points: 17, wishes: ['J', 'I', ] },
      { name: 'D', points: 21, wishes: ['J', ] },
      { name: 'B', points: 53, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 387', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 11, wishes: ['I', 'J', ] },
      { name: 'A', points: 14, wishes: ['L', 'J', 'I', ] },
      { name: 'I', points: 16, wishes: ['L', 'J', 'I', ] },
      { name: 'G', points: 23, wishes: ['J', 'I', 'L', 'K', ] },
      { name: 'B', points: 31, wishes: ['L', ] },
      { name: 'D', points: 56, wishes: ['K', 'L', 'J', ] },
      { name: 'E', points: 66, wishes: ['K', 'J', 'L', ] },
      { name: 'F', points: 71, wishes: ['L', 'K', ] },
      { name: 'C', points: 83, wishes: ['L', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
  });

  it('should solve this set 388', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 3, wishes: ['K', 'I', ] },
      { name: 'D', points: 6, wishes: ['K', 'J', 'I', ] },
      { name: 'A', points: 49, wishes: ['I', ] },
      { name: 'C', points: 70, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 389', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 26, wishes: ['J', 'M', ] },
      { name: 'A', points: 45, wishes: ['K', 'M', 'J', 'N', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 390', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 43, wishes: ['L', 'Q', 'I', 'J', 'O', 'K', ] },
      { name: 'A', points: 54, wishes: ['M', 'P', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 391', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 19, wishes: ['L', 'K', 'J', ] },
      { name: 'H', points: 33, wishes: ['K', 'J', 'L', ] },
      { name: 'D', points: 45, wishes: ['K', 'I', 'J', 'L', ] },
      { name: 'A', points: 53, wishes: ['J', ] },
      { name: 'G', points: 61, wishes: ['L', 'J', 'I', 'K', ] },
      { name: 'E', points: 62, wishes: ['I', ] },
      { name: 'F', points: 68, wishes: ['I', ] },
      { name: 'B', points: 84, wishes: ['K', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 392', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 2, wishes: ['I', 'K', 'O', 'N', ] },
      { name: 'C', points: 23, wishes: ['M', 'O', 'L', 'K', 'N', 'J', ] },
      { name: 'D', points: 43, wishes: ['M', 'O', 'N', 'K', ] },
      { name: 'H', points: 82, wishes: ['J', 'M', 'L', ] },
      { name: 'G', points: 86, wishes: ['K', 'O', 'N', 'M', 'J', 'I', 'L', ] },
      { name: 'A', points: 88, wishes: ['I', ] },
      { name: 'B', points: 93, wishes: ['J', 'O', 'I', 'M', 'K', 'N', ] },
      { name: 'E', points: 94, wishes: ['J', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
  });

  it('should solve this set 393', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 21, wishes: ['L', 'M', 'O', 'P', 'K', 'I', 'Q', 'J', 'N', ] },
      { name: 'F', points: 30, wishes: ['K', 'I', 'N', 'L', 'M', ] },
      { name: 'E', points: 62, wishes: ['L', 'P', 'Q', 'K', 'O', 'N', 'I', 'J', 'M', ] },
      { name: 'C', points: 65, wishes: ['N', ] },
      { name: 'D', points: 72, wishes: ['P', ] },
      { name: 'B', points: 87, wishes: ['L', 'P', 'N', 'O', ] },
      { name: 'A', points: 94, wishes: ['J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 394', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 6, wishes: ['I', 'K', ] },
      { name: 'B', points: 16, wishes: ['I', 'J', 'K', 'L', ] },
      { name: 'D', points: 46, wishes: ['K', 'L', 'I', ] },
      { name: 'C', points: 47, wishes: ['I', 'J', ] },
      { name: 'E', points: 50, wishes: ['K', 'L', ] },
      { name: 'G', points: 51, wishes: ['I', 'J', ] },
      { name: 'F', points: 67, wishes: ['K', ] },
      { name: 'A', points: 84, wishes: ['L', 'J', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 395', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 15, wishes: ['I', ] },
      { name: 'C', points: 32, wishes: ['I', ] },
      { name: 'D', points: 46, wishes: ['I', ] },
      { name: 'E', points: 53, wishes: ['I', ] },
      { name: 'B', points: 61, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 396', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 16, wishes: ['J', 'O', ] },
      { name: 'A', points: 17, wishes: ['K', 'M', 'I', 'N', 'O', 'L', ] },
      { name: 'C', points: 39, wishes: ['K', 'M', 'L', 'I', 'J', 'O', 'N', ] },
      { name: 'D', points: 61, wishes: ['J', 'K', 'O', 'N', 'L', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
  });

  it('should solve this set 397', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 37, wishes: ['I', ] },
      { name: 'D', points: 48, wishes: ['I', ] },
      { name: 'B', points: 55, wishes: ['I', ] },
      { name: 'A', points: 71, wishes: ['I', ] },
      { name: 'C', points: 86, wishes: ['I', ] },
      { name: 'F', points: 99, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
  });

  it('should solve this set 398', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['O', 'J', ] },
      { name: 'A', points: 75, wishes: ['L', 'N', 'K', 'O', 'M', ] },
      { name: 'B', points: 78, wishes: ['K', 'J', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 399', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 35, wishes: ['L', ] },
      { name: 'G', points: 36, wishes: ['K', ] },
      { name: 'D', points: 39, wishes: ['I', 'K', 'O', 'N', 'M', 'L', 'J', 'P', ] },
      { name: 'F', points: 42, wishes: ['I', 'L', 'P', 'K', 'M', 'O', 'J', ] },
      { name: 'A', points: 65, wishes: ['I', 'O', 'J', 'N', 'L', ] },
      { name: 'C', points: 89, wishes: ['J', 'I', 'N', 'O', 'L', 'M', ] },
      { name: 'B', points: 99, wishes: ['J', 'L', 'M', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 400', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 1, wishes: ['O', 'M', 'Q', 'L', 'I', 'K', ] },
      { name: 'C', points: 7, wishes: ['N', 'M', ] },
      { name: 'F', points: 44, wishes: ['L', 'Q', 'M', 'O', ] },
      { name: 'E', points: 56, wishes: ['K', 'O', 'I', 'M', 'N', 'J', ] },
      { name: 'A', points: 73, wishes: ['J', 'I', 'N', ] },
      { name: 'B', points: 87, wishes: ['O', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 401', () => {
    const pilots: Pilot[] = [
      { name: 'I', points: 18, wishes: ['J', 'K', ] },
      { name: 'F', points: 25, wishes: ['K', 'L', 'I', 'N', ] },
      { name: 'B', points: 36, wishes: ['J', ] },
      { name: 'C', points: 47, wishes: ['M', 'I', ] },
      { name: 'D', points: 52, wishes: ['K', 'M', 'I', 'L', 'P', 'O', ] },
      { name: 'G', points: 54, wishes: ['P', 'L', 'M', ] },
      { name: 'E', points: 63, wishes: ['J', 'N', 'K', 'O', 'I', 'P', ] },
      { name: 'H', points: 81, wishes: ['L', 'O', 'N', 'K', 'M', ] },
      { name: 'A', points: 96, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('O');
  });

  it('should solve this set 402', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 14, wishes: ['M', 'I', 'L', 'K', 'O', 'J', 'N', ] },
      { name: 'A', points: 47, wishes: ['J', 'I', ] },
      { name: 'D', points: 49, wishes: ['N', 'K', 'L', 'J', 'O', 'I', 'M', 'P', ] },
      { name: 'B', points: 77, wishes: ['J', 'I', 'P', 'O', 'L', 'N', 'K', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 403', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 7, wishes: ['I', ] },
      { name: 'C', points: 11, wishes: ['K', ] },
      { name: 'D', points: 68, wishes: ['I', 'K', ] },
      { name: 'B', points: 89, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 404', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 87, wishes: ['J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 405', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 3, wishes: ['O', 'J', 'N', 'M', ] },
      { name: 'E', points: 27, wishes: ['M', 'P', 'I', 'L', 'Q', 'O', 'N', 'J', 'K', ] },
      { name: 'A', points: 40, wishes: ['I', 'N', ] },
      { name: 'F', points: 51, wishes: ['M', ] },
      { name: 'B', points: 79, wishes: ['N', 'P', 'J', 'K', 'L', 'I', 'O', ] },
      { name: 'G', points: 86, wishes: ['J', 'M', 'P', 'K', 'O', 'L', 'I', 'Q', ] },
      { name: 'H', points: 92, wishes: ['Q', 'L', 'K', 'J', 'N', 'I', 'M', 'P', 'O', ] },
      { name: 'C', points: 99, wishes: ['O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
  });

  it('should solve this set 406', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 5, wishes: ['I', ] },
      { name: 'D', points: 19, wishes: ['I', ] },
      { name: 'A', points: 27, wishes: ['I', ] },
      { name: 'B', points: 90, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 407', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 24, wishes: ['I', 'J', ] },
      { name: 'E', points: 35, wishes: ['I', ] },
      { name: 'D', points: 41, wishes: ['I', ] },
      { name: 'A', points: 46, wishes: ['I', ] },
      { name: 'C', points: 92, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
  });

  it('should solve this set 408', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 5, wishes: ['M', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 409', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 10, wishes: ['I', ] },
      { name: 'D', points: 21, wishes: ['I', ] },
      { name: 'A', points: 38, wishes: ['I', ] },
      { name: 'B', points: 63, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 410', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 6, wishes: ['L', 'J', ] },
      { name: 'C', points: 42, wishes: ['K', 'I', 'L', 'N', ] },
      { name: 'A', points: 90, wishes: ['O', 'J', 'K', 'I', 'N', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
  });

  it('should solve this set 411', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 9, wishes: ['I', ] },
      { name: 'D', points: 35, wishes: ['L', ] },
      { name: 'F', points: 42, wishes: ['I', 'J', 'L', 'K', ] },
      { name: 'A', points: 48, wishes: ['I', 'J', 'L', ] },
      { name: 'E', points: 78, wishes: ['L', ] },
      { name: 'C', points: 93, wishes: ['L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 412', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['K', 'I', ] },
      { name: 'F', points: 17, wishes: ['M', 'O', 'L', 'N', 'K', ] },
      { name: 'A', points: 38, wishes: ['L', 'N', 'M', 'K', ] },
      { name: 'E', points: 46, wishes: ['M', 'I', 'N', 'L', ] },
      { name: 'G', points: 63, wishes: ['J', 'K', 'M', 'O', ] },
      { name: 'D', points: 77, wishes: ['J', 'N', 'I', 'L', 'K', ] },
      { name: 'C', points: 97, wishes: ['M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
  });

  it('should solve this set 413', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 11, wishes: ['I', 'J', 'K', 'N', 'O', ] },
      { name: 'E', points: 19, wishes: ['I', ] },
      { name: 'D', points: 27, wishes: ['O', ] },
      { name: 'H', points: 28, wishes: ['K', 'I', 'N', ] },
      { name: 'A', points: 45, wishes: ['M', 'L', 'N', 'K', 'J', ] },
      { name: 'C', points: 59, wishes: ['J', 'I', 'K', 'N', 'M', ] },
      { name: 'G', points: 92, wishes: ['L', 'K', 'O', 'N', ] },
      { name: 'F', points: 98, wishes: ['L', 'N', 'M', 'I', 'O', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
  });

  it('should solve this set 414', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 25, wishes: ['N', ] },
      { name: 'C', points: 61, wishes: ['N', 'O', 'K', 'P', ] },
      { name: 'A', points: 82, wishes: ['P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
  });

  it('should solve this set 415', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 12, wishes: ['K', 'J', 'L', 'M', 'I', ] },
      { name: 'H', points: 14, wishes: ['L', 'M', 'I', 'J', ] },
      { name: 'I', points: 21, wishes: ['K', 'L', ] },
      { name: 'C', points: 26, wishes: ['M', 'L', 'J', 'K', ] },
      { name: 'B', points: 36, wishes: ['J', ] },
      { name: 'A', points: 41, wishes: ['I', ] },
      { name: 'E', points: 66, wishes: ['M', 'I', 'L', 'K', 'J', ] },
      { name: 'D', points: 94, wishes: ['L', 'M', ] },
      { name: 'F', points: 98, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 416', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 11, wishes: ['L', 'M', 'J', 'K', 'I', ] },
      { name: 'A', points: 81, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 417', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 18, wishes: ['K', 'L', ] },
      { name: 'B', points: 33, wishes: ['K', 'N', 'J', 'L', ] },
      { name: 'A', points: 48, wishes: ['P', 'K', 'I', 'J', 'O', 'L', 'M', 'N', ] },
      { name: 'C', points: 64, wishes: ['L', 'K', 'I', 'P', 'M', 'N', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 418', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 6, wishes: ['L', 'O', 'K', 'J', 'I', ] },
      { name: 'E', points: 8, wishes: ['L', 'N', 'J', 'I', 'O', 'M', ] },
      { name: 'B', points: 14, wishes: ['N', 'I', 'O', 'M', ] },
      { name: 'A', points: 31, wishes: ['K', 'J', 'O', 'N', 'M', 'L', 'I', ] },
      { name: 'C', points: 47, wishes: ['J', 'N', 'K', 'L', ] },
      { name: 'F', points: 81, wishes: ['J', 'L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
  });

  it('should solve this set 419', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['P', 'K', 'Q', 'I', ] },
      { name: 'D', points: 33, wishes: ['O', 'L', 'N', 'K', 'I', 'J', 'Q', ] },
      { name: 'C', points: 54, wishes: ['O', ] },
      { name: 'A', points: 95, wishes: ['J', 'K', 'O', 'M', 'L', 'N', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 420', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 11, wishes: ['J', ] },
      { name: 'F', points: 26, wishes: ['I', 'J', ] },
      { name: 'D', points: 27, wishes: ['I', ] },
      { name: 'B', points: 47, wishes: ['J', ] },
      { name: 'G', points: 54, wishes: ['I', ] },
      { name: 'H', points: 79, wishes: ['J', 'I', ] },
      { name: 'A', points: 86, wishes: ['J', 'I', ] },
      { name: 'C', points: 88, wishes: ['J', 'I', ] },
      { name: 'I', points: 92, wishes: ['J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
  });

  it('should solve this set 421', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 55, wishes: ['L', 'J', 'I', ] },
      { name: 'A', points: 64, wishes: ['J', 'K', ] },
      { name: 'C', points: 95, wishes: ['I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
  });

  it('should solve this set 422', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 50, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 423', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 13, wishes: ['J', 'K', 'I', ] },
      { name: 'B', points: 54, wishes: ['J', 'L', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 424', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 25, wishes: ['N', 'J', 'M', 'K', ] },
      { name: 'A', points: 59, wishes: ['L', 'I', 'J', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 425', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 5, wishes: ['I', ] },
      { name: 'C', points: 10, wishes: ['I', ] },
      { name: 'A', points: 64, wishes: ['I', ] },
      { name: 'B', points: 65, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
  });

  it('should solve this set 426', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 49, wishes: ['I', ] },
      { name: 'C', points: 55, wishes: ['I', ] },
      { name: 'F', points: 63, wishes: ['I', ] },
      { name: 'E', points: 68, wishes: ['I', ] },
      { name: 'B', points: 79, wishes: ['I', ] },
      { name: 'A', points: 85, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 427', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 43, wishes: ['I', ] },
      { name: 'A', points: 51, wishes: ['I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 428', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 12, wishes: ['I', ] },
      { name: 'A', points: 18, wishes: ['I', ] },
      { name: 'B', points: 20, wishes: ['I', ] },
      { name: 'I', points: 43, wishes: ['I', ] },
      { name: 'E', points: 48, wishes: ['I', ] },
      { name: 'H', points: 57, wishes: ['I', ] },
      { name: 'G', points: 70, wishes: ['I', ] },
      { name: 'C', points: 74, wishes: ['I', ] },
      { name: 'D', points: 88, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 429', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 83, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 430', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 8, wishes: ['I', ] },
      { name: 'B', points: 9, wishes: ['I', ] },
      { name: 'C', points: 16, wishes: ['I', ] },
      { name: 'A', points: 58, wishes: ['I', ] },
      { name: 'D', points: 64, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 431', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 18, wishes: ['L', ] },
      { name: 'G', points: 27, wishes: ['K', 'I', 'J', 'M', 'N', ] },
      { name: 'F', points: 44, wishes: ['I', 'K', ] },
      { name: 'D', points: 51, wishes: ['N', 'M', 'O', ] },
      { name: 'B', points: 58, wishes: ['I', 'M', 'J', 'O', 'L', 'K', 'N', ] },
      { name: 'H', points: 60, wishes: ['L', 'I', 'N', 'O', 'M', 'J', ] },
      { name: 'C', points: 61, wishes: ['N', 'M', 'J', 'L', ] },
      { name: 'E', points: 68, wishes: ['O', 'J', 'M', ] },
      { name: 'I', points: 78, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
  });

  it('should solve this set 432', () => {
    const pilots: Pilot[] = [
      { name: 'H', points: 1, wishes: ['I', 'J', 'L', ] },
      { name: 'C', points: 5, wishes: ['J', 'K', 'I', 'L', ] },
      { name: 'D', points: 22, wishes: ['J', 'I', 'L', ] },
      { name: 'G', points: 26, wishes: ['I', 'K', ] },
      { name: 'E', points: 33, wishes: ['L', 'I', 'K', ] },
      { name: 'A', points: 60, wishes: ['L', 'K', 'I', ] },
      { name: 'F', points: 84, wishes: ['L', ] },
      { name: 'B', points: 93, wishes: ['J', 'I', 'L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
  });

  it('should solve this set 433', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 12, wishes: ['O', 'I', 'K', 'L', 'J', 'M', 'N', 'P', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
  });

  it('should solve this set 434', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 8, wishes: ['I', ] },
      { name: 'E', points: 15, wishes: ['I', 'J', 'K', ] },
      { name: 'A', points: 38, wishes: ['K', 'I', 'J', ] },
      { name: 'D', points: 44, wishes: ['K', 'J', 'I', ] },
      { name: 'B', points: 82, wishes: ['J', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 435', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 78, wishes: ['I', 'L', 'K', 'M', ] },
      { name: 'A', points: 95, wishes: ['M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 436', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['I', ] },
      { name: 'D', points: 21, wishes: ['I', ] },
      { name: 'G', points: 35, wishes: ['I', ] },
      { name: 'E', points: 77, wishes: ['I', ] },
      { name: 'B', points: 81, wishes: ['I', ] },
      { name: 'A', points: 92, wishes: ['I', ] },
      { name: 'F', points: 94, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
  });

  it('should solve this set 437', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 25, wishes: ['Q', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('Q');
  });

  it('should solve this set 438', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 4, wishes: ['J', ] },
      { name: 'I', points: 10, wishes: ['I', 'K', 'J', ] },
      { name: 'H', points: 24, wishes: ['L', ] },
      { name: 'F', points: 32, wishes: ['K', ] },
      { name: 'E', points: 46, wishes: ['K', ] },
      { name: 'C', points: 53, wishes: ['K', ] },
      { name: 'B', points: 60, wishes: ['J', 'L', 'K', 'I', ] },
      { name: 'G', points: 90, wishes: ['J', 'I', 'L', ] },
      { name: 'A', points: 91, wishes: ['J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 439', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['I', ] },
      { name: 'A', points: 55, wishes: ['K', 'M', 'I', 'L', 'N', 'J', ] },
      { name: 'E', points: 56, wishes: ['M', 'N', 'I', 'L', 'K', 'O', 'J', ] },
      { name: 'D', points: 82, wishes: ['K', 'O', 'I', 'L', 'J', 'N', ] },
      { name: 'B', points: 93, wishes: ['L', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 440', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 15, wishes: ['K', 'L', 'M', 'O', ] },
      { name: 'A', points: 23, wishes: ['L', 'N', 'M', ] },
      { name: 'B', points: 42, wishes: ['J', 'L', 'I', 'K', ] },
      { name: 'D', points: 50, wishes: ['L', 'I', 'K', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
  });

  it('should solve this set 441', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 4, wishes: ['I', ] },
      { name: 'C', points: 20, wishes: ['I', ] },
      { name: 'F', points: 36, wishes: ['I', ] },
      { name: 'E', points: 56, wishes: ['I', ] },
      { name: 'B', points: 57, wishes: ['I', ] },
      { name: 'A', points: 72, wishes: ['I', ] },
      { name: 'G', points: 98, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
  });

  it('should solve this set 442', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 13, wishes: ['J', ] },
      { name: 'B', points: 15, wishes: ['L', 'I', 'J', ] },
      { name: 'F', points: 74, wishes: ['I', 'K', 'J', 'L', ] },
      { name: 'E', points: 86, wishes: ['I', 'K', ] },
      { name: 'C', points: 95, wishes: ['K', 'I', ] },
      { name: 'A', points: 98, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 443', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 3, wishes: ['I', ] },
      { name: 'E', points: 26, wishes: ['Q', 'P', 'O', 'M', 'K', 'I', 'N', ] },
      { name: 'B', points: 50, wishes: ['K', 'I', 'L', 'Q', 'O', 'P', ] },
      { name: 'C', points: 65, wishes: ['M', 'O', 'Q', 'J', 'L', 'K', ] },
      { name: 'A', points: 68, wishes: ['P', 'O', 'M', 'N', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
  });

  it('should solve this set 444', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 34, wishes: ['J', 'I', 'K', 'M', 'L', ] },
      { name: 'F', points: 52, wishes: ['I', 'J', 'L', 'M', ] },
      { name: 'E', points: 60, wishes: ['K', 'I', ] },
      { name: 'C', points: 68, wishes: ['J', 'K', ] },
      { name: 'G', points: 77, wishes: ['K', 'J', ] },
      { name: 'B', points: 79, wishes: ['K', 'J', 'L', 'M', ] },
      { name: 'H', points: 86, wishes: ['M', 'K', ] },
      { name: 'D', points: 88, wishes: ['M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
  });

  it('should solve this set 445', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 9, wishes: ['J', 'M', 'L', 'N', ] },
      { name: 'G', points: 13, wishes: ['J', 'K', 'N', 'I', 'M', 'L', ] },
      { name: 'C', points: 21, wishes: ['M', 'K', 'J', 'N', 'L', 'I', ] },
      { name: 'D', points: 42, wishes: ['L', 'J', 'I', 'M', 'K', ] },
      { name: 'H', points: 47, wishes: ['M', 'L', 'K', 'J', 'I', 'N', ] },
      { name: 'A', points: 67, wishes: ['L', 'M', 'I', 'K', ] },
      { name: 'F', points: 75, wishes: ['L', 'J', 'K', ] },
      { name: 'E', points: 99, wishes: ['M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 446', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 8, wishes: ['I', 'M', ] },
      { name: 'A', points: 24, wishes: ['M', ] },
      { name: 'C', points: 40, wishes: ['K', 'I', ] },
      { name: 'F', points: 50, wishes: ['M', 'L', ] },
      { name: 'E', points: 64, wishes: ['L', 'J', 'I', 'K', 'M', ] },
      { name: 'H', points: 72, wishes: ['K', 'I', 'L', ] },
      { name: 'B', points: 79, wishes: ['K', 'J', 'I', 'M', ] },
      { name: 'D', points: 99, wishes: ['K', 'L', 'M', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
  });

  it('should solve this set 447', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 6, wishes: ['L', ] },
      { name: 'A', points: 14, wishes: ['J', 'K', 'O', 'M', ] },
      { name: 'G', points: 15, wishes: ['J', 'I', 'O', 'L', ] },
      { name: 'E', points: 18, wishes: ['N', ] },
      { name: 'H', points: 25, wishes: ['N', 'I', 'O', 'L', 'K', 'J', 'P', 'M', ] },
      { name: 'I', points: 59, wishes: ['J', 'M', 'I', 'P', 'N', 'O', 'L', 'K', ] },
      { name: 'C', points: 79, wishes: ['O', 'J', 'N', 'L', ] },
      { name: 'B', points: 85, wishes: ['M', ] },
      { name: 'F', points: 89, wishes: ['N', 'L', 'K', 'I', 'O', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
  });

  it('should solve this set 448', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 7, wishes: ['I', 'J', ] },
      { name: 'B', points: 38, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
  });

  it('should solve this set 449', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 27, wishes: ['L', 'N', ] },
      { name: 'B', points: 31, wishes: ['O', 'L', 'M', 'K', 'I', 'Q', 'J', 'N', ] },
      { name: 'A', points: 39, wishes: ['P', 'O', 'M', 'Q', 'J', 'L', ] },
      { name: 'C', points: 43, wishes: ['Q', 'K', 'O', 'L', 'N', 'P', 'J', ] },
      { name: 'D', points: 47, wishes: ['Q', 'K', 'J', 'O', 'P', 'I', ] },
      { name: 'H', points: 68, wishes: ['J', 'K', 'M', 'N', 'O', 'I', 'Q', ] },
      { name: 'E', points: 73, wishes: ['P', ] },
      { name: 'F', points: 91, wishes: ['P', 'O', 'Q', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('Q');
  });

  it('should solve this set 450', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 4, wishes: ['K', ] },
      { name: 'C', points: 12, wishes: ['K', 'I', ] },
      { name: 'D', points: 13, wishes: ['I', 'K', 'J', ] },
      { name: 'G', points: 24, wishes: ['J', ] },
      { name: 'A', points: 48, wishes: ['K', ] },
      { name: 'F', points: 51, wishes: ['K', 'I', ] },
      { name: 'B', points: 63, wishes: ['J', ] },
      { name: 'H', points: 65, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 451', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 6, wishes: ['I', ] },
      { name: 'B', points: 15, wishes: ['I', ] },
      { name: 'A', points: 60, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 452', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 8, wishes: ['L', 'I', ] },
      { name: 'A', points: 66, wishes: ['L', 'I', 'K', 'M', ] },
      { name: 'E', points: 71, wishes: ['I', 'K', ] },
      { name: 'B', points: 88, wishes: ['M', 'L', 'K', 'J', ] },
      { name: 'D', points: 98, wishes: ['L', 'I', 'M', 'J', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });

  it('should solve this set 453', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 8, wishes: ['J', 'K', ] },
      { name: 'E', points: 45, wishes: ['J', ] },
      { name: 'D', points: 52, wishes: ['I', 'J', ] },
      { name: 'F', points: 54, wishes: ['J', 'I', 'K', ] },
      { name: 'B', points: 71, wishes: ['K', 'J', 'I', ] },
      { name: 'A', points: 76, wishes: ['K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
  });

  it('should solve this set 454', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 33, wishes: ['P', 'I', 'J', 'M', 'N', 'O', ] },
      { name: 'D', points: 53, wishes: ['P', 'L', 'O', ] },
      { name: 'C', points: 56, wishes: ['N', 'J', 'O', 'L', 'I', ] },
      { name: 'F', points: 65, wishes: ['P', ] },
      { name: 'E', points: 89, wishes: ['P', 'L', ] },
      { name: 'A', points: 94, wishes: ['J', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 455', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 14, wishes: ['I', 'J', 'K', ] },
      { name: 'B', points: 16, wishes: ['J', ] },
      { name: 'E', points: 26, wishes: ['J', ] },
      { name: 'C', points: 56, wishes: ['K', 'I', 'J', ] },
      { name: 'A', points: 97, wishes: ['K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 456', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 65, wishes: ['K', 'J', 'I', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 457', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 17, wishes: ['J', ] },
      { name: 'E', points: 33, wishes: ['I', ] },
      { name: 'C', points: 43, wishes: ['J', ] },
      { name: 'D', points: 53, wishes: ['J', ] },
      { name: 'F', points: 63, wishes: ['I', 'J', ] },
      { name: 'G', points: 66, wishes: ['I', ] },
      { name: 'A', points: 82, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 458', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 14, wishes: ['K', 'O', 'N', 'I', 'J', 'M', ] },
      { name: 'B', points: 21, wishes: ['L', 'I', 'K', 'O', 'M', 'N', 'J', ] },
      { name: 'C', points: 85, wishes: ['L', 'N', 'M', 'O', 'I', 'K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
  });

  it('should solve this set 459', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 57, wishes: ['I', ] },
      { name: 'C', points: 68, wishes: ['I', 'M', 'J', ] },
      { name: 'A', points: 95, wishes: ['M', 'L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 460', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 26, wishes: ['K', 'J', 'I', 'M', ] },
      { name: 'E', points: 43, wishes: ['J', 'L', ] },
      { name: 'A', points: 61, wishes: ['N', 'K', 'J', 'I', ] },
      { name: 'C', points: 71, wishes: ['M', 'J', 'L', 'N', 'K', 'I', ] },
      { name: 'B', points: 76, wishes: ['N', 'L', 'K', 'J', 'I', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 461', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 14, wishes: ['M', 'I', 'J', 'K', ] },
      { name: 'A', points: 70, wishes: ['M', 'I', ] },
      { name: 'D', points: 76, wishes: ['L', ] },
      { name: 'E', points: 88, wishes: ['M', 'J', 'L', 'I', ] },
      { name: 'B', points: 99, wishes: ['I', 'L', 'J', 'M', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 462', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 16, wishes: ['M', 'Q', 'L', ] },
      { name: 'B', points: 75, wishes: ['N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
  });

  it('should solve this set 463', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['L', ] },
      { name: 'B', points: 44, wishes: ['K', 'I', ] },
      { name: 'C', points: 88, wishes: ['J', ] },
      { name: 'D', points: 89, wishes: ['I', 'L', 'J', 'K', ] },
      { name: 'E', points: 99, wishes: ['L', 'K', 'I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
  });

  it('should solve this set 464', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 20, wishes: ['M', 'J', 'L', 'P', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 465', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 24, wishes: ['I', ] },
      { name: 'B', points: 26, wishes: ['I', ] },
      { name: 'A', points: 86, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 466', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 7, wishes: ['I', 'J', ] },
      { name: 'D', points: 31, wishes: ['I', ] },
      { name: 'E', points: 42, wishes: ['I', ] },
      { name: 'C', points: 64, wishes: ['I', 'J', ] },
      { name: 'A', points: 76, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
  });

  it('should solve this set 467', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 14, wishes: ['I', ] },
      { name: 'C', points: 37, wishes: ['I', ] },
      { name: 'A', points: 71, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 468', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 2, wishes: ['L', ] },
      { name: 'A', points: 83, wishes: ['M', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
  });

  it('should solve this set 469', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 4, wishes: ['N', ] },
      { name: 'E', points: 9, wishes: ['L', 'N', 'M', 'O', 'I', 'K', 'J', ] },
      { name: 'C', points: 13, wishes: ['M', 'N', 'I', 'L', ] },
      { name: 'H', points: 15, wishes: ['M', 'J', 'N', 'I', 'L', ] },
      { name: 'F', points: 28, wishes: ['N', 'J', 'L', ] },
      { name: 'B', points: 37, wishes: ['L', 'M', 'J', 'K', 'I', 'O', ] },
      { name: 'D', points: 66, wishes: ['N', 'O', ] },
      { name: 'G', points: 73, wishes: ['O', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
  });

  it('should solve this set 470', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 1, wishes: ['K', 'J', 'N', 'I', 'O', 'L', ] },
      { name: 'D', points: 13, wishes: ['O', 'M', 'L', ] },
      { name: 'E', points: 30, wishes: ['M', 'I', 'O', 'J', 'L', 'K', ] },
      { name: 'F', points: 46, wishes: ['N', 'M', 'K', 'L', ] },
      { name: 'A', points: 52, wishes: ['I', 'K', 'J', 'L', 'O', 'M', ] },
      { name: 'C', points: 90, wishes: ['L', 'I', 'K', 'N', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
  });

  it('should solve this set 471', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 4, wishes: ['I', 'K', ] },
      { name: 'A', points: 53, wishes: ['K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 472', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 8, wishes: ['I', 'J', ] },
      { name: 'F', points: 10, wishes: ['I', ] },
      { name: 'A', points: 17, wishes: ['I', 'J', ] },
      { name: 'H', points: 19, wishes: ['I', 'J', ] },
      { name: 'G', points: 46, wishes: ['I', ] },
      { name: 'C', points: 59, wishes: ['I', ] },
      { name: 'D', points: 73, wishes: ['J', 'I', ] },
      { name: 'E', points: 83, wishes: ['J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('I');
  });

  it('should solve this set 473', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 27, wishes: ['I', 'J', ] },
      { name: 'C', points: 41, wishes: ['M', 'J', 'L', ] },
      { name: 'E', points: 59, wishes: ['L', 'K', 'M', 'I', 'J', ] },
      { name: 'D', points: 66, wishes: ['J', ] },
      { name: 'A', points: 99, wishes: ['K', 'L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
  });

  it('should solve this set 474', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 7, wishes: ['J', ] },
      { name: 'D', points: 13, wishes: ['L', ] },
      { name: 'E', points: 29, wishes: ['L', 'J', ] },
      { name: 'A', points: 50, wishes: ['L', ] },
      { name: 'G', points: 60, wishes: ['J', 'L', ] },
      { name: 'B', points: 70, wishes: ['L', 'I', ] },
      { name: 'F', points: 95, wishes: ['I', 'K', 'L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
  });

  it('should solve this set 475', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 14, wishes: ['M', 'K', 'L', 'I', 'P', 'Q', 'N', ] },
      { name: 'G', points: 17, wishes: ['J', 'M', 'P', 'O', 'N', ] },
      { name: 'D', points: 60, wishes: ['P', 'Q', 'O', ] },
      { name: 'B', points: 61, wishes: ['J', 'K', 'P', 'N', 'Q', 'O', 'I', ] },
      { name: 'F', points: 62, wishes: ['M', 'J', 'N', ] },
      { name: 'E', points: 66, wishes: ['M', 'L', 'K', ] },
      { name: 'A', points: 69, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
  });

  it('should solve this set 476', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 8, wishes: ['L', 'K', 'I', 'M', ] },
      { name: 'A', points: 35, wishes: ['M', 'J', 'L', 'I', ] },
      { name: 'D', points: 61, wishes: ['J', ] },
      { name: 'B', points: 87, wishes: ['L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 477', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 19, wishes: ['J', 'K', 'L', 'M', 'I', ] },
      { name: 'E', points: 45, wishes: ['I', ] },
      { name: 'B', points: 49, wishes: ['L', 'K', 'M', 'I', 'J', ] },
      { name: 'A', points: 53, wishes: ['I', 'M', 'K', 'L', ] },
      { name: 'F', points: 63, wishes: ['M', 'I', 'J', 'L', 'K', ] },
      { name: 'C', points: 71, wishes: ['J', 'I', 'L', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
  });

  it('should solve this set 478', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 8, wishes: ['I', ] },
      { name: 'D', points: 13, wishes: ['J', 'I', ] },
      { name: 'F', points: 14, wishes: ['J', ] },
      { name: 'E', points: 77, wishes: ['J', ] },
      { name: 'B', points: 91, wishes: ['I', ] },
      { name: 'C', points: 97, wishes: ['I', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 479', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 9, wishes: ['K', 'J', 'I', ] },
      { name: 'A', points: 18, wishes: ['J', 'L', 'I', 'N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
  });

  it('should solve this set 480', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 8, wishes: ['I', ] },
      { name: 'B', points: 27, wishes: ['I', ] },
      { name: 'C', points: 34, wishes: ['I', ] },
      { name: 'A', points: 83, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
  });

  it('should solve this set 481', () => {
    const pilots: Pilot[] = [
      { name: 'G', points: 7, wishes: ['J', ] },
      { name: 'E', points: 29, wishes: ['J', ] },
      { name: 'F', points: 41, wishes: ['K', ] },
      { name: 'C', points: 63, wishes: ['I', 'K', ] },
      { name: 'A', points: 68, wishes: ['J', 'I', 'K', 'L', ] },
      { name: 'D', points: 73, wishes: ['K', 'I', ] },
      { name: 'B', points: 84, wishes: ['K', 'I', 'J', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(7);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 482', () => {
    const pilots: Pilot[] = [
      { name: 'F', points: 0, wishes: ['Q', 'M', 'I', 'O', 'P', 'N', 'J', ] },
      { name: 'C', points: 10, wishes: ['O', 'M', 'Q', 'N', 'J', ] },
      { name: 'B', points: 20, wishes: ['O', 'N', 'K', 'J', 'Q', 'I', 'L', ] },
      { name: 'H', points: 29, wishes: ['M', 'O', 'L', 'K', 'I', ] },
      { name: 'D', points: 44, wishes: ['L', 'M', 'I', 'Q', 'P', 'K', 'J', 'N', 'O', ] },
      { name: 'E', points: 69, wishes: ['M', 'K', 'L', ] },
      { name: 'A', points: 88, wishes: ['K', 'I', 'Q', 'J', 'N', 'M', 'P', ] },
      { name: 'G', points: 97, wishes: ['L', 'J', 'M', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('J');
  });

  it('should solve this set 483', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 1, wishes: ['L', 'M', ] },
      { name: 'C', points: 21, wishes: ['M', ] },
      { name: 'D', points: 32, wishes: ['M', 'I', 'L', 'N', ] },
      { name: 'B', points: 74, wishes: ['K', 'N', 'I', 'J', 'M', 'O', 'L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 484', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 7, wishes: ['I', 'N', 'J', ] },
      { name: 'D', points: 19, wishes: ['J', 'I', 'N', 'K', ] },
      { name: 'B', points: 29, wishes: ['L', 'N', 'J', 'I', 'K', 'O', 'M', ] },
      { name: 'C', points: 41, wishes: ['N', 'I', 'J', 'O', 'L', 'M', 'K', ] },
      { name: 'E', points: 74, wishes: ['K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('K');
  });

  it('should solve this set 485', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 5, wishes: ['J', 'M', ] },
      { name: 'H', points: 10, wishes: ['K', 'I', 'M', 'J', ] },
      { name: 'C', points: 13, wishes: ['K', 'I', 'J', ] },
      { name: 'D', points: 21, wishes: ['J', 'K', ] },
      { name: 'A', points: 56, wishes: ['J', ] },
      { name: 'G', points: 61, wishes: ['J', 'I', 'M', 'K', ] },
      { name: 'E', points: 76, wishes: ['K', 'I', 'L', 'J', ] },
      { name: 'F', points: 81, wishes: ['J', 'M', 'L', 'K', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(8);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('L');
  });

  it('should solve this set 486', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 40, wishes: ['N', 'M', 'J', 'I', 'K', 'L', 'O', ] },
      { name: 'B', points: 62, wishes: ['M', 'N', 'K', 'L', 'J', 'I', 'O', ] },
      { name: 'C', points: 66, wishes: ['K', 'I', 'O', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
  });

  it('should solve this set 487', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 46, wishes: ['M', 'J', ] },
      { name: 'B', points: 80, wishes: ['J', 'K', 'I', 'L', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(2);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('J');
  });

  it('should solve this set 488', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 59, wishes: ['K', 'I', ] },
      { name: 'C', points: 80, wishes: ['L', 'J', 'I', 'K', ] },
      { name: 'B', points: 84, wishes: ['L', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 489', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 11, wishes: ['Q', ] },
      { name: 'B', points: 49, wishes: ['M', 'J', 'N', 'L', 'Q', 'P', 'O', 'I', 'K', ] },
      { name: 'C', points: 57, wishes: ['K', 'O', ] },
      { name: 'A', points: 74, wishes: ['M', 'P', 'Q', 'J', ] },
      { name: 'D', points: 87, wishes: ['O', 'Q', 'P', 'K', 'J', 'M', 'I', ] },
      { name: 'F', points: 91, wishes: ['O', 'M', 'Q', 'N', 'L', 'I', 'J', 'P', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('Q');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('P');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('O');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('N');
  });

  it('should solve this set 490', () => {
    const pilots: Pilot[] = [
      { name: 'D', points: 13, wishes: ['I', ] },
      { name: 'A', points: 57, wishes: ['I', ] },
      { name: 'B', points: 74, wishes: ['I', ] },
      { name: 'E', points: 80, wishes: ['I', ] },
      { name: 'C', points: 97, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 491', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 54, wishes: ['O', 'Q', 'J', 'M', 'N', 'P', 'I', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(1);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('O');
  });

  it('should solve this set 492', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 23, wishes: ['K', 'J', 'N', 'L', ] },
      { name: 'A', points: 65, wishes: ['I', ] },
      { name: 'C', points: 97, wishes: ['M', 'J', 'N', 'K', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(3);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('M');
  });

  it('should solve this set 493', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 6, wishes: ['M', 'K', 'J', 'L', ] },
      { name: 'C', points: 14, wishes: ['K', 'I', ] },
      { name: 'A', points: 24, wishes: ['K', 'I', 'L', ] },
      { name: 'E', points: 29, wishes: ['M', ] },
      { name: 'D', points: 67, wishes: ['M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
  });

  it('should solve this set 494', () => {
    const pilots: Pilot[] = [
      { name: 'C', points: 30, wishes: ['K', 'L', 'I', 'M', ] },
      { name: 'E', points: 32, wishes: ['L', 'I', 'M', ] },
      { name: 'D', points: 33, wishes: ['L', 'K', 'M', 'J', 'I', ] },
      { name: 'F', points: 58, wishes: ['M', 'K', 'J', 'L', ] },
      { name: 'A', points: 60, wishes: ['L', ] },
      { name: 'B', points: 98, wishes: ['I', 'L', 'J', 'K', 'M', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
  });

  it('should solve this set 495', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 31, wishes: ['J', ] },
      { name: 'H', points: 44, wishes: ['I', ] },
      { name: 'I', points: 46, wishes: ['I', 'J', ] },
      { name: 'G', points: 67, wishes: ['I', 'J', ] },
      { name: 'F', points: 70, wishes: ['J', 'I', ] },
      { name: 'E', points: 71, wishes: ['I', ] },
      { name: 'D', points: 84, wishes: ['I', ] },
      { name: 'B', points: 89, wishes: ['I', 'J', ] },
      { name: 'C', points: 97, wishes: ['I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(9);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'H')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'I')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'G')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe(undefined);
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe(undefined);
  });

  it('should solve this set 496', () => {
    const pilots: Pilot[] = [
      { name: 'B', points: 20, wishes: ['I', ] },
      { name: 'A', points: 25, wishes: ['L', 'J', 'K', 'I', ] },
      { name: 'C', points: 69, wishes: ['K', 'I', 'J', 'L', ] },
      { name: 'D', points: 83, wishes: ['L', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(4);
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('L');
  });

  it('should solve this set 497', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 2, wishes: ['I', ] },
      { name: 'E', points: 34, wishes: ['J', 'K', ] },
      { name: 'B', points: 65, wishes: ['I', 'K', ] },
      { name: 'D', points: 66, wishes: ['I', ] },
      { name: 'C', points: 91, wishes: ['K', 'J', 'I', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(5);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('K');
  });

  it('should solve this set 498', () => {
    const pilots: Pilot[] = [
      { name: 'A', points: 16, wishes: ['J', 'K', 'L', ] },
      { name: 'D', points: 21, wishes: ['I', 'K', ] },
      { name: 'C', points: 33, wishes: ['K', 'L', 'I', ] },
      { name: 'B', points: 34, wishes: ['J', 'I', 'K', 'L', ] },
      { name: 'F', points: 91, wishes: ['J', 'I', 'L', 'K', ] },
      { name: 'E', points: 97, wishes: ['K', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('J');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('L');
  });

  it('should solve this set 499', () => {
    const pilots: Pilot[] = [
      { name: 'E', points: 0, wishes: ['N', 'J', 'I', 'K', 'M', 'L', ] },
      { name: 'B', points: 2, wishes: ['M', 'I', 'L', 'N', 'K', ] },
      { name: 'A', points: 23, wishes: ['N', 'M', 'L', 'I', 'K', ] },
      { name: 'C', points: 40, wishes: ['K', 'N', ] },
      { name: 'F', points: 46, wishes: ['M', 'N', ] },
      { name: 'D', points: 62, wishes: ['L', 'J', ] },
    ];
    const result = assignTandemToPilots(pilots);

    expect(result).toBeDefined();
    expect(result.assignments).toBeDefined();
    expect(result.assignmentData).toBeDefined();
    expect(result.assignments.length).toBe(6);
    expect(getAssignmentForPilotName(result.assignments, 'E')!.tandemName).toBe('N');
    expect(getAssignmentForPilotName(result.assignments, 'B')!.tandemName).toBe('I');
    expect(getAssignmentForPilotName(result.assignments, 'A')!.tandemName).toBe('L');
    expect(getAssignmentForPilotName(result.assignments, 'C')!.tandemName).toBe('K');
    expect(getAssignmentForPilotName(result.assignments, 'F')!.tandemName).toBe('M');
    expect(getAssignmentForPilotName(result.assignments, 'D')!.tandemName).toBe('J');
  });
*/
});
