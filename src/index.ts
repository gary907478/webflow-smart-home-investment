import { showVersion } from '$utils/showVersion';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Get the current URL path
  const currentPath = window.location.pathname;

  // Check if the current path starts with "/blogs/"
  if (currentPath.startsWith('/services/')) {
    // Find the navbar link that corresponds to the current page
    const navbarLinks = document.querySelector('#nav-services');
    navbarLinks.classList.add('nav-current-active');
  }
  // Check if the current path starts with "/blogs/"
  if (currentPath.startsWith('/blog/')) {
    // Find the navbar link that corresponds to the current page
    const navbarLinks = document.querySelector('#nav-blogs');
    navbarLinks.classList.add('nav-current-active');
  }
  const name = 'v0.0.7';
  showVersion(name);
});
