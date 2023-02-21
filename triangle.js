let num = 4;
for (let i = 1; i <= num; i++) {
  let run = "";
  for (let j = 1; j <= num - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) {
    run += i + " ";
  }
  console.log(run);
}
