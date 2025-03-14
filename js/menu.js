const menuItems = {
    "Coffee & Espresso": [
        { name: 'Turkish Coffee', description: 'Smooth and rich, made with premium beans from Turkey.', price: 3 },
        { name: 'American Coffee', description: 'Classic black coffee brewed to perfection.', price: 5 },
        { name: 'Iced Latte', description: 'Chilled espresso combined with milk and ice.', price: 7 }
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
    
 
    menuContainer.appendChild(coffeeSection);
    menuContainer.appendChild(treatsSection);
};