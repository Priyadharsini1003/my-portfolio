function toggleMenu() {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//         // Calculate the position of the section relative to the top of the page
//         const offsetTop = section.offsetTop;
//         const offsetTop = section.off;
        
//         // Set the scrolling behavior with desired speed (in milliseconds)
//         const scrollOptions = {
//             top: offsetTop,
//             behavior: 'smooth',
//             duration:10000 // or 'auto' for immediate scrolling without animation
//             // Add desired duration for smooth scrolling
//             // e.g., duration: 1000 for 1 second duration
//         };

//         // Scroll to the section
//         window.scrollTo(scrollOptions);
//     }

