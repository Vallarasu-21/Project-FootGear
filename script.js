// Get the search input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Attach an event listener to the button
searchButton.addEventListener('click', function() {
      // Get the search query from the input field
      const query = searchInput.value;

    // Perform the search operation
    performSearch(query);
});

// Function to perform the search operation
function performSearch(query) {
  // Replace this with your desired search functionality
  console.log('Searching for:', query);
}

        function scrollTopAnimated() {
            $("html, body").animate(
                { scrollTop: "0" }, 3000);
        }

        $(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
        }
        });