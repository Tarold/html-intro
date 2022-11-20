const symbolVar = Symbol();

console.log('symbolVar :>> ', symbolVar);

const privatKey = Symbol();

const user = {
  age: 15,
  [privatKey]: '1234123412341234',
};

console.log('user[Symbol()] :>> ', user[privatKey]);

const THEMES = {
  LIGHT: Symbol('light'),
  DARK: Symbol('dark'),
};

const theme = THEMES.DARK;

switch (theme) {
  case THEMES.DARK:
    console.log('THEMES.DARK :>> ', THEMES.DARK);
    break;
  case THEMES.LIGHT:
    console.log('THEMES.LIGHT :>> ', THEMES.LIGHT);
    break;
  default:
    console.log(' unexpected value ');
}
