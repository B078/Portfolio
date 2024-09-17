// Data for typing effect
let data = ["Front-end Developer", "Back-end Developer", "Gamer"];
let totalTypingDuration = 0;
let typingSpeed = 100;

// Calculate total duration required for typing effect
for (let i = 0; i < data.length; ++i) {
    totalTypingDuration += 2 * data[i].length;
}
totalTypingDuration += 4 * data.length;

function type() {
    let timeElapsed = 0;
    
    for (let i = 0; i < data.length; ++i) {
        let charCount = 0;
        
        // Typing effect
        while (charCount <= data[i].length) {
            let currentCharCount = charCount;
            setTimeout(() => {
                document.getElementById('typewriter').innerHTML = `${data[i].substr(0, currentCharCount)}`;
            }, timeElapsed * typingSpeed);
            ++charCount;
            ++timeElapsed;
        }
        
        // Prepare for backspacing
        --charCount;
        timeElapsed += 2;
        
        // Backspacing effect
        while (charCount >= 0) {
            let currentCharCount = charCount;
            setTimeout(() => {
                document.getElementById('typewriter').innerHTML = `${data[i].substr(0, currentCharCount)}`;
            }, timeElapsed * typingSpeed);
            --charCount;
            ++timeElapsed;
        }
    }
    
    // Restart the typing effect after completing all items
    setTimeout(() => {
        type();
    }, totalTypingDuration * typingSpeed);
}

type();

function setupScrollButtons() {
    document.querySelectorAll('.scroll').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSelector = this.getAttribute('data-target');
            const target = document.querySelector(targetSelector);
            if (target) {
                document.title = `Portfolio | ${target.getAttribute('data-title')}`;
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Target not found:', targetSelector);
            }
        });
    });
}

// Color switch functionality
function setupColorSwitch() {
    document.getElementById('colorSwitch').addEventListener('click', () => {
        const colorValue = prompt('Enter the color:');
        if (colorValue && isValidColor(colorValue)) {
            document.documentElement.style.setProperty('--theme-color', colorValue.trim());
        } else {
            alert('Invalid color. Please try again.');
        }
    });
}

function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}

// Update meter colors based on value
function updateMeterColors() {
    document.querySelectorAll('meter').forEach((meter) => {
        const percentageSpan = meter.nextElementSibling;
        const value = meter.value;
        const { low, high, optimum } = meter;

        if (value < low) {
            percentageSpan.style.color = 'red';
        } else if (value <= high) {
            percentageSpan.style.color = 'orange';
        } else if (value <= optimum) {
            percentageSpan.style.color = 'green';
        } else {
            percentageSpan.style.color = '#FFD700'; // Gold
        }
    });
}

// Scroll to top button functionality
function setupScrollToTopButton() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const homeSection = document.querySelector('.home');
    const skillsSection = document.querySelector('.skills');

    function checkScroll() {
        const homeRect = homeSection.getBoundingClientRect();
        const skillsRect = skillsSection.getBoundingClientRect();
        if (homeRect.bottom < 0 && skillsRect.top <= window.innerHeight) {
            showScrollToTopButton();
        } else {
            hideScrollToTopButton();
        }
    }

    function showScrollToTopButton() {
        scrollToTopButton.style.visibility = 'visible';
        scrollToTopButton.style.opacity = '1';
    }

    function hideScrollToTopButton() {
        scrollToTopButton.style.visibility = 'hidden';
        scrollToTopButton.style.opacity = '0';
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', checkScroll);
    scrollToTopButton.addEventListener('click', scrollToTop);
    checkScroll(); // Initial check
}

// Initialize functionality
function initialize() {
    setupScrollButtons();
    setupColorSwitch();
    updateMeterColors();
    setupScrollToTopButton();
}

document.addEventListener('DOMContentLoaded', initialize);


