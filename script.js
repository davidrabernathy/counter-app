var counter = document.getElementById('counter');
var increaseButton = document.getElementById('increase');
var decreaseButton = document.getElementById('decrease');
var resetButton = document.getElementById('reset');

var count = 0; // counter set to 0

function animateCounter()
{
  counter.classList.add('bump');
  setTimeout(function()
  {
    counter.classList.remove('bump');
  }, 200);
}

increaseButton.addEventListener('click', function()
  {
    count = count + 1;
    counter.textContent = count;
    animateCounter();
  });

decreaseButton.addEventListener('click', function()
  {
    count = count - 1;
    counter.textContent = count;
    animateCounter();
  });

resetButton.addEventListener('click', function()
  {
    count = 0;
    counter.textContent = count;
    animateCounter();
  });


