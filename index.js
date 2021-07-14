function sub(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}

function testSum() {
  const a = 10;
  const b = 10;

  const result = sum(a, b);

  if (result === 20) {
    return true;
  }

  return false;
}