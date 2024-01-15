var topNavigationHTML = `
  <div class="logo-container">
    <img class="logo" onclick="window.location.href='home_page.html';" src="static/assets/logo.png" alt="Wavenumber logo">
  </div>

  <div class="navigation-links">
    <a class="nav-link" href="engage.html">Offering</a>
  </div>

`;

function includeTopNavigation() {

 	var topNavElement = document.createElement("div");
    topNavElement.id = "top_nav";
    topNavElement.classList.add("top_nav"); 
 
	// Set the inner HTML of the created element
    topNavElement.innerHTML = topNavigationHTML;

    // Use document.body as the parent container
     document.body.appendChild(topNavElement);
}

includeTopNavigation();