export function getLessonWord(num) {
  const mod100 = num % 100;
  if (mod100 >= 11 && mod100 <= 14) {
    return "уроков";
  }
  const mod10 = num % 10;
  if (mod10 === 1) {
    return "Урок";
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return "Урока";
  }
  return "Уроков";
}

export function getHourWord(num) {
  const mod100 = num % 100;
  if (mod100 >= 11 && mod100 <= 14) {
    return "Часов";
  }
  const mod10 = num % 10;
  if (mod10 === 1) {
    return "Час";
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return "Часа";
  }
  return "Часов";
}
