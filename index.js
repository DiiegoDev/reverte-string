const input = "otorrinolaringologista";

function reverse(string) {
  if (typeof string !== "string") {
    console.log("Informe um valor do tipo string");
  }

  let stringReverse = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i]
  }

  console.log(stringReverse);
}

reverse(input);