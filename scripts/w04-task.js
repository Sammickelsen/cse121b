/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sam Mickelsen",
    photo: "images/Sam.JPG",
    favoriteFoods: ["Taco Soup", "Cookies", "Grilled Cheese", "Curry"],
    hobbies: ["Gaming", "Programming", "Cooking", "Board Games"],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Boise, ID",
        length: "12 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Hillsboro, OR",
        length: "6 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Austin, TX",
        length: "3 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Dallas, TX",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

const imageElement =  document.querySelector('img');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt).append(dd);
});
