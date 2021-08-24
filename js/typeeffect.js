// Typewriter

var h2 = document.getElementById('typewriter-h2');

var typewriter = new Typewriter(h2, {
  loop: false,
  delay: 75,
  deleteSpeed: 60,
});

typewriter
  //.pauseFor(1000)
  .typeString("Hey. ")
  //.typeString("<h4>an upcoming full stack developer.</h4>")
  .pauseFor(1000)
  .typeString("I'm Sebastian.")
  //.deleteChars(32)
  //.typeString(' <strong>19-year-old</strong> dude from Denmark.')
  //.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  //.pauseFor(1000)
  .start();

var h4 = document.getElementById('typewriter-h4');

var typewriter = new Typewriter(h4, {
  loop: false,
  delay: 75,
  deleteSpeed: 60,
});

typewriter
  //.pauseFor(1000)
  //.typeString("<h4>an upcoming full stack developer.</h4>")
  .pauseFor(3000)
  .typeString("an upcoming full stack developer.")
  //.deleteChars(32)
  //.typeString(' <strong>19-year-old</strong> dude from Denmark.')
  //.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  //.pauseFor(1000)
  .start();