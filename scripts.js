const copyBtn = document.getElementById("copyBtn");
const copyText = document.getElementById("copyText");

copyBtn.onclick = () => {
  copyText.select();
  document.execCommand("copy");
  Swal.fire({
    // position: "top-end",
    icon: "success",
    title: "Copiado para sua área de transferência",
    text: "Cole a chave PIX no App do seu banco.",
    showConfirmButton: true,
    confirmButtonText: "Ok",
    showConfirmButton: false,
  });
};

function toggleMenu() {
  console.log('teste')
  const mainMenu = document.querySelector(".main-menu");
  const classListMenu = mainMenu?.classList;
  if (!classListMenu?.contains("active")) {
    mainMenu?.classList.add("active");
  } else {
    mainMenu?.classList.remove("active");
  }
}
