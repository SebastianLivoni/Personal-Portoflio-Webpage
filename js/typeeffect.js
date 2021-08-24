// Typewriter

var h2 = document.getElementById('typewriter-h2');

var typewriter = new Typewriter(h2, {
  loop: false,
  delay: 80,
  deleteSpeed: 60,
});

typewriter
  .typeString("Hey. ")
  .pauseFor(1000)
  .typeString("I'm Sebastian.")
  .start();

var h4 = document.getElementById('typewriter-h4');

var typewriter = new Typewriter(h4, {
  loop: false,
  delay: 80,
  deleteSpeed: 60,
});

typewriter
  .pauseFor(3800)
  .typeString("an upcoming full stack developer.")
  //.callFunction(() => {})
  .start();