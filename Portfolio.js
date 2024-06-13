document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('title');
  const text = title.textContent.trim().split('');

  title.textContent = '';

  const underscore = document.createElement('span');
  underscore.textContent = '_';
  underscore.classList.add('blink');
  title.appendChild(underscore);

  text.forEach((letter, index) => {
      setTimeout(() => {
          // Create a span for the letter
          const span = document.createElement('span');
          span.textContent = letter;
          span.style.opacity = '0';
          span.style.transition = 'opacity 0.6s';

          // Insert the letter before the underscore
          title.insertBefore(span, underscore);

          // Force reflow to apply the transition
          span.offsetHeight;

          // Show the letter and move the underscore
          span.style.opacity = '1';

          // If this is the last letter, remove the underscore after it appears
          if (index === text.length - 1) {
              setTimeout(() => {
                  underscore.style.display = 'none';
              }, 1000);
          }
      }, index * 1000);
  });
});

// CSS to make the underscore blink
const style = document.createElement('style');
style.textContent = `
  .blink {
      animation: blink-animation 0.5s steps(2, start) infinite;
      color : #515151c5;
  }

  @keyframes blink-animation {
      50% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
`;
document.head.appendChild(style);

const currentYear = new Date().getFullYear();
        // Set the content of the span with id "year"
        document.getElementById('year').textContent = currentYear;
