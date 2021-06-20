/**
 * FEATURES TO IMPLEMENT
 * Show percentage on survey box
 * Have it fill out slowly when user clicks (animation, reflecting the percentage)
 * Find a way to host this app somewhere so that it can host surveys for multiple users
 * Implement a way to make the user build their own surveys
 * Change the variable names and class names to be neutral
 */

if (!sessionStorage.getItem('si') || !sessionStorage.getItem('no')) {
  sessionStorage.setItem('si', 0);
  sessionStorage.setItem('no', 0);
}

const option1 = document.querySelector('.A');
const option2 = document.querySelector('.B');
const bocaBad = document.getElementById('boca-bad');
const bocaGood = document.getElementById('boca-good');
const userVoteMsg = document.querySelector('.has-user-voted');
let hasUserVoted = false;

const setTextContents = () => {
  option1.textContent = sessionStorage.si;
  option2.textContent = sessionStorage.no;
}

const displayCounts = () => {
  if(hasUserVoted) {
    option1.style.display = 'block';
    option2.style.display = 'block';
  }
}

bocaBad.addEventListener('click', () => {
  if (!hasUserVoted) {
    let currVotes = parseInt(sessionStorage.getItem('si'));
    currVotes++;
    sessionStorage.si = currVotes;
    setTextContents();
    userVoteMsg.style.display = 'block';
  }
  hasUserVoted = true;
  displayCounts();
});

bocaGood.addEventListener('click', (e) => {
  if (!hasUserVoted) {
    let currVotes = parseInt(sessionStorage.getItem('no'));
    currVotes++;
    sessionStorage.no = currVotes;
    setTextContents();
    userVoteMsg.style.display = 'block';
  }
  hasUserVoted = true;
  displayCounts();
});



