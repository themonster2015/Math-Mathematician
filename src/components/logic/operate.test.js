import operate from './operate';

describe('operation', () => {
  test('Returns 2 when 1 + 1', () => {
    const num1 = 1;
    const num2 = 1;
    const op = '+';
    expect(operate(num1, num2, op)).toBe('2');
  });
  test('Returns infinity when 19 / 0', () => {
    const num1 = 19;
    const num2 = 0;
    const op = '/';
    expect(operate(num1, num2, op)).toBe('Error');
  });
  test('Returns error when 19 / 0', () => {
    const num1 = 19;
    const num2 = 0;
    expect(operate(num2, num1)).toEqual('Error');
  });
  test('Returns 3 when 5 - 2', () => {
    const num1 = 5;
    const num2 = 2;
    const op = '-';
    expect(operate(num1, num2, op)).toBe('3');
  });
  test('Returns 10 when 5 * 2', () => {
    const num1 = 5;
    const num2 = 2;
    const op = 'x';
    expect(operate(num1, num2, op)).toBe('10');
  });
  test('Returns 10 when 5 % 2', () => {
    const num1 = 5;
    const num2 = 2;
    const op = '%';
    expect(operate(num1, num2, op)).toBe('1');
  });
});
