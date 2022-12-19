let buttons = document.querySelectorAll(".btn");
let input = document.getElementById("inp");

let str = " ";

for (item of buttons) {
  item.addEventListener("click", (event) => {
    let num = event.target.innerText;
    if (num == "X") {
      console.log();
      num = "*";
      str += num;
      input.value = str;
    } else if (num == "C") {
      str = "";
      input.value = str;
    } else if (num == "=") {
      input.value = eval(str);
    } else {
      str += num;
      input.value = str;
    }
  });
}
