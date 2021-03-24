import { randomColor } from "./colors";

const changeBoxesColor = (event) => {
    const boxes = [...document.getElementsByClassName('box')];
    console.log(event);
    boxes.forEach(randomColor);
}

const buttonEvent = () => {
    const button = document.getElementById('changeColor');
    button.addEventListener('click', changeBoxesColor);
}

const view = () => {


    buttonEvent();
};
export default view;