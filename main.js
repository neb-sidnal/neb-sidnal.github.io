// Map sounds to file paths
const soundMap = {
  kick808: "sounds/kick808.mp3",
  snare: "sounds/snare.mp3",
  clap808: "sounds/clap808.mp3",
  perc: "sounds/perc.mp3",
  tetra: "sounds/tetra.mp3",
  dishes: "sounds/dishes.mp3",
  horseshoe: "sounds/horseshoe.mp3",
  coil: "sounds/coil.mp3",
  motor: "sounds/motor.mp3",
  static: "sounds/static.mp3",
  synthpad: "sounds/synthpad.mp3",
  bubblewrap: "sounds/bubblewrap.mp3",
  bells: "sounds/bells.mp3",
  bikechain: "sounds/bikechain.mp3"
};

// Play sound function
function playSound(name) {
  const audio = new Audio(soundMap[name]);
  audio.currentTime = 0;
  audio.play();
}

// Add touch events to pads
const pads = document.querySelectorAll(".pad");

pads.forEach(pad => {
  const soundName = pad.dataset.sound;

  pad.addEventListener("touchstart", (e) => {
    e.preventDefault();

    playSound(soundName);
    pad.classList.add("active");
  });

  pad.addEventListener("touchend", () => {
    pad.classList.remove("active");
  });
});