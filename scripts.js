"use strict";

const months = [
    "Január", "Február", "Március", "Április", "Május", 
    "Június", "Július", "Augusztus", "Szeptember", 
    "Október", "November", "December"
];

const select = document.getElementById("months");

months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = month;
    select.appendChild(option);
});
