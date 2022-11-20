function pow(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError('argument must be number value'); // на catch
  }
  if (
    base < 0 ||
    !Number.isSafeInteger(base) ||
    exponent < 0 ||
    !Number.isSafeInteger(exponent)
  ) {
    throw new RangeError('argument must be positive integer value'); // на catch
  }
  if (exponent === 1) return base;
  return base * pow(base, exponent - 1);
}

try {
  console.log(pow(-5, 3));
} catch (err) {
  if (err instanceof TypeError) {
    console.log('Input incorrect type');
  } else if (err instanceof RangeError) {
    console.log('Value must be pisitive integer');
  } else {
    console.log('Something went wrong');
  }
}
