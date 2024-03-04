export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function roll(e, callback) {
    let angleX = 0;
    let angleY = 0;
    let result = 1;
    let delay = 0;

    const xTurn = 4 + getRandomInt(8),
        yTurn = 4 + getRandomInt(8)

    delay = Math.max(xTurn, yTurn) * 250

    angleX += 90 * xTurn
    angleY += 90 * yTurn
    // balancing the results
    if (angleX % 180) {
        getRandomInt(3) > 1 && (angleX += 90)
    }
    const dice = document.querySelector('.dice')
    dice.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
    dice.style.transitionDuration = delay + 'ms'

    setTimeout(() => {
        callback();
    }, delay)

    let x = angleX % 360;
    let y = angleY % 360;

    if (x === 0 || x === 180) {
        switch ((x + y) % 360) {
            case 0:
                result = 1;
                break;
            case 90:
                result = 5;
                break;
            case 180:
                result = 6;
                break;
            case 270:
                result = 2;
                break;
            default:
                console.error('брось еще разок');
        }
    } else if (x === 90) {
        result = 4
    } else if (x === 270) {
        result = 3
    }


    return (result)

}