window.onscroll = function() {
	scrollFunction(); 
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("arrow_up").style.display = "block";
	} else {
		document.getElementById("arrow_up").style.display = "none";
	}
}

function home_click() {
	var elmnt = document.getElementById("home");
	elmnt.scrollIntoView({
	 behavior: 'smooth', block: "start"}
	);
}

function about_click() {
	var elmnt = document.getElementById("about-scroll");
	elmnt.scrollIntoView(
	{ 
		behavior: 'smooth', block:'start'
		}
	);
}

function work_click() {
	var elmnt = document.getElementById("work-scroll");
	elmnt.scrollIntoView({
	behavior: 'smooth', block: 'start' });
}

function portfolio_click() {
	var elmnt = document.getElementById("portfolio");
	elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clients_click() {
	var elmnt = document.getElementById("clients");
	elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function contacts_click() {
	var elmnt = document.getElementById("contacts-scroll");
	elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function sendMail() {      
var name = document.getElementById('name').value;
var email = document.getElementById("mail").value;
var message = document.getElementById("message").value;

var link = `mailto:huytx0909@gmail.com?subject=[${name}] &body=${message}`
window.location.href = link;
}

function runText() {
var line = document.getElementById('home-h1');
var line1 = document.getElementById('home-h2');
var line2 = document.getElementById('home-h2-1');

var typewriter = new Typewriter(line, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(1000)
    .start();

var typewriter1 = new Typewriter(line1, {
    loop: true
});

typewriter1.typeString('Olaaaaa')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(1000)
    .start();

var typewriter2 = new Typewriter(line2, {
    loop: true
});

typewriter2.typeString('Amigooos')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(1000)
    .start();
}



// var words = {
// 	first : "FIRST LINE",
// 	second : "SECOND LINE", 
// 	third : "THIRD LINE"
// };

// 	// var h1 = document.getElementById("home-h1");
	

// 	var firstLine = words.first;
// 	var secondLine = words.second;
// 	var thirdLine = words.third;
// 	var speed = 80;
	
// var i = 0;
// function runText() {
// 	if (i < firstLine.length) {
//     document.getElementById("home-h1").innerHTML += firstLine.charAt(i);
//     i++;
//     setTimeout(runText, speed);
//   }
// }

// var x = 0;
// function runText1 () {
// 	if (x < secondLine.length) {
//     document.getElementById("home-h2").innerHTML += secondLine.charAt(x);
//     x++;
//     setTimeout(runText1, speed);
//   }
// }


// var y = 0;
// function runText2 () {
// 	if (y < thirdLine.length) {
//     document.getElementById("home-h2-1").innerHTML += thirdLine.charAt(y);
//     y++;
//     setTimeout(runText2, speed);
//   }
// }
