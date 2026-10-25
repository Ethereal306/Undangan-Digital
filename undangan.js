function BukaUndangan() {
    const button = document.querySelector('.button-show');
    if (button) button.classList.add('d-none');

    const musik = document.getElementById("weddingMusic");
    if (musik) musik.play();

    document.body.classList.remove("overflow-locked");

    const musicControl = document.getElementById("musicControlBtn");
    if (musicControl) musicControl.classList.remove("d-none");

    const targetSection = document.getElementById("foreword");
    const mainPage = document.querySelector('.main-page');

    if (targetSection) {

        setTimeout(function() {

            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

            if (mainPage) {
                setTimeout(function() {
                    mainPage.classList.add('d-none');
                }, 1000); 
            }
        }, 50); 
    }
}

    const targetDate = new Date("2027-02-29T08:00:00").getTime();

    const countdownFunction = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);
    document.getElementById('rsvpForm').addEventListener('submit', function (e) {
        e.preventDefault(); 

        const name = document.getElementById('guestName').value;
        const status = document.getElementById('attendanceStatus').value;
        const message = document.getElementById('guestMessage').value;

        const badgeColor = status === 'Hadir' ? 'bg-success' : 'bg-danger';

        const newWish = document.createElement('div');
        newWish.classList.add('mb-3', 'border-bottom', 'pb-2', 'animate-fade-in');
        newWish.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-bold small text-dark">${name}</span>
            <span class="badge ${badgeColor} rounded-pill" style="font-size: 0.65rem;">${status}</span>
        </div>
        <p class="text-muted mb-0" style="font-size: 0.85rem;">${message}</p>
    `;

        const container = document.getElementById('wishesContainer');
        container.insertBefore(newWish, container.firstChild);

        document.getElementById('rsvpForm').reset();
    });
    function toggleMusik() {
    const musik = document.getElementById("weddingMusic");
    const ikon = document.getElementById("musicIcon");

    if (musik.paused) {
        musik.play();
        ikon.innerText = "🎵";
    } else {
        musik.pause();
        ikon.innerText = "🔇";
    }
}
