// Dynamic Greeting Based on Time of Day
window.onload = function () {
    const greeting = document.createElement('div');
    greeting.id = 'greeting';
    greeting.style.position = 'fixed';
    greeting.style.top = '10px';
    greeting.style.right = '10px';
    greeting.style.padding = '10px 20px';
    greeting.style.backgroundColor = '#ff751a';
    greeting.style.color = 'white';
    greeting.style.borderRadius = '8px';
    greeting.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    greeting.style.zIndex = '1000';
    greeting.style.fontSize = '1.2em';
    greeting.style.fontWeight = 'bold';
    greeting.style.opacity = '0';
    greeting.style.transition = 'opacity 1s ease';

    document.body.appendChild(greeting);

    const now = new Date();
    const hour = now.getHours();
    if (hour >= 5 && hour < 12) {
        greeting.innerText = 'Good Morning! Welcome to my campaign website!';
    } else if (hour >= 12 && hour < 18) {
        greeting.innerText = 'Good Afternoon! Thanks for visiting!';
    } else {
        greeting.innerText = 'Good Evening! Let’s make this campaign awesome!';
    }

    setTimeout(() => {
        greeting.style.opacity = '1';
    }, 500);

    // Automatically hide the greeting after 5 seconds
    setTimeout(() => {
        greeting.style.opacity = '0';
        setTimeout(() => greeting.remove(), 1000);
    }, 5000);
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑ Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.fontSize = '1em';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.backgroundColor = '#ff751a';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.opacity = '0';
scrollToTopButton.style.transition = 'opacity 0.3s ease';
scrollToTopButton.style.zIndex = '1000';

document.body.appendChild(scrollToTopButton);

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.opacity = '1';
    } else {
        scrollToTopButton.style.opacity = '0';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Glowing header effect on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 6px 16px rgba(255, 117, 26, 0.5)';
    } else {
        header.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
    }
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
});

sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Add hover effect to the image
const image = document.querySelector('.image-container img');
if (image) {
    image.addEventListener('mouseover', function () {
        this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
    });
    image.addEventListener('mouseout', function () {
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
}

// Pop-up message when the user clicks the email link
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
    emailLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert(
            'Feel free to send me an email! I look forward to hearing from you.'
        );
        window.location.href = a.href; // Optionally redirect to the email link after the alert
    });
}