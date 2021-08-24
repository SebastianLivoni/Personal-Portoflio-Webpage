// Typewriter

var app = document.getElementById('test');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 40,
});

typewriter
  .pauseFor(1000)
  .typeString('an upcoming full stack developer.')
  .pauseFor(600)
  .deleteChars(32)
  .typeString(' <strong>19-year-old</strong> dude from Denmark.')
  //.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();
