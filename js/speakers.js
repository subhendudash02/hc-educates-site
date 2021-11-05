const swiper = new Swiper(".speaker-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

class Speaker {
    constructor({ image, name, occupation, title, about }) {
        Object.assign(this, arguments[0]);
    }
}

const speakerList = new Array(6).fill(
    new Speaker({
        image: " https://via.placeholder.com/100x100",
        name: "Speaker 1",
        occupation: "Web developer",
        title: "workshop",
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
         proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    })
);

const container = document.getElementById("speakers-swiper");
for (const speaker of speakerList) {
    container.innerHTML += `
        <div class="swiper-slide">
                    <div class="speaker-profile">
                        <div class="speaker-image">
                            <img src="${speaker.image}">
                        </div>
                        <div class="speaker-name">
                            ${speaker.name}
                        </div>
                        <div class="speaker-occupation">
                            ${speaker.occupation}
                        </div>
                    </div>
                    <div class="speaker-event">
                        <div class = "speaker-event-title">
                            ${speaker.title}
                        </div>
                        <div class = "speaker-event-about">
                            ${speaker.about}
                        </div>
                    </div>
                </div>
    `;
}
