import Validator from '../validator';

// Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
// Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами,
// символами подчёркивания или тире.
test.each([
  ['Tank', true],
  ['Silver40', false],
  ['-Korona', false],
  ['_Plut', false],
  ['Lol_', false],
  ['Silver-', false],
  ['Kr5555ug', false],
  ['Kr259kr', true],
  ['Mn_-LP', true],
  ['Mn___P', false],
  ['15men', false],
  ['map12Ron', true],
  ['Mn---P', false],
  ['DFg#@gpo', false],
])(('Проверка метода validateUsername'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
