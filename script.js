let display = document.getElementById("display");
let themeBtn = document.getElementById("themeBtn");

function appendValue(val) { display.value += val; }

function appendOperator(op) {
    const last = display.value.slice(-1);
    if ("+-*/".includes(last)) return;
    display.value += op;
}

function clearDisplay() { display.value = ""; }

function deleteLast() { display.value = display.value.slice(0, -1); }

function calculate() {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Error";
        setTimeout(() => display.value = "", 800);
    }
}

/* Keyboard support */
document.addEventListener("keydown", e => {
    if (!isNaN(e.key)) appendValue(e.key);
    if ("+-*/".includes(e.key)) appendOperator(e.key);
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
});

/* Theme toggle */
themeBtn.onclick = () => {
    document.body.classList.toggle("light");
    themeBtn.innerText = document.body.classList.contains("light") ? "🌞" : "🌙";
};

/* Ripple animation */
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function () {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
