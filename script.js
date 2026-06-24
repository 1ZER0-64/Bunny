// ======================================
// BIRTHDAY PROJECT - PART 1
// Questions + Music + Transitions
// ======================================

const introScreen = document.getElementById("introScreen");
const questionSection = document.getElementById("questionSection");
const loadingSection = document.getElementById("loadingSection");
const messageSection = document.getElementById("messageSection");

const startBtn = document.getElementById("startBtn");

const questionTitle = document.getElementById("questionTitle");
const optionsContainer = document.getElementById("optionsContainer");

const bgMusic = document.getElementById("bgMusic");

// ======================================
// QUESTIONS
// ======================================

const questions = [
{
    question:
    "🎂 If your birthday had a theme today, which one would fit you best?",

    options:[
        "👑 Main Character Energy",
        "✨ Chaotic But Fun",
        "🌷 Soft & Peaceful"
    ]
},

{
    question:
    "🎁 You receive a surprise gift. Which one are you opening first?",

    options:[
        "🎁 Mystery Box",
        "📸 Memory Album",
        "✈️ Adventure Ticket"
    ]
},

{
    question:
    "💫 If you could wake up anywhere tomorrow, where would you choose to be?",

    options:[
        "🏔️ Gosaikunda",
        "🌷 A Tulip Garden",
        "🌊 Somewhere I've Never Been"
    ]
}
];

let currentQuestion = 0;

// ======================================
// START EXPERIENCE
// ======================================

startBtn.addEventListener("click", () => {

    bgMusic.play();

    introScreen.classList.add("hidden");

    questionSection.classList.remove("hidden");

    showQuestion();

});

// ======================================
// SHOW QUESTION
// ======================================

function showQuestion(){

    const q = questions[currentQuestion];

    questionTitle.textContent = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach(option => {

        const btn = document.createElement("button");

        btn.className = "optionBtn";

        btn.textContent = option;

        btn.addEventListener("click", nextQuestion);

        optionsContainer.appendChild(btn);

    });

}

// ======================================
// NEXT QUESTION
// ======================================

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        showLoadingScreen();

    }

}

// ======================================
// LOADING SCREEN
// ======================================

function showLoadingScreen(){

    questionSection.classList.add("hidden");

    loadingSection.classList.remove("hidden");

    setTimeout(() => {

        loadingSection.classList.add("hidden");

        messageSection.classList.remove("hidden");

        startMessageAnimation();

    }, 3000);

  }// ======================================
// PART 2
// Message Animation + Transition
// ======================================

const lines = document.querySelectorAll(".line");
const signature = document.querySelector(".signature");

function startMessageAnimation(){

    let delay = 0;

    lines.forEach(line => {

        setTimeout(() => {

            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
            line.style.transition = "1.2s";

        }, delay);

        delay += 1800;

    });

    setTimeout(() => {

        signature.style.opacity = "1";
        signature.style.transition = "2s";

    }, delay + 1000);

    setTimeout(() => {

        transitionToNameReveal();

    }, delay + 7000);

}

// ======================================
// TRANSITION TO NAME REVEAL
// ======================================

const nameRevealSection =
document.getElementById("nameRevealSection");

function transitionToNameReveal(){

    messageSection.classList.add("hidden");

    nameRevealSection.classList.remove("hidden");

    startNameReveal();

}

// ======================================
// NAME REVEAL ELEMENT
// ======================================

const nameReveal =
document.getElementById("nameReveal");

function startNameReveal(){

    nameReveal.style.opacity = "1";

    nameReveal.animate(
    [
        {
            transform:"scale(0.5)",
            opacity:0
        },

        {
            transform:"scale(1.15)",
            opacity:1,
            offset:0.5
        },

        {
            transform:"scale(1)",
            opacity:1
        }
    ],
    {
        duration:5000,
        fill:"forwards"
    });

    setTimeout(() => {

        startSparklePhase();

    }, 6500);

}

// ======================================
// PLACEHOLDER
// PART 3 WILL CONTINUE HERE
// ======================================

function startSparklePhase(){

    // Part 3

                      }
// ======================================
// PART 3
// Sparkles + Cake + Photos + Final
// ======================================

const cakeSection =
document.getElementById("cakeSection");

const photoSection =
document.getElementById("photoSection");

const finalSection =
document.getElementById("finalSection");

const cake =
document.getElementById("cake");

const cakeTitle =
document.querySelector("#cakeContainer h2");

const photoDisplay =
document.getElementById("photoDisplay");

// ======================================
// SPARKLE PHASE
// ======================================

function startSparklePhase(){

    nameReveal.animate(
    [
        {
            transform:"scale(1)"
        },
        {
            transform:"scale(1.25)"
        },
        {
            transform:"scale(0.8)"
        }
    ],
    {
        duration:3000,
        fill:"forwards"
    });

    setTimeout(() => {

        createSparkles();

    }, 2500);

    setTimeout(() => {

        nameRevealSection.classList.add("hidden");

        cakeSection.classList.remove("hidden");

        startCakeReveal();

    }, 4500);

}

// ======================================
// SPARKLES
// ======================================

function createSparkles(){

    for(let i=0;i<80;i++){

        const sparkle =
        document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "fixed";

        sparkle.style.left =
        (window.innerWidth/2) + "px";

        sparkle.style.top =
        (window.innerHeight/2) + "px";

        sparkle.style.zIndex = "999";

        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);

        const x =
        (Math.random()*800)-400;

        const y =
        (Math.random()*800)-400;

        sparkle.animate(
        [
            {
                transform:
                "translate(0,0) scale(0.5)",
                opacity:1
            },

            {
                transform:
                `translate(${x}px,${y}px) scale(1.5)`,
                opacity:0
            }
        ],
        {
            duration:2500,
            easing:"ease-out"
        });

        setTimeout(() => {

            sparkle.remove();

        },2500);

    }

}

// ======================================
// CAKE
// ======================================

function startCakeReveal(){

    cake.animate(
    [
        {
            transform:"scale(0.3)",
            opacity:0
        },

        {
            transform:"scale(1.1)",
            opacity:1
        },

        {
            transform:"scale(1)",
            opacity:1
        }
    ],
    {
        duration:3500,
        fill:"forwards"
    });

    setTimeout(() => {

        cakeTitle.style.opacity = "1";

        cakeTitle.style.transition = "2s";

    },2500);

    setTimeout(() => {

        startPhotoSlideshow();

    },7000);

}

// ======================================
// PHOTOS
// ======================================

const photos = [
    "image1.png",
    "image2.png",
    "image3.png"
];

let photoIndex = 0;

function startPhotoSlideshow(){

    cakeSection.classList.add("hidden");

    photoSection.classList.remove("hidden");

    photoDisplay.src = photos[0];

    const interval = setInterval(() => {

        photoDisplay.style.opacity = "0";

        setTimeout(() => {

            photoIndex++;

            if(photoIndex >= photos.length){

                clearInterval(interval);

                setTimeout(() => {

                    showFinalSection();

                },5500);

                return;

            }

            photoDisplay.src =
            photos[photoIndex];

            photoDisplay.style.opacity = "1";

        },1000);

    },6000);

}

// ======================================
// FINAL SECTION
// ======================================

function showFinalSection(){

    photoSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

}

// ======================================
// FLOATING HEARTS
// ======================================

setInterval(() => {

    const heart =
    document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.fontSize =
    (18 + Math.random()*30) + "px";

    heart.style.animationDuration =
    (6 + Math.random()*6) + "s";

    document
    .getElementById("floatingHearts")
    .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },12000);

},600);
