/* JS Project */

const foodElement = document.getElementById("food");
let foodList = [];

/* displayFoods Function */

const displayFoods = (food) => {
    
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = food.strMeal;

        const img = document.createElement('img');
        img.src = food.strMealThumb;
        img.alt = food.strMeal;

        article.appendChild(h3);
        article.appendChild(img);

        foodElement.appendChild(article);
    };




/* getFoods function filters and searches for the correct API*/


const getFoods = async () => {
    reset();
    let urlBase = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
    let foodSelect = document.querySelector('#userFood').value;
    let fetchUrl = urlBase.concat(foodSelect);
    const response = await fetch(fetchUrl);
    let foodList = await response.json();
    foodList.meals.forEach( food =>
      {
        displayFoods(food);  
      });
    
}

/* reset Function */
const reset = () => {
    foodElement.innerHTML = "";
}

/* Event Listener */
document.querySelector('#searchFood').addEventListener("click", getFoods);

getFoods();