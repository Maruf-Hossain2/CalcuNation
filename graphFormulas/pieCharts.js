// pieCharts.js


document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('data-form');
    const dataLabelsInput = document.getElementById('data-labels');
    const dataValuesInput = document.getElementById('data-values');
    const chartTypeSelect = document.getElementById('chart-type');
    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
   
   
    let pieChart; // Declare chart variable
   
   
    function updateChart(labels, values, chartType) {
    // Destroy existing chart if it exists
    if (pieChart) {
    pieChart.destroy();
    }
   
   
    pieChart = new Chart(pieChartCanvas, {
    type: chartType,
    data: {
    labels: labels,
    datasets: [{
    label: 'Data Values',
    data: values,
    backgroundColor: [
    'rgba(255, 99, 132, 0.8)',  // Red
    'rgba(54, 162, 235, 0.8)',  // Blue
    'rgba(255, 206, 86, 0.8)',  // Yellow
    'rgba(75, 192, 192, 0.8)',  // Green
    'rgba(153, 102, 255, 0.8)',  // Purple
    'rgba(255, 159, 64, 0.8)',  // Orange
    'rgba(72, 61, 139, 0.8)',  // Indigo
    'rgba(60, 179, 113, 0.8)',  // Sea Green
    'rgba(255, 215, 0, 0.8)',  // Gold
    'rgba(255, 69, 0, 0.8)',  // Red-Orange
    'rgba(238, 130, 238, 0.8)',  // Violet
    'rgba(0, 255, 255, 0.8)',  // Cyan
    'rgba(127, 255, 0, 0.8)',  // Lime
    'rgba(255, 0, 255, 0.8)',  // Magenta
    'rgba(30, 144, 255, 0.8)',  // Dodger Blue
    'rgba(255, 255, 0, 0.8)',  // Yellow
    'rgba(128, 0, 128, 0.8)',  // Purple
    'rgba(0, 128, 128, 0.8)',  // Teal
    'rgba(255, 20, 147, 0.8)',  // Deep Pink
    'rgba(0, 191, 255, 0.8)',  // Deep Sky Blue
    'rgba(218, 112, 214, 0.8)',  // Orchid
    'rgba(173, 255, 47, 0.8)',  // Green Yellow
    'rgba(255, 182, 193, 0.8)',  // Light Pink
    'rgba(70, 130, 180, 0.8)',  // Steel Blue
    'rgba(240, 230, 140, 0.8)',  // Khaki
    'rgba(220, 20, 60, 0.8)',  // Crimson
    'rgba(176, 224, 230, 0.8)',  // Powder Blue
    'rgba(250, 128, 114, 0.8)',  // Salmon
    'rgba(143, 188, 143, 0.8)',  // Dark Sea Green
    'rgba(255, 160, 122, 0.8)',  // Light Salmon
    'rgba(216, 191, 216, 0.8)',  // Thistle
    'rgba(255, 228, 196, 0.8)',  // Bisque
    'rgba(245, 245, 220, 0.8)',  // Beige
    'rgba(253, 245, 230, 0.8)',  // Ivory
    'rgba(240, 128, 128, 0.8)',  // Light Coral
    'rgba(230, 230, 250, 0.8)',  // Lavender
    'rgba(255, 235, 205, 0.8)',  // Lemon Chiffon
    'rgba(188, 143, 143, 0.8)',  // Rosy Brown
    'rgba(240, 255, 240, 0.8)',  // Honeydew
    'rgba(127, 255, 212, 0.8)',  // Aquamarine
    'rgba(240, 230, 140, 0.8)',  // Khaki
    'rgba(244, 164, 96, 0.8)',  // Sandy Brown
    'rgba(255, 228, 181, 0.8)',  // Moccasin
    'rgba(255, 222, 173, 0.8)',  // Navajo White
    'rgba(255, 218, 185, 0.8)',  // Peach Puff
    'rgba(255, 192, 203, 0.8)',  // Pink
    'rgba(224, 255, 255, 0.8)',  // Light Cyan
    'rgba(255, 0, 0, 0.8)',  // Red
    'rgba(0, 255, 0, 0.8)',  // Green
    'rgba(0, 0, 255, 0.8)',  // Blue
    'rgba(255, 255, 255, 0.8)',  // White
    'rgba(0, 0, 0, 0.8)',  // Black
    'rgba(169, 169, 169, 0.8)',  // Dark Gray
    'rgba(192, 192, 192, 0.8)',  // Silver
    'rgba(211, 211, 211, 0.8)',  // Light Gray
    'rgba(128, 128, 128, 0.8)',  // Gray
    'rgba(105, 105, 105, 0.8)',  // Dim Gray
    'rgba(112, 128, 144, 0.8)',  // Slate Gray
    'rgba(47, 79, 79, 0.8)',  // Dark Slate Gray
    'rgba(0, 139, 139, 0.8)',  // Dark Cyan
    'rgba(178, 34, 34, 0.8)',  // Firebrick
    'rgba(205, 92, 92, 0.8)',  // Indian Red
    'rgba(240, 248, 255, 0.8)',  // Alice Blue
    'rgba(95, 158, 160, 0.8)',  // Cadet Blue
    'rgba(222, 184, 135, 0.8)',  // Burly Wood
    'rgba(95, 158, 160, 0.8)',  // Cadet Blue
    'rgba(139, 69, 19, 0.8)',  // Chocolate
    'rgba(210, 105, 30, 0.8)',  // Chocolate
    'rgba(178, 34, 34, 0.8)',  // Crimson
    'rgba(220, 20, 60, 0.8)',  // Firebrick
    'rgba(65, 105, 225, 0.8)',  // Royal Blue
    'rgba(0, 0, 139, 0.8)',  // Dark Blue
    'rgba(75, 0, 130, 0.8)',  // Indigo
    'rgba(128, 0, 0, 0.8)',  // Maroon
    'rgba(25, 25, 112, 0.8)',  // Midnight Blue
    'rgba(107, 142, 35, 0.8)',  // Olive Drab
    'rgba(139, 69, 19, 0.8)',  // Saddle Brown
    'rgba(160, 82, 45, 0.8)',  // Sienna
    'rgba(165, 42, 42, 0.8)',  // Brown
    'rgba(238, 232, 170, 0.8)',  // Pale Goldenrod
    'rgba(218, 165, 32, 0.8)',  // Goldenrod
    'rgba(255, 250, 205, 0.8)',  // Lemon Chiffon
    'rgba(173, 216, 230, 0.8)',  // Light Blue
    'rgba(240, 128, 128, 0.8)',  // Light Coral
    'rgba(176, 196, 222, 0.8)',  // Light Steel Blue
    'rgba(72, 209, 204, 0.8)',  // Medium Turquoise
    'rgba(230, 230, 250, 0.8)',  // Lavender
    'rgba(255, 235, 205, 0.8)',  // Lemon Chiffon
    'rgba(188, 143, 143, 0.8)',  // Rosy Brown
    'rgba(240, 255, 240, 0.8)',  // Honeydew
    'rgba(127, 255, 212, 0.8)',  // Aquamarine
    'rgba(240, 230, 140, 0.8)',  // Khaki
    'rgba(244, 164, 96, 0.8)',  // Sandy Brown
    'rgba(255, 228, 181, 0.8)',  // Moccasin
    'rgba(255, 222, 173, 0.8)',  // Navajo White
    'rgba(255, 218, 185, 0.8)',  // Peach Puff
    'rgba(255, 192, 203, 0.8)',  // Pink
    'rgba(224, 255, 255, 0.8)',  // Light Cyan
    'rgba(0, 255, 255, 0.8)',  // Cyan
    'rgba(0, 255, 0, 0.8)',  // Green
    'rgba(0, 0, 255, 0.8)',  // Blue
    'rgba(255, 255, 255, 0.8)',  // White
    'rgba(0, 0, 0, 0.8)',  // Black
    'rgba(169, 169, 169, 0.8)',  // Dark Gray
    'rgba(192, 192, 192, 0.8)',  // Silver
    'rgba(211, 211, 211, 0.8)',  // Light Gray
    'rgba(128, 128, 128, 0.8)',  // Gray
    'rgba(105, 105, 105, 0.8)',  // Dim Gray
    'rgba(112, 128, 144, 0.8)',  // Slate Gray
    'rgba(47, 79, 79, 0.8)',  // Dark Slate Gray
    'rgba(0, 139, 139, 0.8)',  // Dark Cyan
    'rgba(178, 34, 34, 0.8)',  // Firebrick
    'rgba(205, 92, 92, 0.8)',  // Indian Red
    'rgba(240, 248, 255, 0.8)',  // Alice Blue
    'rgba(95, 158, 160, 0.8)',  // Cadet Blue
    'rgba(222, 184, 135, 0.8)',  // Burly Wood
    'rgba(95, 158, 160, 0.8)',  // Cadet Blue
    'rgba(139, 69, 19, 0.8)',  // Chocolate
    'rgba(210, 105, 30, 0.8)',  // Chocolate
    'rgba(178, 34, 34, 0.8)',  // Crimson
    'rgba(220, 20, 60, 0.8)',  // Firebrick
    'rgba(65, 105, 225, 0.8)',  // Royal Blue
    'rgba(0, 0, 139, 0.8)',  // Dark Blue
    'rgba(75, 0, 130, 0.8)',  // Indigo
    'rgba(128, 0, 0, 0.8)',  // Maroon
    'rgba(25, 25, 112, 0.8)',  // Midnight Blue
    'rgba(107, 142, 35, 0.8)',  // Olive Drab
    'rgba(139, 69, 19, 0.8)',  // Saddle Brown
    'rgba(160, 82, 45, 0.8)',  // Sienna
    'rgba(165, 42, 42, 0.8)',  // Brown
    'rgba(238, 232, 170, 0.8)',  // Pale Goldenrod
    'rgba(218, 165, 32, 0.8)',  // Goldenrod
    'rgba(255, 250, 205, 0.8)',  // Lemon Chiffon
    'rgba(173, 216, 230, 0.8)',  // Light Blue
    'rgba(240, 128, 128, 0.8)',  // Light Coral
    'rgba(176, 196, 222, 0.8)',  // Light Steel Blue
    'rgba(72, 209, 204, 0.8)',  // Medium Turquoise
    'rgba(230, 230, 250, 0.8)' // Lavender
    ],
    borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(72, 61, 139, 1)',
    'rgba(60, 179, 113, 1)',
    'rgba(255, 215, 0, 1)',
    'rgba(255, 69, 0, 1)',
    'rgba(238, 130, 238, 1)',
    'rgba(0, 255, 255, 1)',
    'rgba(127, 255, 0, 1)',
    'rgba(255, 0, 255, 1)',
    'rgba(30, 144, 255, 1)',
    'rgba(255, 255, 0, 1)',
    'rgba(128, 0, 128, 1)',
    'rgba(0, 128, 128, 1)',
    'rgba(255, 20, 147, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(218, 112, 214, 1)',
    'rgba(173, 255, 47, 1)',
    'rgba(255, 182, 193, 1)',
    'rgba(70, 130, 180, 1)',
    'rgba(240, 230, 140, 1)',
    'rgba(220, 20, 60, 1)',
    'rgba(176, 224, 230, 1)',
    'rgba(250, 128, 114, 1)',
    'rgba(143, 188, 143, 1)',
    'rgba(255, 160, 122, 1)',
    'rgba(216, 191, 216, 1)',
    'rgba(255, 228, 196, 1)',
    'rgba(245, 245, 220, 1)',
    'rgba(253, 245, 230, 1)',
    'rgba(240, 128, 128, 1)',
    'rgba(230, 230, 250, 1)',
    'rgba(255, 235, 205, 1)',
    'rgba(188, 143, 143, 1)',
    'rgba(240, 255, 240, 1)',
    'rgba(127, 255, 212, 1)',
    'rgba(240, 230, 140, 1)',
    'rgba(244, 164, 96, 1)',
    'rgba(255, 228, 181, 1)',
    'rgba(255, 222, 173, 1)',
    'rgba(255, 218, 185, 1)',
    'rgba(255, 192, 203, 1)',
    'rgba(224, 255, 255, 1)',
    'rgba(255, 0, 0, 1)',
    'rgba(0, 255, 0, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(255, 255, 255, 1)',
    'rgba(0, 0, 0, 1)',
    'rgba(169, 169, 169, 1)',
    'rgba(192, 192, 192, 1)',
    'rgba(211, 211, 211, 1)',
    'rgba(128, 128, 128, 1)',
    'rgba(105, 105, 105, 1)',
    'rgba(112, 128, 144, 1)',
    'rgba(47, 79, 79, 1)',
    'rgba(0, 139, 139, 1)',
    'rgba(178, 34, 34, 1)',
    'rgba(205, 92, 92, 1)',
    'rgba(240, 248, 255, 1)',
    'rgba(95, 158, 160, 1)',
    'rgba(222, 184, 135, 1)',
    'rgba(95, 158, 160, 1)',
    'rgba(139, 69, 19, 1)',
    'rgba(210, 105, 30, 1)',
    'rgba(178, 34, 34, 1)',
    'rgba(220, 20, 60, 1)',
    'rgba(65, 105, 225, 1)',
    'rgba(0, 0, 139, 1)',
    'rgba(75, 0, 130, 1)',
    'rgba(128, 0, 0, 1)',
    'rgba(25, 25, 112, 1)',
    'rgba(107, 142, 35, 1)',
    'rgba(139, 69, 19, 1)',
    'rgba(160, 82, 45, 1)',
    'rgba(165, 42, 42, 1)',
    'rgba(238, 232, 170, 1)',
    'rgba(218, 165, 32, 1)',
    'rgba(255, 250, 205, 1)',
    'rgba(173, 216, 230, 1)',
    'rgba(240, 128, 128, 1)',
    'rgba(176, 196, 222, 1)',
    'rgba(72, 209, 204, 1)',
    'rgba(230, 230, 250, 1)'
    ],
    borderWidth: 1
    }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    legend: {
    labels: {
    color: '#ddd'
    }
    },
    tooltip: {  // Enable tooltips
    enabled: true,
    backgroundColor: '#333',
    titleColor: '#fff',
    bodyColor: '#eee',
    borderColor: '#bb86fc',
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
    const chartType = chartTypeSelect.value;
   
   
    updateChart(labels, values, chartType);
    });
   
   
    // Initial chart setup (optional - for placeholder data)
    const initialLabels = ['Segment A', 'Segment B', 'Segment C'];
    const initialValues = [30, 40, 30];
    updateChart(initialLabels, initialValues, 'pie'); // Default to pie chart
   });
   