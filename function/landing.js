// function/landing.js

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    // Handle click event for the "View Projects" button
    const projectsButton = document.getElementById('projects');
    if (projectsButton) {
        projectsButton.addEventListener('click', function() {
            const projectsSection = document.getElementById('projects');
            
            if (projectsSection) {
                // Scroll to the projects section when the button is clicked
                scroll.animateScroll(projectsSection);
            }
        });
    }
});
