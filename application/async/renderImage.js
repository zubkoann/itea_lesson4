// Простая функция которая в блоке с id tagert отрисовывает нам картинку с указаным урл.
const RenderImage = (image) => {
  let TargetBlock = document.getElementById("target");
      TargetBlock.appendChild(image);
};

export default RenderImage;