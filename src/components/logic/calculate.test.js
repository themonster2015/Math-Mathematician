import calculate from './calculate';

describe('calculate function', () => {
  it('should reset when AC is pressed', () => {
    const obj = {
      total: 6,
      next: null,
      operation: null,
    };
    const result = {
      total: 0,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toMatchObject(result);
  });

  it('should do nothing when 0 is pressed and the previous one is also 0', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const result = {};
    expect(calculate(obj, '7')).toMatchObject(result);
  });

  it('should update next when there is an operation and a number entered', () => {
    const obj = {
      total: null,
      next: '7',
      operation: '+',
    };
    const result = {
      next: '77',
    };
    expect(calculate(obj, '7')).toMatchObject(result);
  });

  it('should return button entered when there\'s no next and there\'s an operation', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const result = {
      next: '7',
    };
    expect(calculate(obj, '7')).toMatchObject(result);
  });

  it('should update next and clear value when there is no operation and a number is entered ', () => {
    const obj = {
      total: null,
      next: 6,
      operation: null,
    };
    const result = {
      next: '67',
      total: null,
    };
    expect(calculate(obj, '7')).toMatchObject(result);
  });

  it('should update next when . is entered', () => {
    const obj = {
      total: null,
      next: '6',
      operation: null,
    };
    const result = {
      next: '6.',
    };
    expect(calculate(obj, '.')).toMatchObject(result);
  });

  it('should reset when there is already a . in next and . is entered', () => {
    const obj = {
      total: null,
      next: '6.',
      operation: null,
    };
    const result = {};
    expect(calculate(obj, '.')).toMatchObject(result);
  });
});
