var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}

const Section = document.getElementById("product-section")

const left = document.createElement("div")
left.className = "left-column";
const bigimg = document.createElement("img")
bigimg.src = productData.photos[0];
bigimg.id = "productImg"
left.appendChild(bigimg);
Section.prepend(left);



const right = document.createElement("div")
right.className = "right-column";

const info = document.createElement("div")

info.className = "product-description";
const namE = document.createElement("h1")
namE.id = "name"
namE.innerHTML = productData.name;
info.appendChild(namE);

const branD = document.createElement("h4")
branD.id = "brand"
branD.innerHTML = productData.brand;
info.appendChild(branD);

const headPrice = document.createElement("h3")
headPrice.innerHTML = "Price: Rs  ";
const Price = document.createElement("span")
Price.id = "price"
Price.innerHTML = productData.price
headPrice.appendChild(Price);
info.appendChild(headPrice);

const descriptioN = document.createElement("div");
descriptioN.className = "description";
const heading3 = document.createElement("h3");
heading3.innerHTML = "Description";
var descriptionP = document.createElement("p");
descriptionP.id = "description";
descriptionP.innerHTML = productData.description;
descriptioN.appendChild(heading3);
descriptioN.appendChild(descriptionP);
info.appendChild(descriptioN);

right.appendChild(info);

var productPreview = document.createElement("div");
productPreview.className = "product-preview";

var heading31 = document.createElement("h3");
heading31.innerHTML = "Product Preview";

var previewIMG = document.createElement("div");
previewIMG.id = "previewImg";

for(var i=0; i<productData.photos.length; i++){
 
  var imgList = document.createElement("img");
  imgList.className = "img-list";
  imgList.id = "img" + i;
  imgList.src = productData.photos[i];
  previewIMG.appendChild(imgList)
  previewIMG.append(imgList);
  if(i == 0){
    imgList.classList.add("active");
  }
  
  imgList.addEventListener("click", function(e){
    bigimg.src = e.target.src;
    var op = document.getElementsByClassName("active");
    console.log(op)
    if(op.length>0){
    op[0].classList.remove("active");
  }
    e.target.classList.add("active");

})
 
};
productPreview.appendChild(heading31)
productPreview.appendChild(previewIMG)

right.appendChild(productPreview);



var btN = document.createElement("div");
btN.className = "btn";
var addToCart = document.createElement("button");
addToCart.id = "add-to-cart";
addToCart.innerHTML = "Add to Cart";
btN.appendChild(addToCart);
right.appendChild(btN)


Section.append(right)











