export function createBackgroundStyles(imageUrl, options = {}) {
  const { repeat = "repeat", size = "cover", position = "0 0", attachment = "scroll" } = options;

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: repeat,
    backgroundSize: size,
    backgroundPosition: position,
    backgroundAttachment: attachment,
  };
}
