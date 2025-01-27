// utils/backgroundUtils.js
export function createBackgroundStyles(imageUrl, options = {}) {
  const {
    repeat = "no-repeat",
    size = "cover",
    position = "center",
    attachment = "scroll",
  } = options;

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: repeat,
    backgroundSize: size,
    backgroundPosition: position,
    backgroundAttachment: attachment,
  };
}
