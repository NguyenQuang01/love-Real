const yourDate = new Date("2023-05-20T22:00:00"),
    music = ["AnSangNha"];

document.addEventListener(
    "DOMContentLoaded",
    function () {
        function waveLoadingEffect() {
            var baseText = "C";
            var waveText = "hào đón 365 ngày";
            var element = document.querySelector(".loading-text");
            var text = baseText + waveText;
            var i = 0;
            var forward = true;

            function updateText() {
                if (forward) {
                    if (i < text.length) {
                        element.textContent = text.substring(0, i + 1);
                        i++;
                    } else {
                        forward = false;
                        i--;
                    }
                } else {
                    if (i >= baseText.length) {
                        element.textContent = text.substring(0, i);
                        i--;
                    } else {
                        forward = true;
                        i++;
                    }
                }
            }

            setInterval(updateText, 350);
        }

        waveLoadingEffect();

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

        document
            .getElementsByTagName("body")[0]
            .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
    },
    false
);
