const flag = document.getElementById("flag");

// Interactive waving speed
let speed = 3;

document.addEventListener("click", () => {
    speed = speed === 3 ? 1.5 : 3;

    flag.style.animationDuration = speed + "s";
});

// Console message
console.log("Jai Karnataka!");
console.log("3D Flag Animation Started");