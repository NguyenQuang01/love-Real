const yourDate = new Date("2023-05-20T22:00:00");
const music = ["AnSangNha", "noinaycoanh"];

document.addEventListener("DOMContentLoaded", function () {
    const rootTime = document.querySelector("time");
    const anniEl = document.querySelector("anni");
    const dateEl = document.querySelector("date");
    const audio = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicToggle");

    if (anniEl) {
        const d = yourDate.getDate();
        const m = yourDate.getMonth() + 1;
        const y = yourDate.getFullYear();
        anniEl.textContent = `${d > 9 ? d : "0" + d}-${m > 9 ? m : "0" + m}-${y}`;
    }

    function updateDays() {
        if (!dateEl) return;
        const days = Math.floor((Date.now() - yourDate.getTime()) / 86400000);
        dateEl.textContent = days + " DAYS";
    }

    function olock() {
        if (!rootTime) return;
        const today = new Date();
        const totalSec = Math.floor((today - yourDate) / 1000);
        const hrs = Math.floor(totalSec / 3600) % 24;
        const min = Math.floor(totalSec / 60) % 60;
        const sec = totalSec % 60;
        rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
            min > 9 ? min : "0" + min
        }:${sec > 9 ? sec : "0" + sec}`;
    }

    updateDays();
    olock();
    setInterval(function () {
        olock();
        updateDays();
    }, 1000);

    if (audio) {
        audio.src = `music/${music[Math.floor(Math.random() * music.length)]}.mp3`;
    }

    if (musicBtn && audio) {
        musicBtn.addEventListener("click", function () {
            if (audio.paused) {
                audio.play().catch(function () {});
                musicBtn.classList.add("is-playing");
            } else {
                audio.pause();
                musicBtn.classList.remove("is-playing");
            }
        });
    }
});
