// lineGraph.js


document.addEventListener('DOMContentLoaded', function() {
   const dataForm = document.getElementById('data-form');
   const equationTypeSelect = document.getElementById('equation-type');
   const dataPointsInput = document.getElementById('data-points');
  
  
  
  
   const linearInput = document.getElementById('linear-input');
   const linearMInput = document.getElementById('linear-m');
   const linearBInput = document.getElementById('linear-b');
  
  
  
  
   const quadraticInput = document.getElementById('quadratic-input');
   const quadraticAInput = document.getElementById('quadratic-a');
   const quadraticBInput = document.getElementById('quadratic-b');
   const quadraticCInput = document.getElementById('quadratic-c');
  
  
  
  
   const cubicInput = document.getElementById('cubic-input');
   const cubicAInput = document.getElementById('cubic-a');
   const cubicBInput = document.getElementById('cubic-b');
   const cubicCInput = document.getElementById('cubic-c');
   const cubicDInput = document.getElementById('cubic-d');
  
  
  
  
   const lineChartCanvas = document.getElementById('lineChart').getContext('2d');
   let lineChart; // Declare chart variable
  
  
  
  
   function updateChart(data) {
   // Destroy existing chart if it exists
   if (lineChart) {
   lineChart.destroy();
   }
  
  
  
  
   lineChart = new Chart(lineChartCanvas, {
   type: 'line',
   data: {
   labels: data.labels,
   datasets: [{
   label: 'Data Points',
   data: data.values,
   borderColor: '#00ffff', // Cyan
   borderWidth: 3,
   fill: false,
   tension: 0.4 // Smooth the line
   }]
   },
   options: {
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
  
  
  
  
   function generateDataPoints(equationType, params) {
   let dataPoints = [];
   let labels = [];
   const numPoints = 100; // Increased number of points for smoother curves
   const xStart = -10;
   const xEnd = 10;
   const step = (xEnd - xStart) / numPoints;
  
  
  
  
   for (let i = 0; i < numPoints; i++) {
   const x = xStart + i * step;
   let y;
  
  
  
  
   switch (equationType) {
   case 'linear':
   y = params.m * x + params.b;
   break;
   case 'quadratic':
   y = params.a * Math.pow(x, 2) + params.b * x + params.c;
   break;
   case 'cubic':
   y = params.a * Math.pow(x, 3) + params.b * Math.pow(x, 2) + params.c * x + params.d;
   break;
   default:
   break;
   }
  
  
  
  
   dataPoints.push(y);
   labels.push(x.toFixed(2)); // Use x values as labels
   }
  
  
  
  
   return {
   labels: labels,
   values: dataPoints
   };
   }
  
  
  
  
   // Function to show/hide input groups
   function showHideInputGroups(equationType) {
   dataPointsInput.closest('.input-group').style.display = (equationType === 'data-points') ? 'block' : 'none';
   linearInput.style.display = (equationType === 'linear') ? 'block' : 'none';
   quadraticInput.style.display = (equationType === 'quadratic') ? 'block' : 'none';
   cubicInput.style.display = (equationType === 'cubic') ? 'block' : 'none';
   }
  
  
  
  
   // Initial setup: hide all input groups except the default
   showHideInputGroups(equationTypeSelect.value);
  
  
  
  
   // Event listener for equation type select
   equationTypeSelect.addEventListener('change', function() {
   showHideInputGroups(this.value);
   });
  
  
  
  
   dataForm.addEventListener('submit', function(e) {
   e.preventDefault();
   const equationType = equationTypeSelect.value;
  
  
  
  
   let data;
  
  
  
  
   if (equationType === 'data-points') {
   // Split by both comma and space
   const dataPoints = dataPointsInput.value.split(/[,\s]+/).map(Number).filter(x => !isNaN(x));
   const labels = dataPoints.map((_, index) => `Point ${index + 1}`);
  
  
  
  
   data = {
   labels: labels,
   values: dataPoints
   };
   } else {
   let params = {};
  
  
  
  
   switch (equationType) {
   case 'linear':
   params = {
   m: Number(linearMInput.value),
   b: Number(linearBInput.value)
   };
   break;
   case 'quadratic':
   params = {
   a: Number(quadraticAInput.value),
   b: Number(quadraticBInput.value),
   c: Number(quadraticCInput.value)
   };
   break;
   case 'cubic':
   params = {
   a: Number(cubicAInput.value),
   b: Number(cubicBInput.value),
   c: Number(cubicCInput.value),
   d: Number(cubicDInput.value)
   };
   break;
   default:
   break;
   }
  
  
  
  
   data = generateDataPoints(equationType, params);
   }
  
  
  
  
   updateChart(data);
   });
  
  
  
  
   // Initial chart setup (optional - for placeholder data)
   const initialData = {
   labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
   values: [10, 15, 13, 18, 20]
   };
   updateChart(initialData);
  });
  
  
  