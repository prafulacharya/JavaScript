//challenge 1:years in days

function ageindays() {
    var birthyear = prompt('What year you were born');
    var ageindays = (2020 - birthyear) * 365;
    var textanswer = document.createTextNode('your are ' + ageindays + ' days old');
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer)
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageindays').remove();
}

//challenge 2 generate cta
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "C:\Users\newusername\Desktop\JavaScriptCourse\image\paper.jpg"
    div.appendChild(image);
}

//challenge 3 rock paper scissor
function rpsgame(yourchoice) {
    console.log(yourchoice);
    var humanchoice, botchoice;

    humanchoice = yourchoice.id;
    botchoice = numberToChoice(randToRpsInt());

    console.log('computer choice', botchoice);
    //alert(botchoice);
    results = decidewinner(humanchoice, botchoice);
    console.log(results);

    message = finalmessage(results);
    console.log(message);


}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'Scissors'][number];
}

function decidewinner(yourchoice, computerchoice) {
    var rpsdatabase = {
        'rock': {
            'scissor': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'scissor': 0,
            'rock': 1,
            'paper': 0.5
        },
        'scissor': {
            'scissor': 0.5,
            'rock': 0,
            'paper': 1
        }
    };
    var yourscore = rpsdatabase[yourchoice][computerchoice];

    var computerscore = rpsdatabase[computerchoice][yourchoice];

    return [yourscore, computerscore];
}

function finalmessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return {
            'message': 'you lost',
            'color': 'red'
        };
    } else if (yourscore === 0.5) {
        return {
            'message': 'draw',
            'color': 'yello'
        };
    } else {
        return {
            'message': 'you Win',
            'color': 'green'
        };
    }
}