import Validator from '../Validator';

test('should be correct', () => {
  const validator = new Validator()
  const name = 'John_Doe';
  expect(validator.validateUsername(name)).toBe(true);
});

test('should be incorrect start with number', () => {
  const validator = new Validator()
  const name = '1User';
  expect(validator.validateUsername(name)).toBe(false);
});

test('should be incorrect end with number', () => {
  const validator = new Validator()
  const name = 'User1';
  expect(validator.validateUsername(name)).toBe(false);
});

test('must be incorrect more than 3 digits in a row', () => {
  const validator = new Validator()
  const name = 'User1234';
  expect(validator.validateUsername(name)).toBe(false);
});

test('must be incorrect special symbol', () => {
  const validator = new Validator()
  const name = 'User@name';
  expect(validator.validateUsername(name)).toBe(false);
});
