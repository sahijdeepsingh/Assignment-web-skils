
// This Function to handle search form submission. 
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('search-input').value;
    alert('Search for: ' + query);
  });
  
  // This function is log messages when a link is clicked. 
  document.querySelectorAll('.nav-link, .aside-link').forEach(link => {
    link.addEventListener('click', function(event) {
      console.log('Link clicked: ' + this.textContent);
    });
  });
    