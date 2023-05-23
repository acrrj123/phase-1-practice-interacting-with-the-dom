//Create variables for buttons, counter, number of likes, comment form and 
//list of comments 
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const counter = document.getElementById('counter');
const likes = document.querySelector('ul.likes');
const commentForm = document.querySelector('#comment-form');
const comments = document.querySelector('#list');

let paused = false;
let numberTracker = {};
//Set the interval for incrementing the counter every 1 second
let interval = setInterval(incrementCounter, 1000);

//Create event listeners on buttons and comment submission form
plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
pause.addEventListener('click', buttonPaused);
heart.addEventListener('click', likeHeart);
commentForm.addEventListener('submit', handleSubmit);

//Create callback functions for the event listeners
function incrementCounter() {
  counter.innerText = parseInt(counter.innerText) + 1
};
function decrementCounter() {
  counter.innerText = parseInt(counter.innerText) - 1
};
function buttonPaused() {
  paused = !paused
  if(paused) {
    clearInterval(interval)
    pause.innerText = 'resume'
  }
  else {
    interval = setInterval(incrementCounter, 1000)
    pause.innerText = 'pause'
  }
};
function likeHeart() {
  let second = counter.innerText
  numberTracker[second] = numberTracker[second] || 0
  numberTracker[second] += 1
    renderLikes()
};
function renderLikes() {
  likes.innerHTML = ''
  for (let key in numberTracker) {
    const li = document.createElement('li')
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li)
  }
};
function handleSubmit(event) {
  event.preventDefault()
  const comment = document.querySelector('input').value
  const li = document.createElement('li')
  li.innerText = comment
  comments.append(li)
  event.target.reset()
}