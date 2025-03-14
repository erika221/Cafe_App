const menuItems = [
    { name: 'Turkish Coffee', description: 'Rich and aromatic coffee.', price: 3 },
    { name: 'American Coffee', description: 'Classic brewed coffee.', price: 5 },
    { name: 'Iced Latte', description: 'Cold and creamy coffee.', price: 7 },
];

window.onload = function() {
    const menuContainer = document.getElementById('menuItems');
    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>$${item.price}</span>
        `;
        menuContainer.appendChild(menuItemElement);
    });
};
