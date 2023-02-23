/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Get all the sections and the navbar list
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");

// Loop through all the sections to build the navbar
for (const section of sections) {
  // Create a new list item for the section
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
  navbarList.appendChild(listItem);

  // Add a click event listener to each navigation link
  const link = listItem.querySelector("a");
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default jump behavior
    section.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
  });
}

// Highlight the active section in the navbar
document.addEventListener("scroll", function() {
  // Get the current scroll position and window height
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Loop through all the sections
  for (const section of sections) {
    // Get the section's top and bottom position relative to the window
    const sectionTop = section.getBoundingClientRect().top + scrollPosition;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if the section is currently in the viewport
    if (sectionTop <= scrollPosition + (windowHeight * 0.5) && sectionBottom >= scrollPosition + (windowHeight * 0.5)) {
      // Remove the active class from all list items
      for (const listItem of navbarList.children) {
        listItem.classList.remove("active");
      }
      // Add the active class to the corresponding list item
      const listItem = navbarList.querySelector(`a[href="#${section.id}"]`).parentNode;
      listItem.classList.add("active");
    }
  }
});

