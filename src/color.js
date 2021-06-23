
function getRandomNumber(index) {
    return Math.floor(Math.random() * 255 / (index + 1))
}

export const randomColor = (box, index) => {
    const r = getRandomNumber(index);
    const g = getRandomNumber(index);
    const b = getRandomNumber(index);
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}