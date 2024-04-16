let imageCardsDiv = document.querySelector(".card-div-2");
let cardGrid = document.querySelector(".page3-cards-grid");
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

const store3CardsData = async () => {
  try {
    const fetchData = await fetch("https://dummyjson.com/products");
    const fetchJson = await fetchData.json();
    page3Cards(fetchJson);
  } catch (error) {
    console.log(error);
  }
};
store3CardsData();
function page3Cards(data) {
  data.products.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("page3-card");
    let image = document.createElement("img");
    image.src = item.images[0];
    let titleDiv = document.createElement("div");
    let cardtitle = document.createElement("h4");
    cardtitle.textContent = item.title;
    titleDiv.classList.add("text-title-div");
    titleDiv.appendChild(cardtitle);
    card.appendChild(image);
    card.append(titleDiv);
    cardGrid.appendChild(card);
  });
}

function loadImage(data) {
  data.forEach((item) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("mix-card");
    let image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    let titleDiv = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = item.title;
    titleDiv.classList.add("title-div");
    titleDiv.append(title);
    cardDiv.append(image);
    cardDiv.appendChild(titleDiv);
    imageCardsDiv.appendChild(cardDiv);
  });
}

let currIndex = 0;

let images = [
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
let image = document.getElementById("top-content-img");
function changeHeroSectionImg() {
  image.src = images[currIndex];
  currIndex++;

  if (currIndex >= images.length) {
    currIndex = 0;
  }
}

setInterval(changeHeroSectionImg, 10 * 1000);
