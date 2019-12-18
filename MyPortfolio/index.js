let i = 0;
let i2 = 0;
let i3 = 0;
const txt = 'Projects';
const txt2 = 'About Me';
const txt3 = 'Contact';
const speed = 500;

function typeWriter() {
  if (i < txt2.length) {
    document.getElementById("first").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2() {
    if (i2 < txt.length) {
      document.getElementById("second").innerHTML += txt.charAt(i2);
      i2++;
      setTimeout(typeWriter2, speed);
    }
  }

function typeWriter3() {
    if (i3 < txt3.length) {
      document.getElementById("third").innerHTML += txt3.charAt(i3);
      i3++;
      setTimeout(typeWriter3, speed);
    }
  }
  
typeWriter()
typeWriter2()
typeWriter3()