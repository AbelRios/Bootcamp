function popular() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/popular.php");
  xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );

  xhr.send(data);
}

function cocktail() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open("GET", "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin");
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}

function cocktailVod() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open("GET", "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Vodka");
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}

function cocktailRum() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open("GET", "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Rum");
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}
function cocktailTequila() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open(
    "GET",
    "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Tequila"
  );
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}

function cocktailWine() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open("GET", "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Wine");
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}

function cocktailBeer() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open("GET", "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Beer");
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}

function cocktailWhisky() {
  let divElement = document.getElementById("list-drinks");

  let data = null;
  let http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let drinks = JSON.parse(this.responseText);
      console.log(drinks);

      for (let drink of drinks.drinks) {
        divElement.innerHTML += ` <li> <div class='flex'> <a href='ingredients.html?idDrink=${drink.idDrink}'><img src='${drink.strDrinkThumb}' class='image' width='200px'></a> ${drink.strDrink} </div> </li> <br> <br>`;
      }
    }
  };

  http.open(
    "GET",
    "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Scotch"
  );
  http.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  http.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );
  http.send(data);
}

function ingredients() {
  let drinkId = new URLSearchParams(window.location.search).get("idDrink");
  console.log(drinkId);
  let datas = document.getElementById("container");

  const data = null;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
      let ingr = JSON.parse(this.responseText);
      console.log(ingr);

      for (let i of ingr.drinks) {
        datas.innerHTML += `<p> <img src='${i.strDrinkThumb}' class='image' width='250px'> </p>
            <p> <b> Name of the cocktail: </b></br> ${i.strDrink} </p>
            <p> <b> Category of the cocktail: </b> </br> ${i.strCategory} </p>
            <p> <b> Glassware: </b> </br> ${i.strGlass} </p>
            <p> <b> Measure: </b> </br> ${i.strMeasure1} of ${i.strIngredient1} </p>
            <p> ${i.strMeasure2} of ${i.strIngredient2} </p>`;
        if (i.strIngredient3) {
          datas.innerHTML += ` <p> ${i.strMeasure3} of ${i.strIngredient3} </p>`;
        }
        if (i.strIngredient4) {
          datas.innerHTML += ` <p> ${i.strMeasure4} of ${i.strIngredient4} </p>`;
        }
        if (i.strIngredient5) {
          datas.innerHTML += ` <p> ${i.strMeasure5} of ${i.strIngredient5} </p>`;
        }
        if (i.strIngredient6) {
          datas.innerHTML += ` <p> ${i.strMeasure6} of ${i.strIngredient6} </p>`;
        }
        if (i.strIngredient7) {
          datas.innerHTML += ` <p> ${i.strMeasure7} of ${i.strIngredient7} </p>`;
        }
        if (i.strIngredient8) {
          datas.innerHTML += ` <p> ${i.strMeasure8} of ${i.strIngredient8} </p>`;
        }
        if (i.strIngredient9) {
          datas.innerHTML += ` <p> ${i.strMeasure9} of ${i.strIngredient9} </p>`;
        }
        if (i.strIngredient10) {
          datas.innerHTML += ` <p> ${i.strMeasure10} of ${i.strIngredient10} </p>`;
        }
        if (i.strIngredient11) {
          datas.innerHTML += ` <p> ${i.strMeasure11} of ${i.strIngredient11} </p>`;
        }
        if (i.strIngredient12) {
          datas.innerHTML += ` <p> ${i.strMeasure12} of ${i.strIngredient12} </p>`;
        }
        if (i.strIngredient13) {
          datas.innerHTML += ` <p> ${i.strMeasure13} of ${i.strIngredient13} </p>`;
        }
        if (i.strIngredient14) {
          datas.innerHTML += ` <p> ${i.strMeasure14} of ${i.strIngredient14} </p>`;
        }
        if (i.strIngredient15) {
          datas.innerHTML += ` <p> ${i.strMeasure15} of ${i.strIngredient15} </p>`;
        }
        datas.innerHTML += `<p> <b> Instruction: </b> </br> <div class='text'> ${i.strInstructions} </div>  </p>`;
      }
    }
  });
  //let url = `http://thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

  let url = `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${drinkId}`;

  xhr.open("GET", url, true);
  xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "fe350936e5mshd9f406b8b6e1030p1f6777jsnba64056fa684"
  );

  xhr.send(JSON.stringify(data));
}

// const formSearch = document.getElementById("formSearch");

// const searchValue = formSearch.getElementById("searchInput").value;

// formSearch.getElementById("searchButton").addEventListener("click", () => {
//   console.log(" llegaaaaaaaaa ", searchValue);
// });

function testButton() {
  let buscador = document.getElementById("searchInput").value;
}
