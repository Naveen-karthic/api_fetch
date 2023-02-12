window.onload = () => {
  //console.log(location.search);
  const urlParams = new URLSearchParams(location.search);
  //console.log(urlParams.get("category"));
  fetchCategoryDetails(urlParams.get("category"));
  document.getElementById("title").innerText = urlParams.get("category") + "🍽️";
};

var categoryDetails = document.querySelector(".category-detail");

const fetchCategoryDetails = async (category) => {
  var data = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  var meals = data.data.meals;

  //for local storage
  //sessionStorage.setItem("meals", JSON.stringify(data.data.meals));
  //var categories = JSON.parse(sessionStorage.getItem("Categoreis"));

  categoryDetails.innerHTML = "";
  var mealsItem = meals.map((item) => {
    return `
      <div class="card2" onclick="selectedMeal('${item.strMeal}')">
        <img src="${item.strMealThumb}" alt="${item.strMeal}">
        <div class="text2">
          <h2>${item.strMeal}</h2>
        </div>
      </div>`;
  });

  mealsItem.forEach((element) => {
    categoryDetails.innerHTML += element;
  });
};

const selectedMeal = (meal) => {
  console.log(meal);
};
