"use strict";
document.addEventListener("DOMContentLoaded", init);

const url = "https://beer-waffle.herokuapp.com/beertypes";

function init() {
  fetchData();
}

function fetchData() {
  fetch(url, {
    method: "get",
  })
    .then((e) => e.json())
    .then((e) => {
      fetchBeers(e);
    });
}

function fetchBeers(beers) {
  console.log(beers);

  beers.forEach(displayBeer);
}

function displayBeer(beer) {
  console.log(beer);

  const beerTemplate = document.querySelector("template").content;
  const beerList = document.querySelector("body");
  const beerClone = beerTemplate.cloneNode(true);

  beerClone.querySelector("h2.name").textContent = `${beer.name}`;
  beerClone.querySelector("h2.category").textContent = `${beer.category}`;
  beerClone.querySelector("p.alcohol").textContent = `ABV: ${beer.alc} %`;
  beerClone.querySelector("img.logo").src = `images/${beer.label}`;
  console.log(`images/${beer.label}`);

  beerList.appendChild(beerClone);
}
