import { randomColor } from "./color";

const boxes = [...document.querySelectorAll('.box')];

const changeBoxesColor = (event) => {
    console.log(event);
    boxes.forEach(randomColor)
};

const buttonEvent = () => {
    const button = document.getElementById('randomAll');
    button.addEventListener('click', changeBoxesColor);
}

const addEventsToBoxes = () => {
    boxes.forEach(box => {
        box.addEventListener('dblclick', (event) => {
            randomColor(box, 0);
        })
    })
}

export default () => {
    buttonEvent();
    addEventsToBoxes();
}