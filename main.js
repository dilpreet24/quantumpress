$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });


document.addEventListener("DOMContentLoaded", function() {
  var section = document.getElementById('publishingbtn');
  var portal = document.getElementById('portal'); 
  // Add a click event listener
  section.addEventListener('click', function() {
    window.location.href = 'portal2.html';
  });
  portal.addEventListener('click', function() {
    window.location.href = 'portal2.html';
  });

});


function openVFXPage() {
  // Change the URL to the desired VFX page
  window.open("exam.html", "_blank");
}
let currentIndex = 0;
const contents = document.querySelectorAll('.contente');

function showContent(index) {
    contents.forEach(content => {
        // content.style.display = 'none';
    });
    contents[index].style.display = 'block';
}

function nextContent(){
    currentIndex = (currentIndex + 1) % contents.length;
    showContent(currentIndex);
}

showContent(currentIndex);
setInterval(nextContent, 3000);

const limit1 = 200; // Set the limit for number1
const limit2 = 70; // Set the limit for number2
const limit3 = 100; // Set the limit for number3
const limit4 = 90; // Set the limit for number4

let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;

function updateNumbers() {
    document.getElementById('number1').innerText = number1;
    document.getElementById('number2').innerText = number2;
    document.getElementById('number3').innerText = number3;
    document.getElementById('number4').innerText = number4;

    // Increment numbers and stop when they reach their limits
    if (number1 < limit1) {
        number1++;
    }
    if (number2 < limit2) {
        number2++;
    }
    if (number3 < limit3) {
        number3++;
    }
    if (number4 < limit4) {
        number4++;
    }
}

// Update numbers every second
const intervalId = setInterval(updateNumbers, 100);

// Stop updating numbers when all numbers reach their limits
const checkLimitIntervalId = setInterval(() => {
    if (number1 === limit1 && number2 === limit2 && number3 === limit3 && number4 === limit4) {
        clearInterval(intervalId);
        clearInterval(checkLimitIntervalId);
    }
}, 1000);





var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 1200;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };




