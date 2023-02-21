let x = 10;
for (let i = x - 1; i >= 1; i--) {
  let run = "";
  for (let j = 1; j <= x - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += i + " ";
  }
  console.log(run);
}
