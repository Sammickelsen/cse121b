/* W05: Programming Tasks */

/* Declare and initialize global variables */

const foodElement = document.getElementById("food");
let foodList = [];

/* async displayTemples Function */

const displayFoods = (foods) => {
    
    foods.orEach( (food) => 
    {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = food.meals.strMeal;

        const img = document.createElement('img');
        img.src = food.strMealThumb;
        img.alt = food.strMeal;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/


const getFoods = async () => {
    let urlBase = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
    let foodSelect = String(document.querySelector('#userFood').ariaValueText);
    let fetchUrl = urlBase.concat(foodSelect);
    const response = await fetch(fetchUrl);
    foodList = await response.json();
    displayFoods(foodList);
}

/* reset Function */
const reset = () => {
    foodElement.innerHTML = "";
}

/* sortBy Function */



/* Event Listener */
document.querySelector('#searchFood').addEventListener("click", getFoods);

getFoods();