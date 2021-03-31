const {calculatePlan, calculateBonus, calculateSalary} = require('./../modules/calculating.js');

test('Подсчет плана при билетах: 10 - 5, 20 - 8, 30 - 9, 60 - 4, 720 - 0', () => {
    expect(calculatePlan({
        10: 5,
        20: 8,
        30: 9,
        60: 4,
        720: 0
    })).toBe(60.5);
    expect(calculatePlan({
        10: 5,
        20: 8,
        30: 9,
        60: 4,
        720: 0
    })).toBe(65);
  });