let imageCardsDiv = document.querySelector(".card-div-2");
let leftbtn = document.querySelector(".left-btn");
let rightbtn = document.querySelector(".right-btn");
let cardsDivScroll = document.querySelector(".all-mix-cards-div");

function onLeftClick() {
  cardsDivScroll.scrollLeft += -1000;
}
function onRightClick() {
  cardsDivScroll.scrollLeft += 1000;
}

const storedetails = async () => {
  try {
    const fetchData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await fetchData.json();
    loadImage(jsonData);
  } catch (error) {
    console.log(error);
  }
};
storedetails();

function loadImage(data) {
  console.log(data);
  data.forEach((item) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("mix-card");
    let image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    cardDiv.append(image);
    imageCardsDiv.appendChild(cardDiv);
  });
}
