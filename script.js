document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    const instantResults = document.getElementById('instant-results');
    const searchInputWrapper = document.querySelector('.search-input-wrapper'); // Get the wrapper
   
   
    // Define the URLs for the formula data
    const formulaURLs = {
    'Physics': 'pages/physics.html',
    'Chemistry': 'pages/chemistry.html',
    'Biology': 'pages/biology.html',
    'Algebra': 'pages/algebra.html',
    'Calculus': 'pages/calculus.html',
    'Statistics': 'pages/statistics.html',
    'Conversion': 'pages/conversion.html',
    'Graph': 'pages/graph.html'
    };
   
   
    let formulas = [];
   
   
    // Function to extract formulas from HTML content
    function extractFormulas(html, subject) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const formulaCards = doc.querySelectorAll('.formula-card');
   
   
    return Array.from(formulaCards).map(card => {
    let title = '';
    let content = '';
    let link = '';
   
   
    if (subject === 'Conversion') {
    const titleElement = card.querySelector('h2');
    title = titleElement ? titleElement.textContent.replace('☆', '').trim() : 'Untitled';
    const descriptionElement = card.querySelector('p');
    content = descriptionElement ? descriptionElement.textContent.trim() : '';
    const linkElement = card.querySelector('.card-link');
    link = linkElement ? linkElement.href : '';
    } else if (subject === 'Graph') {
    const titleElement = card.querySelector('h2');
    title = titleElement ? titleElement.textContent.replace('☆', '').trim() : 'Untitled';
    const descriptionElement = card.querySelector('.graph-info h3');
    content = descriptionElement ? descriptionElement.textContent.trim() : '';
    const linkElement = card.querySelector('.view-more');
    link = linkElement ? linkElement.href : '';
    } else {
    const titleElement = card.querySelector('h3');
    title = titleElement ? titleElement.textContent.replace('☆', '').trim() : 'Untitled';
    const formulaElement = card.querySelector('.formula');
    const descriptionElement = card.querySelector('.formula-description');
    link = card.querySelector('.details-link')?.href || '';
    const formula = formulaElement ? formulaElement.textContent.trim() : '';
    const description = descriptionElement ? descriptionElement.textContent.trim() : '';
    content = `${formula} - ${description}`;
    }
   
   
    return {
    title: title,
    content: content,
    subject: subject,
    link: link
    };
    });
    }
   
   
    // Function to fetch formulas from a given URL
    async function fetchFormulas(subject, url) {
    try {
    const response = await fetch(url);
    if (!response.ok) {
    throw new Error(`Failed to fetch ${subject} formulas from ${url}`);
    }
    const html = await response.text();
    const extracted = extractFormulas(html, subject);
    formulas = formulas.concat(extracted);
    } catch (error) {
    console.error(error);
    }
    }
   
   
    // Fetch all formulas
    async function loadAllFormulas() {
    const fetchPromises = Object.keys(formulaURLs).map(subject =>
    fetchFormulas(subject, formulaURLs[subject])
    );
    await Promise.all(fetchPromises);
    console.log('All formulas loaded:', formulas);
    }
   
   
    // Function to display results in the instant results container
    function displayResults(results) {
    instantResults.innerHTML = ''; // Clear previous results
    if (results.length === 0) {
    instantResults.style.display = 'none'; // Hide the container
    return;
    }
   
   
    const ul = document.createElement('ul');
    results.forEach(result => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = result.link;
    a.textContent = `${result.title} - ${result.content} (${result.subject})`;
    a.style.color = '#00ffff'; // Link color
    a.style.textDecoration = 'none'; // Remove underline
    li.appendChild(a);
    ul.appendChild(li);
    });
   
   
    instantResults.appendChild(ul);
    instantResults.style.display = 'block'; // Show the container
    adjustInstantResultsHeight(results.length); // Adjust height dynamically
    }
   
   
    // Function to adjust the height of instant results
    function adjustInstantResultsHeight(resultCount) {
    const maxResultsToShowScroll = 4; // Define when to show scroll
    const itemHeight = 28; // Approximate height of each item (Adjusted)
    const maxHeight = itemHeight * maxResultsToShowScroll;
   
   
    if (resultCount > 0 && resultCount <= maxResultsToShowScroll) {
    instantResults.style.maxHeight = 'none'; // auto adjust height
    instantResults.style.overflowY = 'hidden';
    } else if (resultCount > maxResultsToShowScroll) {
    instantResults.style.maxHeight = maxHeight + 'px';
    instantResults.style.overflowY = 'auto';
    }
    }
   
   
    // Search function
    function searchFormulas(query) {
    const searchTerm = query.toLowerCase();
    const results = formulas.filter(formula => {
    return (
    formula.title.toLowerCase().includes(searchTerm) ||
    formula.content.toLowerCase().includes(searchTerm) ||
    formula.subject.toLowerCase().includes(searchTerm)
    );
    });
    return results; // Return the results
    }
   
   
    // Event listener for input in the search input
    searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();
    const results = searchFormulas(query);
    displayResults(results); // Use displayResults for instant results
    });
   
   
    // Event listener for search button click
    searchBtn.addEventListener('click', function () {
    const query = searchInput.value.trim();
    const results = searchFormulas(query);
    displayResults(results); // Use displayResults for search button results
    });
   
   
    // Event listener for Enter key press in the search input
    searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    const results = searchFormulas(query);
    displayResults(results); // Use displayResults for Enter key results
    e.preventDefault(); // Prevent form submission
    }
    });
   
   
    // Load all formulas on page load
    loadAllFormulas().then(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
   
   
    if (isLoggedIn === 'true') {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    bookmarkBtn.style.display = 'inline-block';
    } else {
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    bookmarkBtn.style.display = 'none';
    }
   
   
    // Handle logout
    logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('isLoggedIn');
    window.location.reload(); // Refresh the page
    });
   
   
    // Handle bookmark button click
    bookmarkBtn.addEventListener('click', function () {
    window.location.href = 'bookmarks.html'; // Redirect to bookmarks page
    });
    });
   
   
    // Initial style setup
    instantResults.style.position = 'absolute';
    instantResults.style.width = '100%';
    instantResults.style.zIndex = '10';
   
   
    // Dynamically set the top position based on the search input wrapper
    function setInstantResultsPosition() {
    const rect = searchInputWrapper.getBoundingClientRect();
    instantResults.style.top = `${rect.bottom}px`;
    instantResults.style.left = `${rect.left}px`;
    }
   
   
    // Call this function on window resize to adjust position
    window.addEventListener('resize', setInstantResultsPosition);
   
   
    // Also, set the position initially
    setInstantResultsPosition();
   });
   