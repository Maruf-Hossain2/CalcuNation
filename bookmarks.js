document.addEventListener('DOMContentLoaded', function() {
    // Function to update bookmarks display
    function updateBookmarksDisplay() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const bookmarksContainer = document.getElementById('bookmarks');
    bookmarksContainer.innerHTML = ''; // Clear existing bookmarks
   
   
    if (bookmarks.length === 0) {
    bookmarksContainer.innerHTML = '<p>No bookmarks saved.</p>';
    return;
    }
   
   
    bookmarks.forEach(bookmark => {
    const bookmarkDiv = document.createElement('div');
    bookmarkDiv.classList.add('bookmark-item');
   
   
    // Create the link
    const formulaLink = document.createElement('a');
    formulaLink.href = bookmark.url || '#'; // Use the stored URL
    formulaLink.textContent = bookmark.formula; // Display the formula as the link text
    formulaLink.style.color = '#2e8b57'; // Sea Green
    formulaLink.style.textDecoration = 'none'; // Remove underline
    formulaLink.style.fontWeight = '600';
   
   
    // Append the topic and the link to the bookmark div
    bookmarkDiv.innerHTML = `<strong>${bookmark.topic}:</strong> `;
    bookmarkDiv.appendChild(formulaLink);
    bookmarksContainer.appendChild(bookmarkDiv);
    });
    }
   
   
    // Initial call to display bookmarks on page load
    if (document.getElementById('bookmarks')) {
    updateBookmarksDisplay();
    }
   
   
    // Bookmark functionality
    document.querySelectorAll('.bookmark-star').forEach(star => {
    star.addEventListener('click', function() {
    const formula = this.dataset.formula;
    const topic = this.dataset.topic;
    const url = this.dataset.url; // Get the URL from the data-url attribute
   
   
    // Get existing bookmarks
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
   
   
    // Check if the formula is already bookmarked
    const isBookmarked = bookmarks.some(bookmark => bookmark.formula === formula && bookmark.topic === topic);
   
   
    if (!isBookmarked) {
    bookmarks.push({ formula: formula, topic: topic, url: url }); // Store the URL
    this.textContent = '★'; // Filled star
    this.classList.add('active'); // Add active class
    } else {
    bookmarks = bookmarks.filter(bookmark => !(bookmark.formula === formula && bookmark.topic === topic));
    this.textContent = '☆'; // Empty star
    this.classList.remove('active'); // Remove active class
    }
   
   
    // Save bookmarks to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   
   
    // Update bookmarks display if on bookmarks page
    if (document.getElementById('bookmarks')) {
    updateBookmarksDisplay();
    }
    });
   
   
    // Set initial star state based on bookmarks
    const formula = star.dataset.formula;
    const topic = star.dataset.topic;
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const isBookmarked = bookmarks.some(bookmark => bookmark.formula === formula && bookmark.topic === topic);
    star.textContent = isBookmarked ? '★' : '☆';
    if (isBookmarked) {
    star.classList.add('active'); // Add active class if bookmarked
    }
    });
   });
   