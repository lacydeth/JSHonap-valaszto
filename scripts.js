"use strict";

const months = [
    "Január", "Február", "Március", "Április", "Május", 
    "Június", "Július", "Augusztus", "Szeptember", 
    "Október", "November", "December"
];

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const select = document.getElementById("months");

months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = month;
    select.appendChild(option);
});
const container = document.querySelector(".daysInMonth");

function MonthChange(month) {
    container.innerHTML = "";    

    for (let index = 0; index < days[month.value]; index++) {
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("outerDiv");
        
        const innerDivDay = document.createElement("div");
        innerDivDay.textContent = index + 1;
        outerDiv.appendChild(innerDivDay);
        
        const innerDivText = document.createElement("div");
        const textInput = document.createElement("input");
        innerDivText.appendChild(textInput);
        outerDiv.appendChild(innerDivText);

        container.appendChild(outerDiv);
    }
}


