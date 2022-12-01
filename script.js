const carro = document.querySelector(".carro ");
const pipe = document.querySelector(".pipe");
const jump = () => {
  carro.classList.add("jump");

  setTimeout(() => {
    carro.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipeposition = pipe.offsetleft;
  const carroposition = window.getComputedStyle(carro).bottom.replace("px", "");
  if (pipeposition >= 148) {
    pipe.style.animation = "none";
    pipe.style.left = "${pipeposition}px";
  }
}, 10);

document.addEventListener("keydown", jump);
