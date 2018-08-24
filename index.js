'use strict';

//USER STORIES

// A shopping list should be rendered to the page
// You should be able to add items to the list
// You should be able to check items on the list
// You should be able to delete items from the list

// render shopping list
function renderShoppingList() {
  console.log('`renderShoppingList` ran');
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
