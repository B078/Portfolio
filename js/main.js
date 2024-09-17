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

document.querySelectorAll('.scroll').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('data-target'));
        
        // Check if the target exists before attempting to scroll
        if (target) {
            document.title = `Portfolio | ${target.getAttribute('data-title')}`;
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('Target not found:', this.getAttribute('data-target'));
        }
    });
});


document.getElementById('colorSwitch').addEventListener('click', () => {
    let colorValue = prompt('welkle kleur wil je?');

    if (colorValue === null || colorValue.trim() === '') {
        return; 
    }

    colorValue = colorValue.trim();
    if (isValidColor(colorValue)) {
        console.log(colorValue)
        // Apply the color to the theme color property --theme-color
        document.documentElement.style.setProperty('--theme-color', colorValue);
    } else {
        // Alert the user if the color is invalid
        alert('Probeer opnieuw daggoe');
    }


    function isValidColor(color) {
        const s = new Option().style;
        s.color = color;
        return s.color !== '';
    }
    })


    function updateMeterColors() {
        document.querySelectorAll('meter').forEach((meter) => {
            const percentageSpan = meter.nextElementSibling;
        
            let value = meter.value;
            let low = meter.low;
            let high = meter.high;
            let optimum = meter.optimum;
        
            if (value < low) {
                percentageSpan.style.color = 'red'; 
            } else if (value >= low && value <= high) {
                percentageSpan.style.color = 'orange';  
            } else if (value > high && value <= optimum) {
                percentageSpan.style.color = 'green';  
            } else {
                percentageSpan.style.color = '#FFD700'; 
            }
        });
    }
    

    updateMeterColors();
    
    




