// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((OneMushroom) => {
    if (state.mushrooms) {
      OneMushroom.style.visibility = 'visible';
    } else {
      OneMushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((OneGreenPepper) => {
    if (state.greenPeppers) {
      OneGreenPepper.style.visibility = 'visible';
    } else {
      OneGreenPepper.style.visibility = 'hidden';
    }
  });

  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const glutenFreeCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenFreeCrust.classList.add('crust-gluten-free');
  } else {
    glutenFreeCrust.classList.remove('crust-gluten-free');
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  const renderPepperoniBtn = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    renderPepperoniBtn.classList.add('active');
  } else {
    renderPepperoniBtn.classList.remove('active');
  }

  const renderMushroomsBtn = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    renderMushroomsBtn.classList.add('active');
  } else {
    renderMushroomsBtn.classList.remove('active');
  }

  const renderGreenPeppersBtn = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    renderGreenPeppersBtn.classList.add('active');
  } else {
    renderGreenPeppersBtn.classList.remove('active');
  }

  const renderWhiteSauceBtn = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    renderWhiteSauceBtn.classList.add('active');
  } else {
    renderWhiteSauceBtn.classList.remove('active');
  }

  const glutenFreeCrustBtn = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    glutenFreeCrustBtn.classList.add('active');
  } else {
    glutenFreeCrustBtn.classList.remove('active');
  }

  //   // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let totalPrice = 10;

  const renderIngredientsPrices = document.querySelector('.panel.price');
  const ingredientList = renderIngredientsPrices.getElementsByTagName('ul')[0];
  const priceElement =
    renderIngredientsPrices.getElementsByTagName('strong')[0];

  function addLiToHtml(topping, price) {
    const li = document.createElement('li');
    li.textContent = '$ ' + price + ' ' + topping;
    ingredientList.append(li);
    totalPrice = totalPrice + price;
  }
  //clean ul list
  ingredientList.innerHTML = '';

  if (state.pepperoni) {
    addLiToHtml('pepperonni', 1);
  }

  if (state.mushrooms) {
    addLiToHtml('mushrooms', 1);
  }

  if (state.greenPeppers) {
    addLiToHtml('green peppers', 1);
  }

  if (state.whiteSauce) {
    addLiToHtml('white sauce', 3);
  }

  if (state.glutenFreeCrust) {
    addLiToHtml('gluten free crust', 5);
  }
  priceElement.textContent = '$ ' + totalPrice;
}

// Iteration 4: change the HTML of `<aside class="panel price">`

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers ')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
