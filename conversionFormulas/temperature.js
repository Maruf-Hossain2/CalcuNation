document.addEventListener('DOMContentLoaded', function() {
    const fromUnitInput = document.getElementById("fromUnitInput");
    const toUnitInput = document.getElementById("toUnitInput");
    const valueInput = document.getElementById("value");
    const resultDiv = document.getElementById("result");
    const descriptionText = document.getElementById("descriptionText");
    const historyText = document.getElementById("historyText");
    const swapButton = document.getElementById("swapButton");
    const historyList = document.getElementById("historyList");
    const clearHistoryButton = document.getElementById("clearHistory");

    const temperatureUnits = {
        "Celsius": 1,
        "Fahrenheit": 2,
        "Kelvin": 3
    };

    const unitDescriptions = {
        "Celsius": "The Celsius scale is based on the freezing (0°C) and boiling (100°C) points of water.",
        "Fahrenheit": "The Fahrenheit scale is based on the freezing (32°F) and boiling (212°F) points of water.",
        "Kelvin": "The Kelvin scale is an absolute thermodynamic temperature scale where 0 K is absolute zero."
    };

    const unitHistories = {
        "Celsius": "The Celsius scale was invented by Swedish astronomer Anders Celsius in the 18th century.",
        "Fahrenheit": "The Fahrenheit scale was created by German physicist Daniel Gabriel Fahrenheit in the early 18th century.",
        "Kelvin": "The Kelvin scale was developed by British physicist William Thomson, Lord Kelvin, in the mid-19th century."
    };

    let calculationHistory = JSON.parse(localStorage.getItem('calculationHistory')) || [];

    const fromUnitList = document.getElementById("fromUnitList");
    const toUnitList = document.getElementById("toUnitList");

    // Populate datalists
    for (const unit in temperatureUnits) {
        let option = document.createElement("option");
        option.value = unit;
        fromUnitList.appendChild(option);

        option = document.createElement("option");
        option.value = unit;
        toUnitList.appendChild(option);
    }

    function updateHistoryList() {
        historyList.innerHTML = ''; // Clear current list
        calculationHistory.forEach((calculation, index) => {
            let li = document.createElement("li");
            li.textContent = calculation;

            // Add delete button for each history item
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-history-item"); // Add class for styling
            deleteButton.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent selecting the list item
                deleteHistoryItem(index);
            });
            li.appendChild(deleteButton);
            historyList.appendChild(li);
        });
    }

    function deleteHistoryItem(index) {
        calculationHistory.splice(index, 1); // Remove item from array
        localStorage.setItem('calculationHistory', JSON.stringify(calculationHistory)); // Update localStorage
        updateHistoryList(); // Refresh the list
    }

    function convertTemperature() {
        const fromUnit = fromUnitInput.value;
        const toUnit = toUnitInput.value;
        const value = parseFloat(valueInput.value);

        if (isNaN(value)) {
            resultDiv.textContent = "Please enter a valid number.";
            return;
        }

        if (!(fromUnit in temperatureUnits) || !(toUnit in temperatureUnits)) {
            resultDiv.textContent = "Please select valid units.";
            return;
        }

        let result;

        if (fromUnit === "Celsius") {
            if (toUnit === "Fahrenheit") {
                result = (value * 9/5) + 32;
            } else if (toUnit === "Kelvin") {
                result = value + 273.15;
            } else {
                result = value;
            }
        } else if (fromUnit === "Fahrenheit") {
            if (toUnit === "Celsius") {
                result = (value - 32) * 5/9;
            } else if (toUnit === "Kelvin") {
                result = (value - 32) * 5/9 + 273.15;
            } else {
                result = value;
            }
        } else if (fromUnit === "Kelvin") {
            if (toUnit === "Celsius") {
                result = value - 273.15;
            } else if (toUnit === "Fahrenheit") {
                result = (value - 273.15) * 9/5 + 32;
            } else {
                result = value;
            }
        }

        const resultText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
        resultDiv.textContent = resultText;

        // Update unit description and history
        descriptionText.textContent = unitDescriptions[fromUnit] || "No description available.";
        historyText.textContent = unitHistories[fromUnit] || "No history available.";

        // Store calculation in history
        calculationHistory.push(resultText);
        localStorage.setItem('calculationHistory', JSON.stringify(calculationHistory));
        updateHistoryList();
    }

    // Swap button functionality
    swapButton.addEventListener('click', function() {
        const tempUnit = fromUnitInput.value;
        fromUnitInput.value = toUnitInput.value;
        toUnitInput.value = tempUnit;
        convertTemperature();
    });

    // Clear history button functionality
    clearHistoryButton.addEventListener('click', function() {
        calculationHistory = [];
        localStorage.removeItem('calculationHistory');
        updateHistoryList();
    });

    // Event listeners for input changes
    fromUnitInput.addEventListener("input", convertTemperature);
    toUnitInput.addEventListener("input", convertTemperature);
    valueInput.addEventListener("input", convertTemperature);

    // Initial conversion on page load (optional)
    convertTemperature();
    updateHistoryList();
});

