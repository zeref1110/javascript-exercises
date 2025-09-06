const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Jazzer', () => {
    expect(values.firstName).toEqual('Jazzer');
  });
  test('lastName is Ancheta', () => {
    expect(values.lastName).toEqual('Ancheta');
  });
  test('currentYear is 2024', () => {
    expect(values.currentYear).toEqual(2024);
  });
  test('birthYear is 2001', () => {
    expect(values.birthYear).toEqual(2001);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Jazzer Ancheta and I am 23 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Jazzer Ancheta', () => {
    expect(values.fullName).toEqual('Jazzer Ancheta');
  });
  test('age is 23', () => {
    expect(values.age).toEqual(23);
  });
});
