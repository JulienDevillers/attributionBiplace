import computeMunkres from '../munkres2';

describe('Munkres Algorithm', () => {
  it('should compute optimal assignment for 3x3 matrix', () => {
    const matrix = [
      [5, 9, 1],
      [10, 3, 2],
      [8, 7, 4],
    ];

    const result = computeMunkres(matrix);

    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([
      expect.arrayContaining([expect.any(Number), expect.any(Number)]),
      expect.arrayContaining([expect.any(Number), expect.any(Number)]),
      expect.arrayContaining([expect.any(Number), expect.any(Number)]),
    ]));

    // Calculate total cost
    let totalCost = 0;
    result.forEach(([row, col]) => {
      totalCost += matrix[row][col];
    });

    // Optimal assignment should be: (0,2)=1, (1,1)=3, (2,0)=8 = 12
    expect(totalCost).toBe(12);
  });

  it('should handle rectangular matrices by padding', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];

    const result = computeMunkres(matrix);

    // Should return assignments for the original dimensions
    expect(result.length).toBeGreaterThan(0);
    result.forEach(([row, col]) => {
      expect(row).toBeLessThan(2);
      expect(col).toBeLessThan(4);
    });
  });

  it('should format matrix correctly', () => {
    const matrix = [[1, 2], [3, 4]];
    const formatted = computeMunkres.format_matrix(matrix);

    expect(typeof formatted).toBe('string');
    expect(formatted).toContain('1');
    expect(formatted).toContain('2');
    expect(formatted).toContain('3');
    expect(formatted).toContain('4');
  });

  it('should create cost matrix from profit matrix', () => {
    const profit = [[1, 2], [3, 4]];
    const cost = computeMunkres.make_cost_matrix(profit);

    expect(cost).toHaveLength(2);
    expect(cost[0]).toHaveLength(2);
    // All profit values should be converted (4 - profit)
    expect(cost[0][0]).toBe(3); // 4 - 1
    expect(cost[0][1]).toBe(2); // 4 - 2
    expect(cost[1][0]).toBe(1); // 4 - 3
    expect(cost[1][1]).toBe(0); // 4 - 4
  });
});
