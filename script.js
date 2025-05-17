const allCards = [...document.querySelectorAll('.card')];
const container = document.getElementById('cardsContainer');

// Initialize the cards but don't display them initially
allCards.forEach(card => {
  const quote = card.querySelector('.quote');
  const context = card.querySelector('div:last-child');
  context.classList.add('context');
  
  // Hide all cards initially
  card.style.display = 'none';
  
  // Set up click event to toggle context visibility
  card.addEventListener('click', () => {
    context.style.display = context.style.display === 'none' ? 'block' : 'none';
  });
});

document.getElementById('bookSelector').addEventListener('change', function () {
  const selected = this.value;
  container.innerHTML = '';

  // ✅ Hide the status message when a book is selected
  const statusMessage = document.querySelector('.status-message');
  if (statusMessage) {
    statusMessage.style.display = 'none';
  }

  if (selected === '') {
    // If no book selected, don't show any cards
    allCards.forEach(card => {
      card.style.display = 'none';
    });
  } else {
    // Filter cards by selected book
    allCards.forEach(card => {
      const book = getBook(card.querySelector('.character').textContent);
      if (book === selected) {
        card.style.display = 'block';
        container.appendChild(card);
      }
    });
  }
});

function getBook(character) {
  const macbethChars = ['Macbeth', 'Lady Macbeth', 'Banquo', 'Macduff', 'The Witches'];
  const signOfFourChars = ['Sherlock Holmes', 'Dr. Watson', 'Mary Morstan', 'Jonathan Small'];
  const inspectorCallsChars = ['Inspector Goole', 'Arthur Birling', 'Sybil Birling', 'Sheila Birling', 'Gerald Croft', 'Eric Birling'];
  
  if (macbethChars.includes(character)) return 'Macbeth';
  if (signOfFourChars.includes(character)) return 'The Sign of the Four';
  if (inspectorCallsChars.includes(character)) return 'An Inspector Calls';
  return '';
}

// Initialize the page
window.onload = function() {
  // Set all contexts to initially hidden
  document.querySelectorAll('.context').forEach(context => {
    context.style.display = 'none';
  });

  // Clear the container just to be sure
  container.innerHTML = '';
};
