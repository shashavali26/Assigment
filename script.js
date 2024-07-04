let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");
let m6 = document.getElementById("m6");
let m7 = document.getElementById("m7");
let btn = document.getElementById("acart");
let item;
async function main1(){
    let ndata = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448");
    let data = await ndata.json();
      m1.innerHTML = data.product.vendor;
     item = m2.innerHTML=data.product.title;
    m3.innerHTML=data.product.price;
    m5.innerHTML=data.product.compare_at_price;
    m7.innerHTML=data.product.description;
    // btn.onclick=()=>{m6.innerHTML=`${a1} with color yellow and size small is added to cart`;
    //               m6.style.backgroundColor = "green";
    //                m6.style.color= "white";}
}
main1();
let selectedSize = null;
let selectedSiz = null;
function selectSize(button) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => 
        btn.classList.remove('selected')
        );
    button.classList.add('selected');
    selectedSize = button.innerText;
}
function addtoCart() {
    const output = document.getElementById('output');
    if (selectedSize) {
        output.textContent = `${item} with color ${selectedSiz} and size ${selectedSize} added to cart.`;
        output.style.backgroundColor="lightgreen";

    } else {
        output.textContent = 'Please select a size before adding to cart.';
    }
}
function selectSi(button) {
    const buttons = document.querySelectorAll('.b1');
    buttons.forEach((btn) => 
        btn.classList.remove('selected')
        );
    button.classList.add('selected');
    selectedSiz = button.getAttribute("name");
}
function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}