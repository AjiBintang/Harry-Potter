// MAGIC PARTICLES

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

for (let i = 0; i < 180; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.3 + 0.1,
    alpha: Math.random(),
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.y -= p.speed;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(212,175,55,${p.alpha})`;

    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// WAND CURSOR

const wand = document.getElementById("wand-light");

document.addEventListener("mousemove", (e) => {
  wand.style.left = e.clientX + "px";

  wand.style.top = e.clientY + "px";

  const spark = document.createElement("div");

  spark.classList.add("spark");

  spark.style.left = e.clientX + "px";

  spark.style.top = e.clientY + "px";

  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 700);
});

// MAGIC CLICK BURST

document.addEventListener("click", (e) => {
  for (let i = 0; i < 25; i++) {
    const spark = document.createElement("div");

    spark.classList.add("spark");

    const x = e.clientX + (Math.random() * 120 - 60);

    const y = e.clientY + (Math.random() * 120 - 60);

    spark.style.left = x + "px";

    spark.style.top = y + "px";

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 800);
  }
});

// SORTING HAT

const hat = document.getElementById("hat");

const result = document.getElementById("result");

const houses = [
  {
    name: "🦁 Gryffindor",
    desc: "Brave and determined.",
  },

  {
    name: "🦅 Ravenclaw",
    desc: "Wise and creative.",
  },

  {
    name: "🦡 Hufflepuff",
    desc: "Loyal and hardworking.",
  },

  {
    name: "🐍 Slytherin",
    desc: "Ambitious and strategic.",
  },
];

hat.addEventListener("click", () => {
  hat.style.transform = "scale(1.25) rotate(10deg)";

  setTimeout(() => {
    hat.style.transform = "scale(1) rotate(0deg)";
  }, 500);

  const house = houses[Math.floor(Math.random() * houses.length)];

  result.innerHTML = `
    <strong>${house.name}</strong>
    <br>
    ${house.desc}
    `;
});

// SPELL SYSTEM

const spellName = document.getElementById("spell-name");

const castBtn = document.getElementById("cast-btn");

const spells = ["Lumos", "Nox", "Protego", "Expelliarmus", "Alohomora", "Accio", "Reparo", "Expecto Patronum", "Wingardium Leviosa"];

castBtn.addEventListener("click", () => {
  const spell = spells[Math.floor(Math.random() * spells.length)];

  spellName.textContent = spell;

  flashMagic();
});

// MAGIC FLASH

function flashMagic() {
  const flash = document.createElement("div");

  flash.style.position = "fixed";

  flash.style.inset = "0";

  flash.style.background = "rgba(212,175,55,.15)";

  flash.style.pointerEvents = "none";

  flash.style.zIndex = "999";

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.remove();
  }, 250);
}

// PARALLAX MOON

const moon = document.querySelector(".moon");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  moon.style.transform = `translateY(${scroll * 0.2}px)`;
});

// HOUSE GLOW EFFECT

const cards = document.querySelectorAll(".house");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 50px rgba(212,175,55,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// FLOATING MAGIC ORBS

setInterval(() => {
  const orb = document.createElement("div");

  orb.style.position = "fixed";

  orb.style.width = "8px";

  orb.style.height = "8px";

  orb.style.borderRadius = "50%";

  orb.style.background = "#d4af37";

  orb.style.left = Math.random() * window.innerWidth + "px";

  orb.style.bottom = "-20px";

  orb.style.pointerEvents = "none";

  orb.style.boxShadow = "0 0 20px #d4af37";

  orb.style.zIndex = "2";

  document.body.appendChild(orb);

  let y = -20;

  const move = setInterval(() => {
    y += 2;

    orb.style.bottom = y + "px";

    orb.style.opacity = 1 - y / window.innerHeight;

    if (y > window.innerHeight) {
      clearInterval(move);

      orb.remove();
    }
  }, 16);
}, 900);

// HERO TITLE FADE IN

window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero h1");

  heroTitle.animate(
    [
      {
        opacity: 0,
        transform: "translateY(50px)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],

    {
      duration: 1800,
      easing: "ease-out",
    },
  );
});
