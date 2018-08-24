'use strict';

//USER STORIES

// A shopping list should be rendered to the page
// You should be able to add items to the list
// You should be able to check items on the list
// You should be able to delete items from the list

// render shopping list

const STORE = [
  { name: 'apples', checked: false },
  { name: 'oranges', checked: false },
  { name: 'milk', checked: true },
  { name: 'bread', checked: false }
];

function generateItemElement(item, itemIndex, template) {
  return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
        <span class="shopping-item js-shopping-item ${
          item.checked ? 'shopping-item__checked' : ''
        }">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
              <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
              <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

function generateShoppingItemsString(shoppingList) {
  const items = shoppingList.map((item, index) =>
    generateItemElement(item, index)
  );
  return items.join('');
}

function renderShoppingList() {
  //renders or shows the shopping list in the DOM
  //for each item in STORE, generate a string representing an <li> with:
  const shoppingListItemsString = generateShoppingItemsString(STORE);
  $('.js-shopping-list').html(shoppingListItemsString);
  //item name rendered as inner text
  //item's index in the store set as a data attribute for the <li>
  //item's checked state (true or false) rendered as the presence or absence of a  CSS class for indicating checked items
  //join together the individual item strings into one long string
  //insert the <li>s string inside the .js-shopping-list <ul> into the DOM
}

// add items to list
function handleNewItemSubmit() {
  console.log('`handleNewItemSubmit` ran');
}

// check items on list
function handleItemCheckClicked() {
  console.log('`handleItemCheckClicked` ran');
}

// delete items on list
function handleDeleteItemClicked() {
  console.log('`handleDeleteItemClicked` ran');
}

// DOM
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);
