const toggleBtn = () => {
  let menu = document.getElementById("menuList");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
