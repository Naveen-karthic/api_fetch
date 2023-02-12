window.onload = () => {
  fetchFoodCategory();
};

var categoriesContainer = document.querySelector(".categories-container"); // category container

const fetchFoodCategory = async () => {
  var data = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  var categories = data.data.categories;

  //for local storage
  // sessionStorage.setItem("Categoreis", JSON.stringify(data.data.categories));
  //var categories = JSON.parse(sessionStorage.getItem("Categoreis"));

  //categoriesContainer.innerHTML = "";
  var categoriesItem = categories.map((item) => {
    return `
    <div class="card" onclick="selectedCategory('${item.strCategory}')">
      <img src="${item.strCategoryThumb}" alt="${item.strCategory}">
      <div class="text">
        <h2>${item.strCategory}</h2>
        <p>${item.strCategoryDescription.substring(0, 200)}...</p>
      </div>
    </div>`;
  });

  categoriesItem.forEach((element) => {
    categoriesContainer.innerHTML += element;
  });
};

const selectedCategory = (category) => {
  //console.log(category);
  location.href = `/page2.html?category=${category}`;
};

// [9:24 pm, 19/01/2023] S@ba®!: Category : www.themealdb.com/api/json/v1/1/categories.php
// [9:25 pm, 19/01/2023] S@ba®!: List by Category : www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// [9:26 pm, 19/01/2023] S@ba®!: Get by Id : www.themealdb.com/api/json/v1/1/lookup.php?i=52772
