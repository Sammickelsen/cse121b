/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");

let templeList = {};
/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.foreach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
    });
}



/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
}

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
