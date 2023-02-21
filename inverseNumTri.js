n = 10;
for (let i = n - 1; i >= 1; i--) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += k + " ";
  }
  console.log(run);
}
