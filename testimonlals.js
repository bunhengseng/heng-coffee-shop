let testimonlalsList = [{ img: "img/w3c2by4oacjf1.png", name: "Speed", desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock," }, { img: "img/Untitled - Copy.png", name: "Elon Mask", desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock," }, { img: "img/Untitled.png", name: "VannDa", desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock," }]
let element = "";
const testimonlalsElement = document.getElementById("testimonlals");
for (let index = 0; index < testimonlalsList.length; index++) {
  element += `<li class="splide__slide"><img class="png" src="${testimonlalsList[index].img}" width="200px" height="200px"><h3>
   ${testimonlalsList[index].name}</h3>
         <p>${testimonlalsList[index].desc}</p></li>
   
`
}
testimonlalsElement.innerHTML = element;

var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
});

splide.mount();