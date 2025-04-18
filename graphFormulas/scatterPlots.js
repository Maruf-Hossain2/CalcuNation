// scatterPlots.js


document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('data-form');
    const dataXInput = document.getElementById('data-x');
    const dataYInput = document.getElementById('data-y');
    const scatterPlotCanvas = document.getElementById('scatterPlot').getContext('2d');
   
   
    let scatterPlot; // Declare chart variable
   
   
    function updateChart(xValues, yValues) {
    // Destroy existing chart if it exists
    if (scatterPlot) {
    scatterPlot.destroy();
    }
   
   
    // Ensure xValues and yValues have the same length
    const dataPoints = xValues.map((x, index) => ({
    x: x,
    y: yValues[index]
    }));
   
   
    scatterPlot = new Chart(scatterPlotCanvas, {
    type: 'scatter',
    data: {
    datasets: [{
    label: 'Data Points',
    data: dataPoints,
    backgroundColor: '#00ffff', // Cyan
    pointRadius: 5,
    pointHoverRadius: 8
    }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    x: {
    beginAtZero: true,
    ticks: {
    color: '#ddd'
    },
    grid: {
    color: '#444'
    }
    },
    y: {
    beginAtZero: true,
    ticks: {
    color: '#ddd'
    },
    grid: {
    color: '#444'
    }
    }
    },
    plugins: {
    legend: {
    labels: {
    color: '#ddd'
    }
    },
    tooltip: { // Enable tooltips
    enabled: true,
    backgroundColor: '#333',
    titleColor: '#fff',
    bodyColor: '#eee',
    borderColor: '#7fff00', // Lime Green
    borderWidth: 1
    }
    }
    }
    });
    }
   
   
    dataForm.addEventListener('submit', function(e) {
    e.preventDefault();
   
   
    const xValues = dataXInput.value.split(/[,\s]+/).map(Number).filter(x => !isNaN(x));
    const yValues = dataYInput.value.split(/[,\s]+/).map(Number).filter(y => !isNaN(y));
   
   
    updateChart(xValues, yValues);
    });
   
   
    // Initial chart setup (optional - for placeholder data)
    const initialXValues = [1, 2, 3, 4, 5];
    const initialYValues = [2, 4, 6, 8, 10];
    updateChart(initialXValues, initialYValues);
   });
   