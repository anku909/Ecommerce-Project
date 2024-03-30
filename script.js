let imageCardsDiv = document.querySelector(".card-div-2");
let cardGrid = document.querySelector(".page3-cards-grid");
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
    console.log(item);
    console.log(cardGrid);

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
