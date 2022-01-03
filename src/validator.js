export default class Validator {
  static validateUsername(expression) {
    const regex = new RegExp('^[a-zA-Z]+[0-9]{0,3}_{0,2}\\-{0,2}[a-zA-Z]+$');
    return regex.test(expression);
  }
}
