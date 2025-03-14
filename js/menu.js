const menuItems = {
    "Coffee & Espresso": [
        { name: 'Yunnan Coffee', description: 'Smooth and rich, made with premium beans from Yunnan, China.', price: 4 },
        { name: 'Espresso', description: 'Bold and strong, the heart of every coffee.', price: 3 },
        { name: 'Americano', description: 'Espresso with hot water for a lighter taste.', price: 3.5 },
        { name: 'Latte', description: 'Creamy espresso with steamed milk.', price: 4.5 },
    ],
    "Treats": [
        { name: 'Chocolate Chip Cookies', description: 'Freshly baked with a perfect balance of chocolate.', price: 2.5 },
        { name: 'Muffins', description: 'Light and fluffy, with seasonal flavors.', price: 3 },
        { name: 'Brownies', description: 'Rich, fudgy, and melt-in-your-mouth delicious.', price: 3.5 },
        { name: 'Lemon Bars', description: 'Tangy, sweet, and topped with powdered sugar.', price: 3 }
    ]
};

window.onload = function() {
    const menuContainer = document.getElementById('menuItems');
    
    // Create Coffee & Espresso section
    const coffeeSection = document.createElement('div');
    const coffeeTitle = document.createElement('h2');
    coffeeTitle.textContent = 'Coffee & Espresso';
    coffeeSection.appendChild(coffeeTitle);
    
    menuItems["Coffee & Espresso"].forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>$${item.price}</span>
        `;
        coffeeSection.appendChild(menuItemElement);
    });
    
    // Create Treats section
    const treatsSection = document.createElement('div');
    const treatsTitle = document.createElement('h2');
    treatsTitle.textContent = 'Treats';
    treatsSection.appendChild(treatsTitle);
    
    menuItems["Treats"].forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>$${item.price}</span>
        `;
        treatsSection.appendChild(menuItemElement);
    });
    
    // Append both sections to the menu container
    menuContainer.appendChild(coffeeSection);
    menuContainer.appendChild(treatsSection);
};
