const yourDate = new Date("2023-05-20T22:00:00"),
    music = [
        // "ido",
        // "noinaycoanh",
        // "nguoiamphu",
        // "AnSangNha",
        // "ChucVoNguNgon",
        // "EmLaHanhPhucTrongAnh",
        // "GiacMoThienDuong",
        // "MyEverything",
        // "NguoiConGaiTaThuong",
        // "ToiDaBietYeu",
        "birthday-2",
        "birthday-3",
    ];

const getTodoItems = async (pram) => {
    try {
        const response = await axios.post(
            `http://localhost:3000/api/open/updateNumber`,
            { number: pram }
        );
        const todoItems = response.data;
        console.log(`GET: Here's the list of todos`, todoItems[0].number);
        return todoItems[0].number;
    } catch (errors) {
        console.error(errors);
    }
};
const open1 = (array) => {
    var currentIndex = array.length;
    randomIndex = Math.floor(Math.random() * currentIndex);
    console.log(array[randomIndex], 78787);
    document.getElementById(
        "qua"
    ).innerHTML = `Chúc mừng người yêu đã nhận được con số : ${array[randomIndex]} `;
};
const input = () => {
    const text = document.getElementById("exampleFormControlTextarea1").value;
    console.log("object", text);
};
document.addEventListener(
    "DOMContentLoaded",
    function () {
        var rootTime = document.querySelector("time");
        document.querySelector("anni").textContent = `${
            yourDate.getDate() > 9
                ? yourDate.getDate()
                : "0" + yourDate.getDate()
        }-${
            yourDate.getMonth() > 8
                ? yourDate.getMonth() + 1
                : "0" + (yourDate.getMonth() + 1)
        }-${yourDate.getFullYear()}`;

        document.querySelector("date").textContent =
            Math.floor(
                Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24
            ) + " DAYS";

        function olock() {
            var today = new Date(),
                hrs =
                    Math.floor(
                        Math.floor((today - yourDate) / 1000) / 60 / 60
                    ) % 24,
                min =
                    Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
                sec = Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
                min > 9 ? min : "0" + min
            }:${sec > 9 ? sec : "0" + sec}`;
        }
        olock();
        var timer = setInterval(function () {
            olock();
        }, 1000);
        document
            .querySelector("audio")
            .setAttribute(
                "src",
                `music/${music[Math.floor(Math.random() * music.length)]}.mp3`
            );

        // document
        //     .getElementsByTagName("body")[0]
        //     .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
    },
    false
);
var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw =
        currentWord == words.length - 1
            ? wordArray[0]
            : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = "letter behind";
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }
    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = "letter out";
    }, i * 20);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = "letter in";
    }, 340 + i * 80);
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = "";
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement("span");
        letter.className = "letter";
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 5000);
