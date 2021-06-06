function loadItems() {
    return fetch('script/data.json')
     .then(response => response.json())
     .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
      <li class="item">
        <img src="${item.image}" alt="${item.type}">
        <div class="itembox">
           <h3 class="con5_name">${item.name}(${item.subname})</span></h3>
           <p class="con5_price">가격: ${item.price}₩</p>
           <button class="item_btn">바로구매</button>
           <button class="item_btn">장바구니</button>
        </div>
      </li>
`
}

function setEventListeners(items) {
    const buttons = document.querySelector('.a');
    const buttons2 = document.querySelector('.b');
    buttons.addEventListener('click', event => onButtonClick(event, items));
    buttons2.addEventListener('click', event => onButtonClick(event, items));
    
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    console.log(event.target.dataset.key);
    console.log(event.target.dataset.value);
    
    if(key == null || value == null) {
       return;
    }
    
    displayItems(items.filter(item => item[key] === value));
}



//main

loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);