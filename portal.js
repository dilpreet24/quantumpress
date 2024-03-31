document.addEventListener("DOMContentLoaded", function() {
    const page1Btn = document.getElementById("page1-btn");
    const page2Btn = document.getElementById("page2-btn");
    const page3Btn = document.getElementById("page3-btn");
    const contentDiv = document.getElementById("content");
  
    // Function to load content from HTML file
    function loadContent(pageUrl) {
      fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
          contentDiv.innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
    }
  
    // Event listeners for buttons
    page1Btn.addEventListener("click", function() {
      loadContent("page1.html");
    });
  
    page2Btn.addEventListener("click", function() {
      loadContent("page2.html");
    });
  
    page3Btn.addEventListener("click", function() {
      loadContent("page3.html");
    });
  
    // Initialize content on page load
    loadContent("page1.html");
  });
  

  document.getElementById('openPopupButton').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}