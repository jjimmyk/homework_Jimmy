var a = [1, 2, 3, ..100];
for (var i = 0); i < a.length; i++) {
  console.log(i);
}
if (a%3 === 0) {
  console.log('fizz');
}
else if (a%5 === 0) {
  console.log('buzz');
}
else if ([a%3 === 0] && [a%5 === 0]) {
  console.log('fizzbuzz');
}
else {
  console.log(a/3);
}
