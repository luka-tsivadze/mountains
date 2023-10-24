

  var cardContainer = document.getElementById('card-container');
  
  function updateCards() {
    cardContainer.innerHTML = ''; // Clear the existing card elements
  
    info.forEach(function (cardData) {
      var cardElement = document.createElement('div');
      cardElement.className = 'card';
  
      var imgElement = document.createElement('img');
      imgElement.src = cardData.img;
      imgElement.alt = '';
  
      var headerElement = document.createElement('h3');
      headerElement.className = 'headerM';
      headerElement.textContent = cardData.header;
  
      var locationElement = document.createElement('p');
      locationElement.className = 'location';
      locationElement.innerHTML = `<img class="icon" src="icons/Subtractlocation.png" alt="">${cardData.location}`;
  
      var priceElement = document.createElement('p');
      priceElement.className = 'price';
      priceElement.textContent = 'from:'+cardData.pricefrom;
  
      var rowElement = document.createElement('div');
      rowElement.className = 'rowM';
  
      rowElement.appendChild(locationElement);
      rowElement.appendChild(priceElement);
  
      cardElement.appendChild(imgElement);
      cardElement.appendChild(headerElement);
      cardElement.appendChild(rowElement);
  
      cardContainer.appendChild(cardElement);
    });
  }
  
  // Call the updateCards function to initially populate the cards
  updateCards();
  
  // Later in your code, whenever 'info' data changes, call 'updateCards' again to update the cards
  