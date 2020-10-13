import menuData from '../../helpers/data/menuItemsData';

const addMenuItemForm = () => {
  $('body').css({ color: 'white' });
  $('#app').html(`<h2>Enter Menu Item Info</h2>
                  <div id="success-message"></div>
                  <div id="error-message"></div>
                  <div id="input-group-menu">
                    <div class="form-group">
                      <label for="menuItemName">Menu Item</label>
                      <input type="text" class="form-control" id="menuItemName" placeholder="Menu Item">
                    </div>
                    <div class="form-group">
                      <label for="ingredientSelection">Select Ingredients</label>
                      <select multiple class="form-control" id="ingredientSelection">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="price">Price</label>
                      <input class="form-control" id="price" class="timePicker" autocomplete="off" placeholder="Enter a price">
                    </div>
                    <button id="submitMenuItemBtn" type="button" class="btn btn-info"></i>Add Menu Item</button>
                  </div>`);
  // ingredientsData.getAllIngredients().then((response) => {
  //   response.forEach((ingredient) => {
  //     $('#ingredientSelection').append(`<option value="${ingredient.id}">${ingredient.name}</option>`);
  //   });
  // });
  $('#submitMenuItemBtn').on('click', (e) => {
    e.preventDefault(e);
    const menuItemData = {
      name: $('#menuItemName').val() || false,
      ingredients: $('#ingredientSelection').val() || false,
      price: $('#price').val() || false
    };
    if (Object.values(menuItemData).includes(false) || menuItemData.ingredients.length === 0) {
      $('#error-message').html('<div class="alert alert-danger" role="alert">Please complete all fields</div>');
    } else {
      console.warn('ingredients value', $('#ingredientSelection').val());
      $('#error-message').html('');
      menuData.addMenuItem(menuItemData)
        .then(() => {
          $('#success-message').html('<div class="alert alert-success" role="alert">Your menu item was added!</div>');
        }).catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#menuItemName').val('');
      $('#ingredientSelection').val('');
      $('#price').val('');
    }
  });
};

export default { addMenuItemForm };