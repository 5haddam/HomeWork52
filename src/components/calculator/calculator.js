import add from './add.js';
import div from './div.js';
import mult from './mult.js';
import sub from './sub.js';

class Calculator {
  add = add;
  sub = sub;
  mult = mult;
  div = div;
}

export default Calculator;