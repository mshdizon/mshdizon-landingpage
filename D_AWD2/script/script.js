const bowl = document.querySelector('.bowl');
const liquid = document.querySelector('.liquid');
const sparklesContainer = document.querySelector('.sparkles-container');

let isAnimationRunning = true;

const toggleAnimation = () => {
  if (isAnimationRunning) {
    bowl.style.animationPlayState = 'paused';
    liquid.style.animationPlayState = 'paused';
    removeSparkles(); // Remove sparkles when animation is paused
  } else {
    bowl.style.animationPlayState = 'running';
    liquid.style.animationPlayState = 'running';
    createSparkles(); // Create sparkles when animation resumes
  }
  isAnimationRunning = !isAnimationRunning;
};

bowl.addEventListener('click', toggleAnimation);

// Function to create sparkles
const createSparkles = () => {
  const sparkleCount = 10; // Number of sparkles
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.animationDuration = Math.random() * 0.5 + 0.5 + 's';
    sparklesContainer.appendChild(sparkle);
  }
};

// Function to remove sparkles
const removeSparkles = () => {
  sparklesContainer.innerHTML = ''; // Remove all sparkles
};
