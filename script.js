
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAge() {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    let today = new Date();
    let d2 = today.getDate(); // Fixed: should be today's date, not birthDate
    let m2 = today.getMonth() + 1; // Fixed: should be today's month, not birthDate
    let y2 = today.getFullYear(); // Fixed: should be today's year, not birthDate

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) { // Fixed: comparing with today's date
        d3 = d2 - d1; // Fixed: today's date - birthDate's date
    } else {
        m3--;
        d3 = getDayesInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `your are <span>${y3}</span> years,<span>${m3}</span> months <span>${d3}</span> days old`;
}

function getDayesInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
