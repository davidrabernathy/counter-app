# Interactive Counter App

Simple and clean, responsive counter app built with vanilla Javascript, HTML5, and CSS3.

Live Demo Here:

# Features

- Increment/Decrement: Adjust counter value with inuitive and responsive buttons
- Reset Functionality: Quickly return to zero by clicking the reset buttons
- Smooth Animations: Visual feedback with CSS transform animations
- Responsive Design: Works on all screen sizes
- Clean UI: Modern gradient background with centered card layout

# Technologies Used

- HTML5: Semantic structure
- CSS3: Modern styling with flexbox, gradients, and animations
- Vanilla Javascript: DOM manipulation and event handling

# Project structure
```
counter-app/
├──index.html  # main html structure
├──style.css   # styling and animations
└── script.js   # counter logic and interactivty
```

# Key concepts

- DOM Manipulation: Using 'getElementById' and 'textContent' to update elements
- Event Handling: Click event listeners for user interactions
- CSS Animations: Transform and transition properties for visual effects
- State Management: Tracking counter value with Javascript variables
- Seperation of Concerns: Clean seperation of HTML, CSS, and Javascript
- Responsive Design: Flexbox centering and mobile-friendly layout

# How It Works

- Javascript Logic
    ```Javascript
    // get elements
    var counter = document.getElementById('counter');
    var count = 0;

    // increase button
    increaseButton.addEventListener('click', function()
    {
      count = count + 1;
      counter.textContent = count;
      animateCounter(); // triggers css animation
    });
    ```

- CSS Animation
    ```css
     #counter.bump
    {
    transform: scale(1.2); /* grows 20% larger */
    }
    ```

    The animation is triggered by adding/removing the 'bump' class with Javascript, creating a smooth viusal bounch effect

# Setup

1. Clone repository
```bash
git clone https://github.com/davidrabernathy/counter-app.git
```

2. Open 'index.html' on browser
```bash
cd counter-app
open index.html
```

And that's all! No other stuff like build processes or dependecies required.


# What I Learned

- How to manipulate the DOM with vanilla Javascript
- CSS Flexbox for centering and responsive layouts
- Triggering CSS animations with Javascript class manipulation
- Event-driven programming patterns
- Proper project structure with seperated concerns
- Git version control and Github Pages deployment

# Future Improvements

- Add keyboard shortcuts (up/down arrows)
- Save counter value to localStorage
- Add custome increment amounts
- Include sound effects
- Dark mode toggle
- Counter history/undo feature
