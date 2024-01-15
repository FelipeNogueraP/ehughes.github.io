function includeTopNavigation() {
  // Get the current URL
  var currentUrl = window.location.pathname;

  // Determine if it's the home page or engage page
  var isHomePage = currentUrl === '/' || currentUrl.toLowerCase().includes('home');
  var isEngagePage = currentUrl.toLowerCase().includes('engage');

  var navigationLinks = isHomePage ? `<a class="nav-link" href="engage">Offering</a>` : '';

  var topNavigationHTML = `
      <div class="logo-container">
          <img class="logo" onclick="window.location.href='/';" src="/static/assets/logo.png" alt="Wavenumber logo">
      </div>
      <div class="navigation-links">
          ${navigationLinks}
      </div>
  `;

  var topNavElement = document.createElement("div");
  topNavElement.id = "top_nav";
  topNavElement.classList.add("top_nav");
  topNavElement.innerHTML = topNavigationHTML;
  document.body.appendChild(topNavElement);
}

includeTopNavigation();
