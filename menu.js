let menuList = [{ img: "img/latte.png", name: "Hot Coffee", desc: "or randomised words which don't look even slightly believable." }, { img: "img/croissant.png", name: "Croissant", desc: "or randomised words which don't look even slightly believable." }, { img: "img/milk.png", name: "Milk", desc: "or randomised words which don't look even slightly believable."}, {img:"img/pancake.png", name:"Pancake", desc:"or randomised words which don't look even slightly believable."}]
let element ="";
const menuElement = document.getElementById("menu");

for (let i = 0; i < 2; i++) {
  for (let index = 0; index < menuList.length; index++) {
     element += `<li class="item"><img class="png" src="${menuList[index].img}" width="200px" height="200px">
        <h3>${menuList[index].name}</h3>
         <p>${menuList[index].desc}</p></li>`
}
   
}
menuElement.innerHTML =element;


