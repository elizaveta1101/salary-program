import {calculateSalaryHelper} from '../helpers/calculateSalaryHelper'; 
import {calculatePlanHelper} from '../helpers/calculatePlanHelper'; 
import {calculateBonusHelper} from '../helpers/calculateBonusHelper'; 

test('Подсчет плана при билетах: 10 - 5, 20 - 8, 30 - 9, 60 - 4, 720 - 0', () => {
    expect(calculatePlanHelper({
        10: 5,
        20: 8,
        30: 9,
        60: 4,
        720: 0
    })).toBe(60.5);
    expect(calculatePlanHelper({
        10: 5,
        20: 8,
        30: 9,
        60: 4,
        720: 0
    })).toBe(65);
  });

  // test('adding positive numbers is not zero', () => {
  //   for (let a = 1; a < 10; a++) {
  //     for (let b = 1; b < 10; b++) {
  //       expect(a + b).not.toBe(0);
  //     }
  //   }
  // });