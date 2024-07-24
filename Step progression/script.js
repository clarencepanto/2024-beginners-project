const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const progCircles = document.querySelectorAll('.circle');
const progress = document.querySelector('#progress');


let currentActive = 1;

nextButton.addEventListener('click', function () {
    currentActive++

    if (currentActive > progCircles.length ) {
        currentActive = progCircles.length 
    }
    update()
})
prevButton.addEventListener('click', function () {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})
function update () {
    progCircles.forEach((progCircles, idx) => {
        if (idx < currentActive) {
            progCircles.classList.add('active')
        } else {
            progCircles.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length -1)/ (progCircles.length -1) * 100 + '%';

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === progCircles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }

}