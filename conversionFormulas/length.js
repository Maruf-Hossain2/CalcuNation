// length.js
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
  
    const unitToMeterFactor = {
    "Aln": 0.5937777777872782,
    "Angstrom": 0.0000000001,
    "Arpent": 58.52159995385689,
    "Astronomical Unit (AU)": 1.495978707E+11,
    "Attometer (am)": 1.E-18,
    "a.u. of Length": 5.291772489940979E-11,
    "Barleycorn": 0.0084666666667005,
    "Bohr Radius": 5.291772489940979E-11,
    "Caliber": 2.54000000001016E-4,
    "Centiinch": 2.54000000001016E-4,
    "Centimeter (cm)": 0.01,
    "Chain": 20.11679999149623,
    "Chain (US Survey)": 20.11684021732947,
    "Cord": 3.624556363775995,
    "Cubit (Biblical)": 0.4572473708276177,
    "Cubit (Greek)": 0.4627880000033087,
    "Cubit (UK)": 0.4571999999948611,
    "Decimeter (dm)": 0.1,
    "Dekameter (dam)": 10.0,
    "Earth's Distance from Sun": 1.496E+11,
    "Earth's Equatorial Radius": 6378160.0,
    "Earth's Polar Radius": 6356777.0,
    "Electron Radius (Classical)": 2.817940920000004E-15,
    "Ell": 1.142999999961024,
    "Exameter (Em)": 1.E+18,
    "Famn": 1.781333333361835,
    "Fathom": 1.828799999895832,
    "Fathom (US Survey)": 1.82880365745867,
    "Femtometer (fm)": 0.000000000000001,
    "Fermi": 0.000000000000001,
    "Finger (Cloth)": 0.1143000000000217,
    "Fingerbreadth": 0.0190500000000762,
    "Foot (ft)": 0.3048000000012192,
    "Foot (US Survey)": 0.304800609604316,
    "Furlong": 201.1680015337048,
    "Furlong (US Survey)": 201.1684021732947,
    "Gigameter (Gm)": 1.E+9,
    "Goad": 1.3716,
    "Hand": 0.1016000000004064,
    "Handbreadth": 0.0762000000003048,
    "Hectometer (hm)": 100.0,
    "Inch (in)": 0.0254000000001016,
    "Inch (US Survey)": 0.0254000508001016,
    "Ken": 2.118360000208633,
    "Kilometer (km)": 1000.0,
    "Kiloparsec (kpc)": 3.085677582E+19,
    "Kiloyard": 914.399998610112,
    "League": 4828.032716680901,
    "League (Statute)": 4828.042040658873,
    "Light Year": 946073.0473,
    "Link": 0.2011679999999462,
    "Link (US Survey)": 0.2011684023351696,
    "Long Cubit": 0.5333999999980691,
    "Long Reed": 3.200399999817705,
    "Megameter (Mm)": 1000000.0,
    "Megaparsec (Mpc)": 3.085677582E+22,
    "Meter (m)": 1.0,
    "Microinch": 2.54000000001016E-8,
    "Micrometer (µm)": 0.000001,
    "Micron": 0.000001,
    "Mil": 2.54000000001016E-5,
    "Mile (Roman)": 1479.803931898239,
    "Mile (statute)": 1609.347346886291,
    "Mile (US Survey)": 1609.347346886291,
    "Millimeter (mm)": 0.001,
    "Nail (Cloth)": 0.0571500000013173,
    "Nanometer (nm)": 0.000000001,
    "Nautical League (International)": 5556.0000355584,
    "Nautical League (UK)": 5559.552255899519,
    "Nautical Mile (International)": 1852.0000118528,
    "Nautical Mile (UK)": 1853.18408529984,
    "Parsec (pc)": 3.085677582E16,
    "Perch": 5.029200000403342,
    "Petameter (Pm)": 1.E+15,
    "Pica": 0.0042333333333503,
    "Picometer (pm)": 1E-12,
    "Point": 3.527777778E-4,
    "Pole": 5.0292,
    "Planck Length": 1.61605E-35,
    "Quarter (Cloth)": 0.2286,
    "Reed": 2.7432,
    "Rod": 5.0292,
    "Rod (US Survey)": 5.029210059,
    "Roman Actus": 35.47871994,
    "Rope": 6.095999998,
    "Russian Archin": 0.7112,
    "Span (Cloth)": 0.2286,
    "Shaftment": 0.15239953,
    "Sun's Radius": 696000000.1,
    "Terameter (Tm)": 1000000000000.0,
    "Twip": 1.763888888883499E-5,
    "X-unit": 1.002079999999967E-13,
    "Yard (yd)": 0.9144000000315285,
    "Yoctometer (ym)": 1.E-24,
    "Yottameter (Ym)": 1.E+24,
    "Zeptometer (zm)": 1.E-21,
    "Zettameter (Zm)": 1.E+21
    };
  
    const unitDescriptions = {
    "Aln": "An obsolete Scandinavian unit of length, approximately 0.6 meters.",
    "Angstrom": "A unit of length equal to 10^-10 meters, used to measure atomic distances.",
    "Arpent": "A French unit of area, also used as a unit of length, varying regionally.",
    "Astronomical Unit (AU)": "The average distance between Earth and the Sun, approximately 149.6 million kilometers.",
    "Attometer (am)": "A unit of length equal to 10^-18 meters.",
    "a.u. of Length": "The atomic unit of length, also known as the Bohr radius, approximately 5.29 x 10^-11 meters.",
    "Barleycorn": "An old English unit of length, approximately 1/3 of an inch.",
    "Bohr Radius": "The most probable distance between the nucleus and the electron in a hydrogen atom, approximately 5.29 x 10^-11 meters.",
    "Caliber": "The internal diameter of a gun barrel, also used as a unit of length, typically in inches or millimeters.",
    "Centiinch": "A unit of length equal to 1/100 of an inch.",
    "Centimeter (cm)": "A unit of length equal to 1/100 of a meter.",
    "Chain": "A unit of length equal to 66 feet, used in land surveying.",
    "Chain (US Survey)": "A unit of length equal to 66 US survey feet.",
    "Cord": "A unit of volume for firewood, also used historically as a unit of length.",
    "Cubit (Biblical)": "An ancient unit of length based on the forearm, approximately 0.45 meters.",
    "Cubit (Greek)": "An ancient Greek unit of length, approximately 0.46 meters.",
    "Cubit (UK)": "A British unit of length, similar to the biblical cubit.",
    "Decimeter (dm)": "A unit of length equal to 1/10 of a meter.",
    "Dekameter (dam)": "A unit of length equal to 10 meters.",
    "Earth's Distance from Sun": "The average distance between Earth and the Sun, approximately 149.6 million kilometers.",
    "Earth's Equatorial Radius": "The radius of Earth at the Equator, approximately 6,378 kilometers.",
    "Earth's Polar Radius": "The radius of Earth at the poles, approximately 6,357 kilometers.",
    "Electron Radius (Classical)": "A classical estimate of the size of an electron, approximately 2.82 x 10^-15 meters.",
    "Ell": "An old English unit of length, approximately 45 inches.",
    "Exameter (Em)": "A unit of length equal to 10^18 meters.",
    "Famn": "An old Scandinavian unit of length, similar to the fathom.",
    "Fathom": "A unit of length equal to 6 feet, used in marine contexts.",
    "Fathom (US Survey)": "A unit of length equal to 6 US survey feet.",
    "Femtometer (fm)": "A unit of length equal to 10^-15 meters.",
    "Fermi": "A unit of length equal to 10^-15 meters, used in nuclear physics.",
    "Finger (Cloth)": "A unit of length equal to 7/8 of an inch, used in the textile industry.",
    "Fingerbreadth": "A unit of length equal to 3/4 of an inch.",
    "Foot (ft)": "A unit of length equal to 12 inches.",
    "Foot (US Survey)": "A unit of length equal to 12 US survey inches.",
    "Furlong": "A unit of length equal to 1/8 of a mile.",
    "Furlong (US Survey)": "A unit of length equal to 1/8 of a US survey mile.",
    "Gigameter (Gm)": "A unit of length equal to 10^9 meters.",
    "Goad": "A unit of length used in land surveying, approximately 5 feet.",
    "Hand": "A unit of length equal to 4 inches, used to measure the height of horses.",
    "Handbreadth": "A unit of length equal to 3 inches.",
    "Hectometer (hm)": "A unit of length equal to 100 meters.",
    "Inch (in)": "A unit of length equal to 1/12 of a foot.",
    "Inch (US Survey)": "A unit of length equal to 1/12 of a US survey foot.",
    "Ken": "A Japanese unit of length, approximately 1.82 meters.",
    "Kilometer (km)": "A unit of length equal to 1000 meters.",
    "Kiloparsec (kpc)": "A unit of length equal to 1000 parsecs, used in astronomy.",
    "Kiloyard": "A unit of length equal to 1000 yards.",
    "League": "A unit of length, varying regionally, typically around 3 miles.",
    "League (Statute)": "A unit of length equal to 3 statute miles.",
    "Light Year": "The distance light travels in one year, approximately 9.46 x 10^15 meters.",
    "Link": "A unit of length equal to 1/100 of a chain.",
    "Link (US Survey)": "A unit of length equal to 1/100 of a US survey chain.",
    "Long Cubit": "An ancient unit of length, longer than the standard cubit.",
    "Long Reed": "A unit of length equal to 12 cubits.",
    "Megameter (Mm)": "A unit of length equal to 10^6 meters.",
    "Megaparsec (Mpc)": "A unit of length equal to 1 million parsecs, used in astronomy.",
    "Meter (m)": "The base unit of length in the metric system.",
    "Microinch": "A unit of length equal to 10^-6 inches.",
    "Micrometer (µm)": "A unit of length equal to 10^-6 meters.",
    "Micron": "A unit of length equal to 10^-6 meters, same as micrometer.",
    "Mil": "A unit of length equal to 1/1000 of an inch.",
    "Mile (Roman)": "A unit of length used by the Romans, approximately 1480 meters.",
    "Mile (statute)": "A unit of length equal to 5280 feet.",
    "Mile (US Survey)": "A unit of length equal to 5280 US survey feet.",
    "Millimeter (mm)": "A unit of length equal to 1/1000 of a meter.",
    "Nail (Cloth)": "A unit of length equal to 1/16 of a yard, used in the textile industry.",
    "Nanometer (nm)": "A unit of length equal to 10^-9 meters.",
    "Nautical League (International)": "A unit of length equal to 3 nautical miles.",
    "Nautical League (UK)": "A unit of length equal to 3 UK nautical miles.",
    "Nautical Mile (International)": "A unit of length equal to 1852 meters, used in navigation.",
    "Nautical Mile (UK)": "A unit of length equal to 6080 feet, used in navigation.",
    "Parsec (pc)": "A unit of length used in astronomy, approximately 3.26 light-years.",
    "Perch": "A unit of length equal to 5.5 yards.",
    "Petameter (Pm)": "A unit of length equal to 10^15 meters.",
    "Pica": "A unit of length equal to 1/6 of an inch, used in typography.",
    "Picometer (pm)": "A unit of length equal to 10^-12 meters.",
    "Point": "A unit of length equal to 1/72 of an inch, used in typography.",
    "Pole": "A unit of length equal to 5.5 yards, same as perch.",
    "Planck Length": "The smallest unit of length that has meaning in physics, approximately 1.6 x 10^-35 meters.",
    "Quarter (Cloth)": "A unit of length equal to 1/4 of a yard, used in the textile industry.",
    "Reed": "A unit of length equal to 66 feet.",
    "Rod": "A unit of length equal to 5.5 yards, same as perch and pole.",
    "Rod (US Survey)": "A unit of length equal to 5.5 US survey yards.",
    "Roman Actus": "A unit of length used by the Romans, approximately 35.5 meters.",
    "Rope": "A unit of length equal to 20 feet.",
    "Russian Archin": "A unit of length equal to 28 inches.",
    "Span (Cloth)": "A unit of length equal to 9 inches.",
    "Shaftment": "A unit of length equal to 6 inches.",
    "Sun's Radius": "The radius of the Sun, approximately 696,000 kilometers.",
    "Terameter (Tm)": "A unit of length equal to 10^12 meters.",
    "Twip": "A unit of length equal to 1/20 of a point, used in typography.",
    "X-unit": "A unit of length used to measure X-ray wavelengths, approximately 10^-13 meters.",
    "Yard (yd)": "A unit of length equal to 3 feet.",
    "Yoctometer (ym)": "A unit of length equal to 10^-24 meters.",
    "Yottameter (Ym)": "A unit of length equal to 10^24 meters.",
    "Zeptometer (zm)": "A unit of length equal to 10^-21 meters.",
    "Zettameter (Zm)": "A unit of length equal to 10^21 meters"
    };
  
    const unitHistories = {
    "Aln": "The aln was a common unit of length in Scandinavia, used for measuring cloth and other goods. Its length varied slightly between regions.",
    "Angstrom": "The ångström was devised by Anders Jonas Ångström in the 19th century for measuring the wavelengths of light.",
    "Arpent": "The arpent was used in France and French colonies for land measurement, with variations in size depending on local customs.",
    "Astronomical Unit (AU)": "The astronomical unit became important for measuring distances within the solar system and beyond.",
    "Attometer (am)": "The attometer is a relatively modern unit, used in scientific contexts to measure extremely small distances.",
    "a.u. of Length": "The atomic unit of length is fundamental to atomic physics and quantum chemistry.",
    "Barleycorn": "The barleycorn was one of the earliest units of length in England, based on the length of a grain of barley.",
    "Bohr Radius": "The Bohr radius is a key concept in atomic theory, representing the most probable distance of the electron from the nucleus in a hydrogen atom.",
    "Caliber": "The caliber has been used for centuries to specify the bore diameter of firearms.",
    "Centiinch": "The centiinch is a rarely used unit, representing a small fraction of an inch.",
    "Centimeter (cm)": "The centimeter was introduced as part of the metric system in the late 18th century.",
    "Chain": "The chain was introduced by Edmund Gunter in the 17th century for land surveying.",
    "Chain (US Survey)": "The US survey chain is a variant of Gunter's chain, used specifically in the United States.",
    "Cord": "The cord has been used for centuries to measure firewood, with its length related to the stack's dimensions.",
    "Cubit (Biblical)": "The cubit is one of the oldest known units of length, used in ancient Egypt and Mesopotamia.",
    "Cubit (Greek)": "The Greek cubit was similar to the Egyptian cubit but with regional variations.",
    "Cubit (UK)": "The UK cubit was a traditional British unit of length, similar to the biblical cubit.",
    "Decimeter (dm)": "The decimeter is a standard unit in the metric system.",
    "Dekameter (dam)": "The dekameter is a standard unit in the metric system.",
    "Earth's Distance from Sun": "The Earth's distance from the Sun has been known since ancient times, but its precise measurement has improved with modern astronomy.",
    "Earth's Equatorial Radius": "The Earth's equatorial radius has been measured with increasing accuracy over centuries.",
    "Earth's Polar Radius": "The Earth's polar radius has been measured with increasing accuracy over centuries.",
    "Electron Radius (Classical)": "The classical electron radius is a theoretical construct based on classical electromagnetism.",
    "Ell": "The ell was a common unit of length in medieval Europe, used for measuring cloth.",
    "Exameter (Em)": "The exameter is a modern unit used in scientific contexts.",
    "Famn": "The famn was a Scandinavian unit of length, similar to the fathom.",
    "Fathom": "The fathom has been used for centuries to measure water depth.",
    "Fathom (US Survey)": "The US survey fathom is a variant used in the United States.",
    "Femtometer (fm)": "The femtometer is used in nuclear physics to measure the size of atomic nuclei.",
    "Fermi": "The fermi is used in nuclear physics to measure the size of atomic nuclei.",
    "Finger (Cloth)": "The finger was a traditional unit of length used in the textile industry.",
    "Fingerbreadth": "The fingerbreadth was a traditional unit of length, based on the width of a finger.",
    "Foot (ft)": "The foot has been used since ancient times, with different regions having slightly different standards.",
    "Foot (US Survey)": "The US survey foot is a variant used in the United States.",
    "Furlong": "The furlong originated in Anglo-Saxon England as the length of a furrow in a ploughed field.",
    "Furlong (US Survey)": "The US survey furlong is a variant used in the United States.",
    "Gigameter (Gm)": "The gigameter is a modern unit used in scientific contexts.",
    "Goad": "The goad was a traditional unit of length used in land surveying.",
    "Hand": "The hand has been used for centuries to measure the height of horses.",
    "Handbreadth": "The handbreadth was a traditional unit of length, based on the width of a hand.",
    "Hectometer (hm)": "The hectometer is a standard unit in the metric system.",
    "Inch (in)": "The inch has been used since ancient times, with its length standardized in England.",
    "Inch (US Survey)": "The US survey inch is a variant used in the United States.",
    "Ken": "The ken is a traditional Japanese unit of length, used in architecture and construction.",
    "Kilometer (km)": "The kilometer is a standard unit in the metric system.",
    "Kiloparsec (kpc)": "The kiloparsec is used in astronomy to measure distances between galaxies.",
    "Kiloyard": "The kiloyard is a less common unit, equal to 1000 yards.",
    "League": "The league has been used in various regions, with its length varying depending on local customs.",
    "League (Statute)": "The statute league is a standardized unit of length equal to 3 statute miles.",
    "Light Year": "The light-year is used to express astronomical distances, making it easier to comprehend the vast scales of the universe.",
    "Link": "The link is used in surveying, equal to 1/100 of a chain.",
    "Link (US Survey)": "The US survey link is a variant used in the United States.",
    "Long Cubit": "The long cubit was used in ancient times, longer than the standard cubit.",
    "Long Reed": "The long reed was used in ancient times, equal to 12 cubits.",
    "Megameter (Mm)": "The megameter is a standard unit in the metric system.",
    "Megaparsec (Mpc)": "The megaparsec is used in astronomy to measure distances between clusters of galaxies.",
    "Meter (m)": "The meter was originally defined in 1793 as one ten-millionth of the distance from the equator to the North Pole.",
    "Microinch": "The microinch is a small unit used in engineering and manufacturing.",
    "Micrometer (µm)": "The micrometer is used in scientific and technical applications to measure small objects.",
    "Micron": "Micron has the same history as a micrometer.",
    "Mil": "The mil is used in engineering and manufacturing to measure small thicknesses.",
    "Mile (Roman)": "The Roman mile was used by the Romans for measuring distances.",
    "Mile (statute)": "The statute mile was standardized in England and is used for measuring longer distances.",
    "Mile (US Survey)": "The US survey mile is a variant used in the United States.",
    "Millimeter (mm)": "The millimeter is a standard unit in the metric system.",
    "Nail (Cloth)": "The nail was a traditional unit used in the textile industry.",
    "Nanometer (nm)": "The nanometer is used in nanotechnology and materials science to measure extremely small objects.",
    "Nautical League (International)": "The international nautical league is used in maritime contexts.",
    "Nautical League (UK)": "The UK nautical league is used in maritime contexts in the United Kingdom.",
    "Nautical Mile (International)": "The international nautical mile is used in navigation because it approximates one minute of latitude.",
    "Nautical Mile (UK)": "The UK nautical mile is used in navigation in the United Kingdom.",
    "Parsec (pc)": "The parsec is used in astronomy to measure distances to stars.",
    "Perch": "Perch has the same history as rod and pole.",
    "Petameter (Pm)": "The petameter is a modern unit used in scientific contexts.",
    "Pica": "The pica is used in typography to measure the size of fonts and other elements.",
    "Picometer (pm)": "The picometer is used in scientific and technical applications to measure extremely small objects.",
    "Point": "The point is used in typography to measure the size of fonts and other elements.",
    "Pole": "The pole (unit) has the same history as perch and rod",
    "Planck Length": "The Planck length is a theoretical concept in quantum gravity, representing the smallest possible length.",
    "Quarter (Cloth)": "The quarter was a traditional unit used in the textile industry.",
    "Reed": "The reed has the same history as chain",
    "Rod": "The rod has been used as a unit since the 15th century with the same history as perch and pole",
    "Rod (US Survey)": "The US survey rod is a variant used in the United States.",
    "Roman Actus": "The Roman actus was a unit used in agriculture for land plots",
    "Rope": "The rope has its roots from the 15th century where rope of 20 feet was used as a unit",
    "Russian Archin": "Was introduced in the 16th century, as a main Russian unit of measurement",
    "Span (Cloth)": "Has been used since the 12th century based on the human hand",
    "Shaftment": "Was used in the 16th century around the time of the Tudor dynasty",
    "Sun's Radius": "It has been recorded since the ancient times by scientists such as Ptolemy and many more since then",
    "Terameter (Tm)": "Has been increasingly used in Astronomy to measure the distances inside the solar system and is a standard unit in metric system",
    "Twip": "Used in the printing industry to measure minute space sizes inside documents",
    "X-unit": "Used during the early years of x-ray measurements in spectrometry, this unit is about 0.1 pm",
    "Yard (yd)": "Since the 10th century, many try to standardize this unit, however, it wasn't until 1959, when it has been agreed to be exactly 0.9144 meters",
    "Yoctometer (ym)": "It has been derived from the metric system prefixes, the unit is not practically used, but it can be found in theoretical physics",
    "Yottameter (Ym)": "Has been derived from the metric system prefixes, the unit is not practically used, but it can be found in theoretical physics",
    "Zeptometer (zm)": "Has been derived from the metric system prefixes, the unit is not practically used, but it can be found in theoretical physics",
    "Zettameter (Zm)": "Has been derived from the metric system prefixes, the unit is not practically used, but it can be found in theoretical physics"
    };
  
    let calculationHistory = JSON.parse(localStorage.getItem('calculationHistory')) || [];

    const fromUnitList = document.getElementById("fromUnitList");
    const toUnitList = document.getElementById("toUnitList");

    // Populate datalists
    for (const unit in unitToMeterFactor) {
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

    function convertLength() {
        const fromUnit = fromUnitInput.value;
        const toUnit = toUnitInput.value;
        const value = parseFloat(valueInput.value);

        if (isNaN(value)) {
            resultDiv.textContent = "Please enter a valid number.";
            return;
        }

        if (!(fromUnit in unitToMeterFactor) || !(toUnit in unitToMeterFactor)) {
            resultDiv.textContent = "Please select valid units.";
            return;
        }

        const meters = value * unitToMeterFactor[fromUnit];
        const result = meters / unitToMeterFactor[toUnit];
        const resultText = `${value} ${fromUnit} = ${result} ${toUnit}`;
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
        convertLength();
    });

    // Clear history button functionality
    clearHistoryButton.addEventListener('click', function() {
        calculationHistory = [];
        localStorage.removeItem('calculationHistory');
        updateHistoryList();
    });

    // Event listeners for input changes
    fromUnitInput.addEventListener("input", convertLength);
    toUnitInput.addEventListener("input", convertLength);
    valueInput.addEventListener("input", convertLength);

    // Initial conversion on page load (optional)
    convertLength();
    updateHistoryList();
});