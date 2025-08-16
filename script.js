// Love quotes
const quotes = [
  'The world is a brighter with you in it. 🌟',
  'You are my sunshine on the cloudiest days ☀️',
  'I fall for you more and more every day 💕',
  'You make my heart smile 😊💓',
];

let quoteIndex = 0;

// Rotate quotes every 3s with fade animation
function cycleQuotes() {
  const quoteEl = document.getElementById('quote');
  if (!quoteEl) return;

  quoteEl.classList.remove('show'); // fade out
  setTimeout(() => {
    quoteEl.textContent = quotes[quoteIndex];
    quoteEl.classList.add('show'); // fade in
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 1000); // wait for fade-out before showing new one
}

window.addEventListener('DOMContentLoaded', () => {
  const quoteEl = document.getElementById('quote');
  if (quoteEl) {
    // show first quote instantly
    quoteEl.textContent = quotes[quoteIndex];
    quoteEl.classList.add('show');
    quoteIndex = (quoteIndex + 1) % quotes.length;

    // change quotes every 3s
    setInterval(cycleQuotes, 3000);
  }
});

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 500);

// Typing effect for secret message
function revealMessage() {
  const msg = 'You are the best thing that ever happened to me 💕🌎✨';
  const secretEl = document.getElementById('secret');
  secretEl.classList.remove('hidden');
  secretEl.textContent = '';

  let i = 0;
  function typing() {
    if (i < msg.length) {
      secretEl.textContent += msg.charAt(i);
      i++;
      setTimeout(typing, 80);
    }
  }
  typing();
}

// Fortune messages
// const fortunes = [
//   'You’re my today and all of my tomorrows 💖',
//   'A hug from you is my favorite medicine 🤗',
//   'My heart skips a beat every time I see you 💓',
//   'You are the peanut butter to my jelly 🥪💕',
//   'Life with you is the sweetest fortune 🥰',
//   'Forever is not long enough when it’s with you ⏳💞',
// ];

const fortunes = [
  'A smile is your passport into the hearts of others.',
  'What ever your goal is in life, embrace it visualize it, and for it will be yours.',
  'A dream you have will come true.',
  'Never give up.',
  'You will become great if you believe in yourself.',
  'Wealth awaits you very soon.',
  'You are very talented in many ways.',
  'A new voyage will fill your life with untold memories.',
  'You will travel to many exotic places in your lifetime.',
  'Your ability for accomplishment will follow with success.',

  'Happiness is right in front of you.',
  'Good things are coming your way.',
  'Believe in miracles, they happen every day.',
  'Your kindness will lead you to unexpected joys.',
  'Success is the child of determination and persistence.',
  'You will discover beauty in the most unexpected places.',
  'Your heart will guide you to your dreams.',
  'Small steps every day lead to big achievements.',
];

function showFortune() {
  const fortuneEl = document.getElementById('fortune');
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  fortuneEl.textContent = randomFortune;
  fortuneEl.classList.remove('hidden');

  // restart fade-in
  fortuneEl.classList.remove('show');
  setTimeout(() => {
    fortuneEl.classList.add('show');
  }, 100);
}

// Create falling cookies
function createCookie() {
  const cookie = document.createElement('div');
  cookie.classList.add('cookie');
  cookie.innerHTML = '🥠'; // can replace with 🍪 or an image
  cookie.style.left = Math.random() * 100 + 'vw';
  cookie.style.animationDuration = 4 + Math.random() * 3 + 's';

  // Click event → show message + pop effect
  cookie.addEventListener('click', () => {
    showFortune();
    cookie.classList.add('pop'); // trigger scale + fade
    setTimeout(() => cookie.remove(), 400); // remove after animation
  });

  document.getElementById('cookies').appendChild(cookie);

  // Auto remove if it wasn’t clicked
  setTimeout(() => {
    if (cookie.parentNode) cookie.remove();
  }, 7000);
}

// spawn cookies every 800ms
setInterval(createCookie, 800);
