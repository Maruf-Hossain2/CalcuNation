// barGraph.js


document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('data-form');
    const dataLabelsInput = document.getElementById('data-labels');
    const dataValuesInput = document.getElementById('data-values');
    const barChartCanvas = document.getElementById('barChart').getContext('2d');
    const graphOrientationSelect = document.getElementById('graph-orientation');
   
   
    let barChart; // Declare chart variable
   
   
    function updateChart(labels, values, orientation) {
    // Destroy existing chart if it exists
    if (barChart) {
    barChart.destroy();
    }
   
   
    const chartType = (orientation === 'horizontal') ? 'bar' : 'bar';
   
   
    barChart = new Chart(barChartCanvas, {
    type: chartType,
    data: {
    labels: labels,
    datasets: [{
    label: 'Data Values',
    data: values,
    backgroundColor: '#00ffff', // Cyan bars
    borderColor: '#7fff00', // Lime border
    borderWidth: 1
    }]
    },
    options: {
    indexAxis: orientation === 'horizontal' ? 'y' : 'x', // Set indexAxis based on orientation
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    y: {
    beginAtZero: true,
    ticks: {
    color: '#ddd'
    },
    grid: {
    color: '#444'
    }
    },
    x: {
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
   
   
    const labels = dataLabelsInput.value.split(/[,\s]+/).filter(label => label.trim() !== '');
    const values = dataValuesInput.value.split(/[,\s]+/).map(Number).filter(x => !isNaN(x));
    const orientation = graphOrientationSelect.value;
   
   
    updateChart(labels, values, orientation);
    });
   
   
    // Initial chart setup (optional - for placeholder data)
    const initialLabels = ['Category A', 'Category B', 'Category C', 'Category D'];
    const initialValues = [15, 25, 18, 30];
    updateChart(initialLabels, initialValues, 'vertical'); // Default to vertical
   });
   
   
   