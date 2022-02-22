/*When User clicks on the button for the step, trigger an animation that points to it as a placeholder */


//create shortcut constants
let start = document.getElementById('starthere')
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');

const steps = [step1, step2, step3, step4, step5];
let current = 0;

let next = document.getElementById('next');

/*Iterative handler for subsequent click  events to move the pointer to the next step. */
const mover = e => {
    next.style.transform = `translateY(${e.target.offsetTop - 40}px)`;
    next.style.transform += `translateX(${e.target.offsetLeft - 60}px)`;

    next.style.opacity = 1;

    /* Log the event object to the browser's js console */
    console.log(e);
    console.log("Position of button clicked (top, left):", e.target.offsetTop, e.target.offsetLeft);
    console.log(`User clicked on Step ${current+1}`);

    /* Prevent incorrect clicks from messing up the progression */
    steps[current].removeEventListener('click', mover);

    // make the previous step green to indicate it is completed.
    if (current > 0) {
        steps[current - 1].style.backgroundColor = "green";
    }
    //increment the step to the next step
    current += 1;

    //check to see where we are and stop when approach the last step 
    if (current < steps.length) {
        steps[current].addEventListener('click', mover, false);
        start.innerText = "Click on the next Step to continue";
    } else {
        start.innerText = "Congratulations on making perfect pancakes!";
        next.style.opacity = 0;
        steps[current - 1].style.backgroundColor = "green";
        start.style.transform = "scale(1.5)";
        console.log("Now eat your pancakes!");
    }
}
/* Trigger an animation based on user mouse clicks - detect the first click event and handle it */

steps[current].addEventListener('click', mover, false);

 /* another animation triggered by mouse event */
 const mouseMsg = document.querySelector('.mouse-msg');

 mouseMsg.addEventListener('mouseenter', (e) => {
    mouseMsg.style.backgroundColor="gray";
});
mouseMsg.addEventListener('mouseleave', (e) => {
    mouseMsg.style.backgroundColor="pink";
});

/*Display the position details of the mouse as it moves */
const mousePosn = document.querySelector('.mouse-posn');
const follow = document.querySelector('#follow');

mousePosn.addEventListener('pointermove', (e) => {
    follow.innerHTML = e.offsetX + ', ' + e.offsetY;
});