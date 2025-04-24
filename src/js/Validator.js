export default class Validator {
  constructor() {}

  validateUsername(name) {
    const regex = /^(?![0-9_-])(?!.*[0-9_-]$)(?!.*\d{4})[a-zA-Z0-9_-]+$/;
    return regex.test(name);
  }
}
