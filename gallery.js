let galleryList = [{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNhaZroaF8E1mudKHrpOaKJuF6IsHc0cuhg&s" }, { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXq5TGbGjOFYs1KjNz3ntamS44Fw--c5Sv_w&s" }, { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHehGR_LYsCTPvZknicETp3k1HynE2x30dg&s" }, { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiPNz2oll_2_fZHzEglEcpGLX4_yqm9lYbg&s" }, { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2jAfKP4Hah2QB478bB1QQ7GPZaZoVwpTCw&s" }, { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vAjMZ2BR9YMaDbn2BVrrxvzJ_o9I6SicDg&s" }]
let element = "";
const galleryListElement = document.getElementById("gallery-list");
for (let i = 0; i < galleryList.length; i++) {
  element += `<li class="gallery-png">
                <img onclick="viewImg('${galleryList[i].img}');" class="png" src="${galleryList[i].img}"
                    width="300px">
            </li>`
}
galleryListElement.innerHTML = element;
const imgViewelement = document.getElementById("img-view");
const overayelement = document.getElementById("overlay");
function viewImg(img) {
  imgViewelement.innerHTML = `<img  class="img-full" src="${img}"> <spen onclick="closeImg()" class="material-icons-outlined">
  logout
  </spen>`;
  overayelement.style.display = "block";
  imgViewelement.style.display ="block";
}
function closeImg() {
  imgViewelement.style.display ="none";
  overayelement.style.display ="none";
}