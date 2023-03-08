const cityForm = document.querySelector("#weatherForm");

const getWeatherConditions = async(city) => {

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        let div = document.createElement("div");
        div.setAttribute("id", "conditions");
        let city = document.createElement("h2");
        let cityNode = document.createTextNode(data.name);
        city.appendChild(cityNode);

        div.setAttribute("id", "conditions");
        let country = document.createElement("h1");
        let countryNode = document.createTextNode(data.sys.country);
        country.appendChild(countryNode);

        let temp = document.createElement("div");
        let tempNode = document.createTextNode("\t"+data.main.temp + " °C ");
        temp.appendChild(tempNode);

        let desc = document.createElement("div");
        let descNode = document.createTextNode("| \t   "+data.weather[0].description);
        desc.appendChild(descNode);

        let rise = document.createElement("div");
        let riseNode = document.createTextNode("| \t   "+data.sys.sunrise);
        rise.appendChild(riseNode)

        div.appendChild(city);
        div.appendChild(country);
        div.appendChild(temp);
        div.appendChild(desc);
        div.appendChild(rise);
        document.querySelector("main").appendChild(div);
    }).catch(err => console.log(err))

}


document.addEventListener("DOMContentLoaded", (e) => {
    cityForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(document.querySelector("#city").value != ""){
            let conditionsDiv = document.querySelector("#conditions");
            if(conditionsDiv){
                document.querySelector("main").removeChild(conditionsDiv);
            }
            getWeatherConditions(document.getElementById("city").value);
        }else{
            console.log("You must provide a city");
        }
    })
})

// Define the API URL with the search parameter for Portuguese meals
const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Portuguese";

// Fetch the meal data from the API
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
      // Get the meals from the data
      const meals = data.meals;

      // Create a HTML string for each meal and add it to the page
      meals.forEach(meal => {
          const mealHTML = `
              <h2>${meal.strMeal}</h2>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <p>${meal.strInstructions}</p>
          `;
          document.querySelector('#meals').innerHTML += mealHTML;
      });
  })
  .catch(error => console.error(error));