// JavaScript source code
var harryPotterPhrases1 = []
function readData() {
    fetch("https://MerveTanrikulu.github.io/Odevler/Proje/Phrase.txt")
        .then(res => res.text())
        .then(res => [dataSplit(res)])
}
function dataSplit(text) {
    let txt = text.split('\n')
    for (let line of txt) {
        let s1 = line.split('*');
        harryPotterPhrases1.push(s1[0]);
    }
    return harryPotterPhrases1;

}
readData();

var Hangman = {
    //harryPotterPhrases: ["Quidditch", "Fluffy", "Hedwig", "Mirror of Erised", "Leaky Cauldron", "Invisibility Cloak", "Godric Gryffindor","Albus Dumbledore","Severus Snape","Ollivander",
    //    "Chessboard Chamber", "Azkaban", "Felix Felicis", "Helga Hufflepuff", "Salazar Slytherin", "Sirius Black", "Remus Lupin","Marauders Map", "Patronus", "Dementor","Dobby", "Catchers",
    //    "Nicolas Flamel", "Weasleys Clock", "Wand", "Neville Longbottom", "Umbrige", "Buckbeak", "Hogwarts Express","Rowena Ravenclaw","Patronus"],

    harryPotterPhrases: [],
    phrase: [],
    displayPhrase: [],
    control:[],
    userGuess:[] ,
    userScore: 0,
    numWrongGuesses: 0,
    numBodyPartsShown: 0,

    PlayAuto: function () {
        document.getElementById("myAudio").play();
    },
    PauseAuto: function () {
        document.getElementById("myAudio").pause();
    },
    initialize: function () {
        this.harryPotterPhrases = harryPotterPhrases1.copyWithin(0, 0, harryPotterPhrases1.length);
        this.randomDisplayPhrase();
        this.showDisplayPhrase();
        this.showAvailableLetters();
    },
    showAvailableLetters: function () {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (var i = 0; i < alphabet.length; i++) {//loop through this.displayPhrase
            var div = document.createElement("div");//create div
            div.setAttribute("class", "availableLetter");//add class name "letter" to div
            div.setAttribute("id", "al" + (alphabet[i]));//add unique id "al0","al1" etc.
            div.setAttribute("onclick", "Hangman.onClick(event)");//event handler to each div.
            div.innerHTML = alphabet[i];//make the divs value equal to the letter in this.displayPhrase
            document.getElementById("availableLetters").appendChild(div);//add div to parent container      
        }
    },
    randomDisplayPhrase: function () {//select random phrase and create displayPhrase for use to see
        this.phrase = this.harryPotterPhrases[Math.floor(Math.random() * this.harryPotterPhrases.length)];//choose random phrase from array
        for (var i = 0; i < this.phrase.length; i++) {//loop through this.phrase
            if (this.phrase[i].match(/[a-z]/i)) {//if character is a letter
                this.displayPhrase.push("");//replace with blank
            } else {
                this.displayPhrase.push(this.phrase[i]);//otherwise, dont hide the character
            }
        }
    },
    PharesesClue: function () {
        this.addGamePiece();
        if (this.phrase == "Umbrige") {
            var pink = document.body.style.background = "pink";
        }
        else if (this.phrase == "Helga Hufflepuff") {
            var img8 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                lef: ["", "595px", "500px", "420px", "370px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
            };
            var imgChange8 = document.getElementById("img8").animate(img8, {
                duration: 5000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg8() {
                imgChange8.playbackRate = 1;
                imgChange8.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg8, false);
            calis.addEventListener("touchstart", playImg8, false);
            calis.removeEventListener("touchstart", playImg8, false);
            calis.removeEventListener("mousedown", playImg8, false);
        }
        else if (this.phrase == "Godric Gryffindor") {
            var img19 = {
                width: ["100px", "120px", "150px", "150px", "150px"],
                lef: ["", "595px", "500px", "420px", "370px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
            };
            var imgChange19 = document.getElementById("img19").animate(img19, {
                duration: 5000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg19() {
                imgChange19.playbackRate = 1;
                imgChange19.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg19, false);
            calis.addEventListener("touchstart", playImg19, false);
            calis.removeEventListener("touchstart", playImg19, false);
            calis.removeEventListener("mousedown", playImg19, false);
        }
        else if (this.phrase == "Helga Hufflepuff") {
            var img8 = {
                width: ["100px", "120px", "150px", "150px", "150px"],
                lef: ["", "595px", "500px", "420px", "370px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
            };
            var imgChange19 = document.getElementById("img8").animate(img8, {
                duration: 5000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg8() {
                imgChange8.playbackRate = 1;
                imgChange8.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg8, false);
            calis.addEventListener("touchstart", playImg8, false);
            calis.removeEventListener("touchstart", playImg8, false);
            calis.removeEventListener("mousedown", playImg8, false);
        }
        else if (this.phrase == "Marauders Map") {
            var img20 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                top: ["300px", "200px", "100px"],
                transform: ["translateX(70vw)", "translateX(50vw)"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
            };
            var imgChange20 = document.getElementById("img20").animate(img20, {
                duration: 5000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg20() {
                imgChange20.playbackRate = 1;
                imgChange20.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg20, false);
            calis.addEventListener("touchstart", playImg20, false);
            calis.removeEventListener("touchstart", playImg20, false);
            calis.removeEventListener("mousedown", playImg20, false);
        }
        else if (this.phrase == "Hedwig") {
            var img7 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                top: ["-100px", "100px", "400px", "300px", "200px","100px"],
                lef: ["", "595px", "565px", "520px", "570px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
            };
            var imgChange7 = document.getElementById("img7").animate(img7, {
                duration: 5000,
                delay: 1000,
                iteration:1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg7() {
                imgChange7.playbackRate = 1;
                imgChange7.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg7, false);
            calis.addEventListener("touchstart", playImg7, false);
            calis.removeEventListener("touchstart", playImg7, false);
            calis.removeEventListener("mousedown", playImg7, false);

            //setTimeout(function () { document.getElementById("img7").src = ""; }, 5000);
        }
        else if (this.phrase == "Quidditch") {
            var img13 = {
                width: ["15px", "75px", "100px", "100px", "100px"],
                top: ["600px", "500px", "400px", "300px", "200px", "100px", "-100px"],
                lef: ["", "595px", "565px", "520px", "570px"],
                transform: ["translateX(0)", "translateX(70vw)", "translateX(-30vw)"],
                visibility: ["visible", "visible", "visible", "visible", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],

            };
            var imgChange13 = document.getElementById("img13").animate(img13, {
                duration: 5000,
                delay: 1000,
                iteration:1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg13() {
                imgChange13.playbackRate = 1;
                imgChange13.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg13, false);
            calis.addEventListener("touchstart", playImg13, false);
            calis.removeEventListener("touchstart", playImg13, false);
            calis.removeEventListener("mousedown", playImg13, false);        }
        else if (this.phrase == "Patronus") {
            var img6 = {
                width: ["55px", "75px", "100px", "100px", "100px"],
                top: ["600px", "500px", "400px", "300px", "200px", "100px", "-50px"],
                transform: ["translateX(30vw)", "translateY(-30vw)","translateX(70vw)", "translateX(30vw)","translateY(-50vw)"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
                opacity: ["1", "1", "1", "1", "1", "0"],
                //lef: ["", "595px", "565px", "520px", "570px"],
                //transform: ["translateX(0)", "translateX(70vw)", "translateX(-30vw)"],
            };
            var imgChange6 = document.getElementById("img6").animate(img6, {
                duration: 9000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg6() {
                imgChange6.playbackRate = 1;
                imgChange6.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg6, false);
            calis.addEventListener("touchstart", playImg6, false);
            calis.removeEventListener("touchstart", playImg6, false);
            calis.removeEventListener("mousedown", playImg6, false);
            //setTimeout(function () { document.getElementById("img13").src = ""; }, 5000);
        }
        else if (this.phrase == "Marauders Map") {
            var img6 = {
                width: ["55px", "75px", "100px", "100px", "100px"],
                //margin-top: ["-100px", "100px", "200px", "300px", "400px", "500px", "-100px"],
                //margin-left: ["", "595px", "565px", "520px", "570px"],
                transform: ["translateY(60vw)", "translateX(30vw)", "translateX(70vw)", "translateY(-50vw)"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
                opacity: ["1", "1", "1", "1", "1", "0"],
            };
            var imgChange6 = document.getElementById("img6").animate(img6, {
                duration: 9000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg6() {
                imgChange6.playbackRate = 1;
                imgChange6.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg6, false);
            calis.addEventListener("touchstart", playImg6, false);
            calis.removeEventListener("touchstart", playImg6, false);
            calis.removeEventListener("mousedown", playImg6, false);
            //setTimeout(function () { document.getElementById("img13").src = ""; }, 5000);
        }
        else if (this.phrase == "Dementor") {
            var img16 = {
                width: ["120px", "120px", "120px", "120px", "120px"],
                top: ["600px", "500px", "400px", "300px", "200px", "100px"],
                lef: ["", "595px", "565px", "520px", "570px"],
                transform: ["translateX(0vw)", "translateX(50vw)", "translateX(70vw)"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
                opacity: ["1", "1", "1", "1", "1", "0"],

            };
            var imgChange16 = document.getElementById("img16").animate(img16, {
                duration: 9000,
                delay: 1000,
                iteration: 1,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg16() {
                imgChange16.playbackRate = 1;
                imgChange16.play();
            }
            var calis = document.getElementById("clue");

            calis.addEventListener("mousedown", playImg16, false);
            calis.addEventListener("touchstart", playImg16, false);
            calis.removeEventListener("touchstart", playImg16, false);
            calis.removeEventListener("mousedown", playImg16, false);
            //setTimeout(function () { document.getElementById("img13").src = ""; }, 5000);
        }
        else if (this.phrase == "Catchers") {
            var img17 = {
                width: ["15px", "75px", "100px", "100px", "100px"],
                top: ["600px", "500px", "400px", "300px", "200px", "100px", "-100px"],
                lef: ["", "595px", "565px", "520px", "570px"],
                visibility: ["visible", "visible", "visible", "visible", "hidden"],
                transform: ["translateX(0)", "translateX(70vw)", "translateX(-30vw)"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange17 = document.getElementById('img17').animate(img17, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg17() {
                imgChange17.playbackRate = 1;
                imgChange17.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg17, false);
            calis.addEventListener("touchstart", playImg17, false);
            calis.removeEventListener("touchstart", playImg17, false);
            calis.removeEventListener("mousedown", playImg17, false);
        }
        else if (this.phrase == "Leaky Cauldron") {
            var img2 = {
                width: ["180px", "180px", "180px", "180px", "180px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange2 = document.getElementById('img2').animate(img2, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg2() {
                imgChange2.playbackRate = 1;
                imgChange2.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg2, false);
            calis.addEventListener("touchstart", playImg2, false);
            calis.removeEventListener("touchstart", playImg2, false);
            calis.removeEventListener("mousedown", playImg2, false);
        }
        else if (this.phrase == "Sirius Black") {
            var img3 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange3 = document.getElementById('img3').animate(img3, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg3() {
                imgChange3.playbackRate = 1;
                imgChange3.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg3, false);
            calis.addEventListener("touchstart", playImg3, false);
            calis.removeEventListener("touchstart", playImg3, false);
            calis.removeEventListener("mousedown", playImg3, false);
        }
        else if (this.phrase == "Fluffy") {
            var text3 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange3= document.getElementById('text3').animate(text3, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playText3() {
                textChange3.playbackRate = 1;
                textChange3.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playText3, false);
            calis.addEventListener("touchstart", playText3, false);
            calis.removeEventListener("touchstart", playText3, false);
            calis.removeEventListener("mousedown", playText3, false);
        }
        else if (this.phrase == "Felix Felicis") {
            var text7 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange7 = document.getElementById("text7").animate(text7, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });
            function playText7() {
                textChange7.playbackRate = 1;
                textChange7.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playText7, false);
            calis.addEventListener("touchstart", playText7, false);
            calis.removeEventListener("touchstart", playText7, false);
            calis.removeEventListener("mousedown", playText7, false);
        }
        else if (this.phrase == "Neville Longbottom") {
            var img14 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange14 = document.getElementById("img14").animate(img14, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg14() {
                imgChange14.playbackRate = 1;
                imgChange14.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg14, false);
            calis.addEventListener("touchstart", playImg14, false);
            calis.removeEventListener("touchstart", playImg14, false);
            calis.removeEventListener("mousedown", playImg14, false);
        }
        else if (this.phrase == "Nicolas Flamel") {
            var img10 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange10 = document.getElementById("img10").animate(img10, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg10() {
                imgChange10.playbackRate = 1;
                imgChange10.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg10, false);
            calis.addEventListener("touchstart", playImg10, false);
            calis.removeEventListener("touchstart", playImg10, false);
            calis.removeEventListener("mousedown", playImg10, false);
        }
        else if (this.phrase == "Weasleys Clock") {
            var text6 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange6 = document.getElementById("text6").animate(text6, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playtext6() {
                textChange6.playbackRate = 1;
                textChange6.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playtext6, false);
            calis.addEventListener("touchstart", playtext6, false);
            calis.removeEventListener("touchstart", playtext6, false);
            calis.removeEventListener("mousedown", playtext6, false);
        }
        else if (this.phrase == "Salazar Slytherin") {
            var img12 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange12 = document.getElementById("img12").animate(img12, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg12() {
                imgChange12.playbackRate = 1;
                imgChange12.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg12, false);
            calis.addEventListener("touchstart", playImg12, false);
            calis.removeEventListener("touchstart", playImg12, false);
            calis.removeEventListener("mousedown", playImg12, false);
        }
        else if (this.phrase == "Hogwarts Express") {
            var img18 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange18 = document.getElementById("img18").animate(img18, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg18() {
                imgChange18.playbackRate = 1;
                imgChange18.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg18, false);
            calis.addEventListener("touchstart", playImg18, false);
            calis.removeEventListener("touchstart", playImg18, false);
            calis.removeEventListener("mousedown", playImg18, false);
        }
        else if (this.phrase == "Remus Lupin") {
            var img11 = {
                top: ["300px", "200px", "100px","200px","300px"],
                transform: ["translateX(0vw)", "translateX(30vw)", "translateX(50vw)", "translateX(70vw)"],
                width: ["120px","120px","120px","120px","120px"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange11 = document.getElementById('img11').animate(img11, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg11() {
                imgChange11.playbackRate = 1;
                imgChange11.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg11, false);
            calis.addEventListener("touchstart", playImg11, false);
            calis.removeEventListener("touchstart", playImg11, false);
            calis.removeEventListener("mousedown", playImg11, false);
        }
        else if (this.phrase == "Dobby") {
            var text9 = {
                width: ["200px", "200px", "200px", "180px", "170px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgtext9 = document.getElementById('text9').animate(text9, {
                duration: 9000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playtext9() {
                imgtext9.playbackRate = 1;
                imgtext9.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playtext9, false);
            calis.addEventListener("touchstart", playtext9, false);
            calis.removeEventListener("touchstart", playtext9, false);
            calis.removeEventListener("mousedown", playtext9, false);
        }
        else if (this.phrase == "Ollivander") {
            var text11 = {
                width: ["180px", "180px", "180px", "180px", "180px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgtext11 = document.getElementById('text11').animate(text11, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playtext11() {
                imgtext11.playbackRate = 1;
                imgtext11.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playtext11, false);
            calis.addEventListener("touchstart", playtext11, false);
            calis.removeEventListener("touchstart", playtext11, false);
            calis.removeEventListener("mousedown", playtext11, false);
        }
        else if (this.phrase == "Invisibility Cloak") {
            var text4 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange4 = document.getElementById('text4').animate(text4, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playText4() {
                textChange4.playbackRate = 1;
                textChange4.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playText4, false);
            calis.addEventListener("touchstart", playText4, false);
            calis.removeEventListener("touchstart", playText4, false);
            calis.removeEventListener("mousedown", playText4, false);  
        }
        else if (this.phrase == "Rowena Ravenclaw") {
            var img9 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange9 = document.getElementById('img9').animate(img9, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg9() {
                imgChange9.playbackRate = 1;
                imgChange9.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg9, false);
            calis.addEventListener("touchstart", playImg9, false);
            calis.removeEventListener("touchstart", playImg9, false);
            calis.removeEventListener("mousedown", playImg9, false); 
        }
        else if (this.phrase == "Buckbeak") {
            var img4 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange4 = document.getElementById('img4').animate(img4, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg4() {
                imgChange4.playbackRate = 1;
                imgChange4.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg4, false);
            calis.addEventListener("touchstart", playImg4, false);
            calis.removeEventListener("touchstart", playImg4, false);
            calis.removeEventListener("mousedown", playImg4, false); 
        }
        else if (this.phrase == "Mirror of Erised") {
            var text = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                opacity: ["1", "1", "1", "1", "0"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var textChange = document.getElementById('text').animate(text, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playText() {
                textChange.playbackRate = 1;
                textChange.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playText, false);
            calis.addEventListener("touchstart", playText, false);
            calis.removeEventListener("touchstart", playText, false);
            calis.removeEventListener("mousedown", playText, false); 
        }
        else if (this.phrase == "Azkaban") {
            var text2 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange2 = document.getElementById('text2').animate(text2, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });
            function playText2() {
                textChange2.playbackRate = 1;
                textChange2.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playText2, false);
            calis.addEventListener("touchstart", playText2, false);
            calis.removeEventListener("touchstart", playText2, false);
            calis.removeEventListener("mousedown", playText2, false); 
            
        }
        else if (this.phrase == "Chessboard Chamber") {
            var img5 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange = document.getElementById('img5').animate(img5, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg5() {
                imgChange5.playbackRate = 1;
                imgChange5.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg5, false);
            calis.addEventListener("touchstart", playImg5, false);
            calis.removeEventListener("touchstart", playImg5, false);
            calis.removeEventListener("mousedown", playImg5, false); 
        }
        else if (this.phrase == "Albus Dumbledore") {
            var text10 = {
                width: ["180px", "180px", "180px", "180px", "180px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange10 = document.getElementById('text10').animate(text10, {
                duration: 10000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playtext10() {
                textChange10.playbackRate = 1;
                textChange10.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playtext10, false);
            calis.addEventListener("touchstart", playtext10, false);
            calis.removeEventListener("touchstart", playtext10, false);
            calis.removeEventListener("mousedown", playtext10, false); 
        }   
        else if (this.phrase == "Severus Snape") {
            var text8 = {
                width: ["180px", "180px", "180px", "180px", "180px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange8 = document.getElementById('text8').animate(text8, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playtext8() {
                textChange8.playbackRate = 1;
                textChange8.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playtext8, false);
            calis.addEventListener("touchstart", playtext8, false);
            calis.removeEventListener("touchstart", playtext8, false);
            calis.removeEventListener("mousedown", playtext8, false);
        }   
        else if (this.phrase == "Floo powder") {
            var img15 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var imgChange15 = document.getElementById('img15').animate(img15, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg15() {
                imgChange15.playbackRate = 1;
                imgChange15.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg15, false);
            calis.addEventListener("touchstart", playImg15, false);
            calis.removeEventListener("touchstart", playImg15, false);
            calis.removeEventListener("mousedown", playImg15, false); 
        }
        else if (this.phrase == "Wand") {
            var text5 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
                opacity: ["1", "1", "1", "1", "0"],
            };
            var textChange5 = document.getElementById('text5').animate(text5, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playtext5() {
                textChange5.playbackRate = 1;
                textChange5.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playtext5, false);
            calis.addEventListener("touchstart", playtext5, false);
            calis.removeEventListener("touchstart", playtext5, false);
            calis.removeEventListener("mousedown", playtext5, false); 
        }
    },

    removeDivs: function (className) {//remove all divs of a class
        var letters = document.getElementsByClassName(className);//store all divs that display a letter in an array
        while (letters[0]) {//loop through array of divs
            letters[0].parentNode.removeChild(letters[0]);//delete each div
        }
    },
    showDisplayPhrase: function () {//create new divs for this.displayPhrase letters (styling purposes)
        for (var i = 0; i < this.displayPhrase.length; i++) {//loop through this.displayPhrase
            var div = document.createElement("div");//create div
            div.setAttribute("class", "letter");//add class name "letter" to div
            div.setAttribute("id", "l" + (i));//add unique id "l0","l1" 
            div.innerHTML = this.displayPhrase[i];//make the divs value equal to the letter in this.displayPhrase
            document.getElementById("letters").appendChild(div);//add div to parent container
            if (this.displayPhrase[i] == " ") {//dont underline spaces
                document.getElementById("l" + i).style.cssText = "border-bottom: 0px solid white;";
            } else {//add box shadow to any character that is not a space
                document.getElementById("l" + i).style.cssText = "";
            }
        }
    },
    updateDisplayPhrase: function () {
        this.letterMatchCheck();
        this.removeDivs("letter");
        this.showDisplayPhrase();
        this.phraseMatchCheck();
    },
    letterMatchCheck: function () {//check for matching letter
        if (this.userGuess[1] == undefined) {//if user guessed a single character
            var noMatchCounter = 0;//variable to log how many misses we get during check
            for (var i = 0; i < this.phrase.length; i++) {//loop through this.phrase
                if (this.phrase[i].toUpperCase() == this.userGuess) {//if char matches the users guessed letter
                    this.displayPhrase[i] = this.phrase[i];//then replace that character using this.phrase, so upper/lower case is preserved
                } else {//if character doesn't match
                    noMatchCounter++;
                }
            }
            if (noMatchCounter == this.displayPhrase.length) {//if we missed every character we checked
                if (!this.control.includes(this.userGuess)) {
                    this.addGamePiece();
                        this.control.push(this.userGuess)
                } 
            }
        }
    },
    phraseMatchCheck: function () {//check for matching phrase
        if (this.userGuess == this.phrase.toUpperCase() || this.displayPhrase.join("") == this.phrase) {//if user guessed OR completed the phrase
            this.numBodyPartsShown = this.numWrongGuesses;
            this.numWrongGuesses = 6;
            this.addGamePiece();
            this.userScore++
        }
    },
    showPhrase: function () {//show what the hidden phrase was
        this.displayPhrase = this.phrase;//update to match the phrase
        this.removeDivs("letter");
        this.showDisplayPhrase();
        this.animateLetters();
        var color = document.body.style.background = "black";
    },
    animateLetters: function () {//apply css animation to each letter, in order, with delay
        for (var i = 0; i < this.phrase.length; i++) {
            this.animateLettersTimer[i] = setTimeout((function (i) {//store as variable so clearTimeout can be used
                return function () {
                    document.getElementById("l" + i).style.cssText = "animation: pop 3s forwards;";
                }
            })(i), i * 100);
        }
    },
    animateLettersTimer: [],
    cancelAnimateLetters: function () {
        for (var i = 0; i < this.phrase.length; i++) {
            clearTimeout(this.animateLettersTimer[i]);
        }
    },
    addGamePiece: function () {//handle game stages
        this.numWrongGuesses++;//log the guess as wrong
        switch (this.numWrongGuesses) {
            case 1://1st failed turn
                imghangma.src = "../Proje/hangman_2.gif";
                break;
            case 2://2nd failed turn
                imghangma.src = "../Proje/hangman_3.gif";
                break;
            case 3://3rd failed turn
                imghangma.src = "../Proje/hangman_4.gif";
                break;
            case 4://4th failed turn
                imghangma.src = "../Proje/hangman_5.gif";
                break;
            case 5://5th failed turn - Game Over screen
                imghangma.src = "../Proje/hangman_6.gif";
                this.userScore = 0;
                document.getElementById("score").innerHTML = "Score : " + this.userScore;//update score
                document.getElementById("button").innerHTML = "Play again?";
                this.showPhrase();
                break;
            case 6://Reset game screen for FAIL
                this.resetGame();
                break;
            case 7://Level passed screen
                document.getElementById("button").innerHTML = "Play again?";
                this.showPhrase();
                break;
            case 8://Reset game screen for PASS
                this.resetGame();
                break;
            default://this shouldnt ever be possible
                alert("ERROR");
                break;
        }
    },
    removeGamePieces: function () {//animated removal of body parts
        imghangma.src = "../Proje/hangman_0.jpg";
    },
    resetGame: function () {//reset everything
        this.cancelAnimateLetters();
        this.removeGamePieces();
        this.phrase = null;
        this.displayPhrase = [];
        this.control = [];
        this.userGuess = null;
        this.numWrongGuesses = 0;
        this.numBodyPartsShown = 0;
        this.removeDivs("availableLetter");
        this.initialize();
        document.getElementById("button").innerHTML = "Submit Guess";
    },
    onEnter: function (e) {//use Enter key to submit instead of button
        e.which = e.which || e.keyCode;//determine which button was pressed
        if (e.which === 13) {//if enter key was pressed
            this.onSubmit("input");//submit the user guess via input
        }
    },
    onClick: function (e) {//click letter to submit instead of using input
        var clickedLetter = e.target.innerHTML;//get letter
        this.onSubmit(clickedLetter);//submit the user guess via input
    },
    onSubmit: function (inputORclickedLetter) {//update game on button click - arg submission type(clicked letter or input)    
        if (inputORclickedLetter === "input") {//if input was used to submit guess      
            this.userGuess = document.getElementById("input").value.toUpperCase();//userGuess = value of input
            document.getElementById("input").value = "";//clear the input element    
            //document.getElementById("input").focus();//keep focus on input box
        } else {
            this.userGuess = inputORclickedLetter;//userGuess = value of clicked div
        }
        this.updateDisplayPhrase(this.userGuess);//update
        document.getElementById("score").innerHTML = "Score : " + this.userScore;//update score
        document.getElementById("al" + this.userGuess).style.cssText = "background-color:#596D82;";//style the chosen letter      

    }
}; 





