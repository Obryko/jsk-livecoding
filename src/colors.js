
function getRandomColor(index) {
    return Math
        .floor(Math.random() * 255 / (index + 1));
}

export const randomColor = (box, index) => {
    const r = getRandomColor(index);
    const g = getRandomColor(index);
    const b = getRandomColor(index);
    box.style.backgroundColor = `rgb(${r},${g},${b})`
}