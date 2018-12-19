// JavaScript source code
var Hangman = {
    harryPotterPhrases: ["Triwizard Cup", "Pensieve", "Quidditch", "Fluffy", "Hedwig", "Mirror of Erised", "Sword of Gryffindor", "Invisibility Cloak", "Golden Egg",
        "Chessboard Chamber", "Azkaban", "Felix Felicis", "Gryffindor", "Slytherin", "Sirius Black", "Remus Lupin",
        "Nicolas Flamel", "Weasley's Clock", "Wand", "Neville Longbottom", "Umbrige", "Buckbeak", "Hogwarts Ekspress"],
    //harryPotterPhrases: ["Azkaban", "Felix Felicis"],

    phrase: null,//phrase that the user will try to guess
    displayPhrase: [],//array of letters to display to the user
    control:[],
    userGuess:null ,//last user input value
    userScore: 0,//earn a point each passing round
    numWrongGuesses: 0,//number of wrong guesses/empty input returns made (1-5 wrong guesses / 7 cuts ahead to round complete)
    numBodyPartsShown: 0,//number of body parts shown
    initialize: function () {//setup initial phrase and displayPhrase
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
        else if (this.phrase == "Triwizard Cup") {           
            var img = {
                width: ["15px", "75px", "100px", "100px", "100px"],
                top: ["158pt", "70pt", "-35pt", "-120pt", "-800pt"],
                transform: ["rotate(-95deg)", "rotate(-95deg)", "rotate(-140deg)", "rotate(-150deg)", "rotate(-200deg)"],
                lef: ["", "595px", "500px", "420px", "370px"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],

            };
            var imgChange = document.getElementById('img').animate(img, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg() {
                imgChange.playbackRate = 1;
                imgChange.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg, false);
            calis.addEventListener("touchstart", playImg, false);
        }
        else if (this.phrase == "Hedwig") {
            var img7 = {
                width: ["15px", "75px", "100px", "100px", "100px"],
                top: ["600px", "500px", "400px", "300px", "200px","100px","-100px"],
               // transform: ["rotate(-95deg)", "rotate(-95deg)", "rotate(-140deg)", "rotate(-150deg)", "rotate(-200deg)"],
                lef: ["", "595px", "565px", "520px", "570px"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
            };
            var imgChange7 = document.getElementById('img7').animate(img7, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg7() {
                imgChange7.playbackRate = 1;
                imgChange7.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg7, false);
            calis.addEventListener("touchstart", playImg7, false);

            this.addGamePiece();
        }
        else if (this.phrase == "Leaky Cauldron") {
            var img13 = {
                width: ["15px", "75px", "100px", "100px", "100px"],
                top: ["600px", "500px", "400px", "300px", "200px", "100px", "-100px"],
                // transform: ["rotate(-95deg)", "rotate(-95deg)", "rotate(-140deg)", "rotate(-150deg)", "rotate(-200deg)"],
                lef: ["", "595px", "565px", "520px", "570px"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
                transform: ["translateX(0)", "translateX(70vw)","translateX(-30vw)"],
            };
            var imgChange13 = document.getElementById('img13').animate(img13, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg13() {
                imgChange13.playbackRate = 1;
                imgChange13.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg13, false);
            calis.addEventListener("touchstart", playImg13, false);
        }
        else if (this.phrase == "Quidditch") {
            var img17 = {
                width: ["15px", "75px", "100px", "100px", "100px"],
                top: ["600px", "500px", "400px", "300px", "200px", "100px", "-100px"],
                // transform: ["rotate(-95deg)", "rotate(-95deg)", "rotate(-140deg)", "rotate(-150deg)", "rotate(-200deg)"],
                lef: ["", "595px", "565px", "520px", "570px"],
                visibility: ["visible", "visible", "visible", "visible", "visible"],
                transform: ["translateX(0)", "translateX(70vw)", "translateX(-30vw)"],
            };
            var imgChange17 = document.getElementById('img17').animate(img17, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg() {
                imgChange17.playbackRate = 1;
                imgChange17.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg17, false);
            calis.addEventListener("touchstart", playImg17, false);
        }
        else if (this.phrase == "Sword of Gryffindor") {
            var img2 = {
                width: ["15px", "25px", "35px", "35px", "35px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Sirius Black") {
            var img3 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Fluffy") {
            var text3 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Felix Felicis") {
            var text7 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var textChange7 = document.getElementById('text7').animate(text7, {
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
        }
        else if (this.phrase == "Neville Longbottom") {
            var img14 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange14 = document.getElementById('img14').animate(img14, {
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
        }
        else if (this.phrase == "Nicolas Flamel") {
            var img10 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange10 = document.getElementById('img10').animate(img10, {
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
        }
        else if (this.phrase == "Weasley's Clock") {
            var text6 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var textChange6 = document.getElementById('text6').animate(text6, {
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
        }
        else if (this.phrase == "Slytherin") {
            var img12 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange12 = document.getElementById('img12').animate(img12, {
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
        }
        else if (this.phrase == "Hogwarts Ekspress") {
            var img18 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange18 = document.getElementById('img18').animate(img18, {
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
        }
        else if (this.phrase == "Remus Lupin") {
            var img11 = {
                top: ["500px", "400px", "300px", "200px", "100px", "-100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Dobby") {
            var img8 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange8 = document.getElementById('img8').animate(img8, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg8() {
                imgChange8.playbackRate = 1;
                imgChange8.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg8, false);
            calis.addEventListener("touchstart", playImg8, false);
        }
        else if (this.phrase == "Invisibility Cloak") {
            var text4 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Ravenclaw") {
            var img9 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Buckbeak") {
            var img4 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
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
        }
        else if (this.phrase == "Mirror of Erised") {
            var text = {
                width: ["100px", "100px", "100px", "100px", "100px"],
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
        }
        else if (this.phrase == "Azkaban") {
            var text2 = {
                width: ["100px", "100px", "100px", "100px", "100px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
            
        }
        else if (this.phrase == "Chessboard Chamber") {
            var img5 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Golden Egg") {
            var img6 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange6 = document.getElementById('img6').animate(img6, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg6() {
                imgChange6.playbackRate = 1;
                imgChange6.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg6, false);
            calis.addEventListener("touchstart", playImg6, false);
        }   
        else if (this.phrase == "Floo powder") {
            var img15 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
        }
        else if (this.phrase == "Pensieve") {
            var img16 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
            };
            var imgChange = document.getElementById('img16').animate(img16, {
                duration: 5000,
                delay: 1000,
                easing: 'ease-in-out',
                fill: 'both'
            });

            function playImg16() {
                imgChange16.playbackRate = 1;
                imgChange16.play();
            }
            var calis = document.getElementById('clue');

            calis.addEventListener("mousedown", playImg16, false);
            calis.addEventListener("touchstart", playImg16, false);
        }
        else if (this.phrase == "Wand") {
            var text5 = {
                width: ["150px", "150px", "150px", "150px", "150px"],
                visibility: ["visible", "visible", "visible", "hidden", "hidden"],
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
            div.setAttribute("id", "l" + (i));//add unique id "l0","l1" etc.
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
                    noMatchCounter++;//add to counter
                }
            }
            if (noMatchCounter == this.displayPhrase.length) {//if we missed every character we checked
                if (!this.control.includes(this.userGuess)) {
                    this.addGamePiece();//add a piece(svg) to the hangman game
                        this.control.push(this.userGuess)
                } 
            }
        }
    },
    phraseMatchCheck: function () {//check for matching phrase
        if (this.userGuess == this.phrase.toUpperCase() || this.displayPhrase.join("") == this.phrase) {//if user guessed OR completed the phrase
            this.numBodyPartsShown = this.numWrongGuesses;//log number of shown body parts
            this.numWrongGuesses = 6;//skip past wrong answers to pass level
            this.addGamePiece();
            this.userScore++//add a point
        }
        else {
            if (this.userGuess[1] != undefined) {//if user guessed a multiple characters
                this.addGamePiece();
            }
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
        //var path5 = document.getElementById('rightLeg');
        //var path4 = document.getElementById('leftLeg');
        //var path3 = document.getElementById('rightHand');
        //var path2 = document.getElementById('leftHand');
        //var path1 = document.getElementById('head');
        //var path6 = document.getElementById('body');
        //var calis = document.getElementById('button');
        this.numWrongGuesses++;//log the guess as wrong
        switch (this.numWrongGuesses) {
            case 1://1st failed turn
                //var pathOne = {
                //    top: ["75pt","75pt"],
                //    visibility: ["visible","visible"],
                //};
                //pathOneChange = path1.animate(pathOne, {
                //    iterations: 1,
                //    easing: 'ease-in-out',
                //    fill: 'both'
                //});
                //pathOneChange.pause();
                //var pathOne1 = {
                //    top: ["75pt", "75pt"],
                //    visibility: ["visible", "visible"],
                //};
                //var pathOneChange1 = path6.animate(pathOne1, {
                //    iterations: 1,
                //    easing: 'ease-in-out',
                //    fill: 'both'
                //});
                imghangma.src = "\Proje\hangman_2.gif";
                //pathOneChange1.pause();
                //function getpathOne() {
                //    pathOneChange.playbackRate = 1;
                //    pathOneChange.play();
                //    pathOneChange1.playbackRate = 1;
                //    pathOneChange1.play();
                //}
                //calis.addEventListener("mousedown", getpathOne, false);
                //calis.addEventListener("touchstart", getpathOne, false);
                break;
            case 2://2nd failed turn
                //var pathTwo = {
                //    top: ["75pt", "75pt"],
                //    visibility: ["visible", "visible"],
                //};
                //var pathTwoChange = path2.animate(pathTwo, {
                //    iterations: 1,
                //    easing: 'ease-in-out',
                //    fill: 'both'
                //});
                //pathTwoChange.pause();
                //function getpathTwo() {
                //    pathTwoChange.playbackRate = 1;
                //    pathTwoChange.play();
                //}
                //calis.addEventListener("mousedown", getpathTwo, false);
                //calis.addEventListener("touchstart", getpathTwo, false);
                imghangma.src = "..\Proje\hangman_3.gif";
                break;
            case 3://3rd failed turn
                //var pathThree = {
                //    top: ["75pt", "75pt"],
                //    visibility: ["visible", "visible"],
                //};
                //var pathThreeChange = path3.animate(pathThree, {
                //    iterations: 1,
                //    easing: 'ease-in-out',
                //    fill: 'both'
                //});
                //pathThreeChange.pause();
                //function getpathThree() {
                //    pathThreeChange.playbackRate = 1;
                //    pathThreeChange.play();
                //}
                //calis.addEventListener("mousedown", getpathThree, false);
                //calis.addEventListener("touchstart", getpathThree, false);
                imghangma.src = "\Proje\hangman_4.gif";
                break;
            case 4://4th failed turn
                //var pathFour = {
                //    top: ["75pt", "75pt"],
                //    visibility: ["visible", "visible"],
                //};
                //var pathFourChange = path4.animate(pathFour, {
                //    iterations: 1,
                //    easing: 'ease-in-out',
                //    fill: 'both'
                //});
                //pathFourChange.pause();
                //function getpathFour() {
                //    pathFourChange.playbackRate = 1;
                //    pathFourChange.play();
                //}
                //calis.addEventListener("mousedown", getpathFour, false);
                //calis.addEventListener("touchstart", getpathFour, false);
                imghangma.src = "\\Proje\hangman_5.gif";
                break;
            case 5://5th failed turn - Game Over screen
                //var pathFive = {
                //    top: ["75pt", "75pt"],
                //    visibility: ["visible", "visible"],
                //};
                //var pathFiveChange = path5.animate(pathFive, {
                //    iterations: 1,
                //    easing: 'ease-in-out',
                //    fill: 'both'
                //});
                //pathFiveChange.pause();
                //function getpathFive() {
                //    pathFiveChange.playbackRate = 1;
                //    pathFiveChange.play();
                //}
                //calis.addEventListener("mousedown", getpathFive, false);
                imghangma.src = "\\Proje\hangman_6.gif";
                //calis.addEventListener("touchstart", getpathFive, false);
                //this.userScore = 0;
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
        //var path9 = document.getElementById('imghangm');
        //var calis = document.getElementById('button');
        //var path = {
        //    top: ["75pt", "75pt"],
        //    visibility: ['visible', 'visible'],
        //};
        //var pathChange = path9.animate(path, {
        //    iterations: 1,
        //    easing: 'ease-in-out',
        //    fill: 'both'
        //});
        //pathChange.pause();
        //function getpath() {
        //    pathChange.playbackRate = 1;
        //    pathChange.play();
        //}
        //calis.addEventListener("mousedown", getpath, false);
        //calis.addEventListener("touchstart", getpath, false);
        //var path5 = document.getElementById('rightLeg');
        //var path4 = document.getElementById('leftLeg');
        //var path3 = document.getElementById('rightHand');
        //var path2 = document.getElementById('leftHand');
        //var path1 = document.getElementById('head');
        //var path6 = document.getElementById('body');
        //var calis = document.getElementById('button')
        //if (this.numBodyPartsShown >= 1) {
        //    var pathOne = {
        //        top: ["75pt", "75pt"],
        //        visibility: ["hidden", "hidden"],
        //    };
        //    pathOneChange = path1.animate(pathOne, {
        //        iterations: 1,
        //        easing: 'ease-in-out',
        //        fill: 'both'
        //    });
        //    pathOneChange.pause();
        //    var pathOne1 = {
        //        top: ["75pt", "75pt"],
        //        visibility: ["hidden", "hidden"],
        //    };
        //    var pathOneChange1 = path6.animate(pathOne1, {
        //        iterations: 1,
        //        easing: 'ease-in-out',
        //        fill: 'both'
        //    });
        //    pathOneChange1.pause();
        //    function getpathOne() {
        //        pathOneChange.playbackRate = 1;
        //        pathOneChange.play();
        //        pathOneChange1.playbackRate = 1;
        //        pathOneChange1.play();
        //    }
        //    calis.addEventListener("mousedown", getpathOne, false);
        //    calis.addEventListener("touchstart", getpathOne, false);
        //}
        //if (this.numBodyPartsShown >= 2) {

        //    var pathTwo = {
        //        top: ["75pt", "75pt"],
        //        visibility: ["hidden", "hidden"],
        //    };
        //    var pathTwoChange = path2.animate(pathTwo, {
        //        iterations: 1,
        //        easing: 'ease-in-out',
        //        fill: 'both'
        //    });
        //    pathTwoChange.pause();
        //    function getpathTwo() {
        //        pathTwoChange.playbackRate = 1;
        //        pathTwoChange.play();
        //    }
        //    calis.addEventListener("mousedown", getpathTwo, false);
        //    calis.addEventListener("touchstart", getpathTwo, false);
        //}
        //if (this.numBodyPartsShown >= 3) {
        //    var pathThree = {
        //        top: ["75pt", "75pt"],
        //        visibility: ["hidden", "hidden"],
        //    };
        //    var pathThreeChange = path3.animate(pathThree, {
        //        iterations: 1,
        //        easing: 'ease-in-out',
        //        fill: 'both'
        //    });
        //    pathThreeChange.pause();
        //    function getpathThree() {
        //        pathThreeChange.playbackRate = 1;
        //        pathThreeChange.play();
        //    }
        //    calis.addEventListener("mousedown", getpathThree, false);
        //    calis.addEventListener("touchstart", getpathThree, false);
        //}
        //if (this.numBodyPartsShown >= 4) {
        //    var pathFour = {
        //        top: ["75pt", "75pt"],
        //        visibility: ["hidden", "hidden"],
        //    };
        //    var pathFourChange = path4.animate(pathFour, {
        //        iterations: 1,
        //        easing: 'ease-in-out',
        //        fill: 'both'
        //    });
        //    pathFourChange.pause();
        //    function getpathFour() {
        //        pathFourChange.playbackRate = 1;
        //        pathFourChange.play();
        //    }
        //    calis.addEventListener("mousedown", getpathFour, false);
        //    calis.addEventListener("touchstart", getpathFour, false);
        //}
        //if (this.numBodyPartsShown >= 5) {
        //    var pathFive = {
        //        top: ["75pt", "75pt"],
        //        visibility: ["hidden", "hidden"],
        //    };
        //    var pathFiveChange = path5.animate(pathFive, {
        //        iterations: 1,
        //        easing: 'ease-in-out',
        //        fill: 'both'
        //    });
        //    pathFiveChange.pause();
        //    function getpathFive() {
        //        pathFiveChange.playbackRate = 1;
        //        pathFiveChange.play();
        //    }
        //    calis.addEventListener("mousedown", getpathFive, false);
        //    calis.addEventListener("touchstart", getpathFive, false);
        //}
        imghangma.src = "\\Proje\hangman_0.jpg";
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
        if (this.userGuess.length == 1) {
            document.getElementById("al" + this.userGuess).style.cssText = "background-color:#b66767;";//style the chosen letter      
        }

    }
}; 



