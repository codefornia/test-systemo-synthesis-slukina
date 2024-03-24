import { math } from '@shared/libs';

export function roll(dice: HTMLElement, callback: () => void): number {
  let angleX = 0;
  let angleY = 0;
  let result = 1;
  let delay = 0;

  const xTurn = 4 + math.getRandomInt(8),
    yTurn = 4 + math.getRandomInt(8);

  delay = Math.max(xTurn, yTurn) * 250;

  angleX += 90 * xTurn;
  angleY += 90 * yTurn;

  if (angleX % 180) {
    math.getRandomInt(3) > 1 && (angleX += 90);
  }

  dice.style.transform = 'rotateX(' + angleX + 'deg) rotateY(' + angleY + 'deg)';
  dice.style.transitionDuration = delay + 'ms';

  setTimeout(() => {
    callback();
  }, delay);

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
        console.error('Something went wrong, please try again');
    }
  } else if (x === 90) {
    result = 4;
  } else if (x === 270) {
    result = 3;
  }

  return result;
}
