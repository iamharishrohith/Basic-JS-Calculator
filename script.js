const output = document.querySelector("#input-box");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const buttons_values = buttons[i].textContent;
    console.log(buttons_values);
    if (buttons_values === "C") clear();
    else if(buttons_values === "←") backspace();
    else if (buttons_values === "=") result();
    else append_value(buttons_values);
  });
}

const clear = () => (output.value = "");
const backspace = () => {
    let current_val = output.value;
    output.value = current_val.slice(0, -1);
};
const result = () => (output.value = eval(output.value));
const append_value = (buttons_values) => (output.value += buttons_values);
