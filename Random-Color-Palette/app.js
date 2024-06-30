const generateButton = document.getElementById("generate-btn");

const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);

  document.querySelector(".color-pallet-box").style.backgroundColor = randomCode;
  document.getElementById("hex-code").innerText = randomCode;
}

generateButton.addEventListener("click", generateRandomColor);
generateRandomColor();