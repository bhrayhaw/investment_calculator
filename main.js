const currentSavings = parseFloat(
    document.getElementById("currentSavingsInput").value
);
const yearlySavings = parseFloat(
    document.getElementById("yearlySavingsInput").value
);
const interestRate = parseFloat(
    document.getElementById("interestRateInput").value
);
const investmentDuration = parseInt(
    document.getElementById("investmentDurationInput").value
);

// Initialize table and calculate values
const table = document.querySelector("#investmentTable");
table.style.display = "none";

const tableBody = document.querySelector("#investmentTable tbody");
tableBody.innerHTML = "";

const calculateInvestment = () => {
    let totalSavings = currentSavings;
    let totalInterest = 0;

    for (let year = 1; year <= investmentDuration; year++) {
        const yearlyInterest =
            (totalSavings + yearlySavings) * (interestRate / 100);
        totalSavings += yearlySavings + yearlyInterest;
        totalInterest += yearlyInterest;

        // Create and append a new row to the table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
      <td>${year}</td>
      <td>$${totalSavings.toFixed(2)}</td>
      <td>$${yearlyInterest.toFixed(2)}</td>
      <td>$${totalInterest.toFixed(2)}</td>
      <td>$${(totalSavings - totalInterest).toFixed(2)}</td>
    `;

        tableBody.appendChild(newRow);
    }
    currentSavings = "";
    yearlySavings = "";
    interestRate = "";
    investmentDuration = "";

    table.style.display = "table";
};
