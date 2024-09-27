document.addEventListener("DOMContentLoaded", (event) => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  const getRandomColor = () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
  };

  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
