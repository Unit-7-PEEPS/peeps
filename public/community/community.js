const searchInput = document.getElementById('search');
  searchInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Enter key
      event.preventDefault(); // Prevent default form submission behavior
      performSearch(searchInput.value);
    }
  });

  function performSearch(query) {
    // Implement your search logic here, for example, redirect to a search results page or show search results on the same page.
    console.log(`Performing search for query "${query}"`);
  }