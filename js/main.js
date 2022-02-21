/* Client X:Y setup 

var dot = document.getElementById('dot');
document.body.addEventListener('click', (e) => {
    dot.style.transform = `translateY(${e.clientY - 25}px)`;
    dot.style.transform += `translateX(${e.clientX - 25}px)`;
    dot.style.opacity = 1;
}, false);
*/

/* click position setup 
//create shortcut constants
const demo  = document.querySelector('.demo');
const point = document.querySelector('#point');

//detect mousedown events and handle them.
demo.addEventListener('mousedown', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});
const demo2  = document.querySelector('.demo2');
const follow = document.querySelector('#follow');

detect mousedown events and handle them.
demo2.addEventListener('mousedown', (e) => {
    follow.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});

demo2.addEventListener('pointermove', (e) => {
    follow.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});
*/

/*When User finishes a step and clicks on the button, trigger an animation that points to the next step */
/*First, point to the first step */






/* Log the event object to the browser's js console */

/* Another animation triggered by a mouse event (not hover) */

/*Display the position details of the mouse as it moves */
const mousePosn  = document.querySelector('.mouse-posn');
const follow = document.querySelector('#follow');

mousePosn.addEventListener('pointermove', (e) => {
    follow.innerHTML = e.offsetX + ', ' + e.offsetY;
});
