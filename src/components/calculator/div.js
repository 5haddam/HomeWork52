function div(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    throw new Error("Division by zero is not allowed");
  } else {
    return firstOperand / secondOperand;
  }
}

export default div;