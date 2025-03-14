document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('number').value;
    const coffeeType = document.querySelector('input[name="coffeeType"]:checked').value;
    const size = document.getElementById('size').value;

    const treats = [];
    if (document.getElementById('cookies').checked) treats.push('Chocolate Chip Cookies');
    if (document.getElementById('muffins').checked) treats.push('Muffins');
    if (document.getElementById('brownies').checked) treats.push('Brownies');
    if (document.getElementById('lemonbars').checked) treats.push('Lemon Bars');

    let total = 0;

    if (coffeeType === 'Yunnan Coffee') total += 4;
    if (coffeeType === 'Espresso') total += 3;
    if (coffeeType === 'Americano') total += 3.5;
    if (coffeeType === 'Latte') total += 4.5;

    if (size === 'small') total += 0;
    if (size === 'medium') total += 1;
    if (size === 'large') total += 2;

    treats.forEach(treat => {
        if (treat === 'Chocolate Chip Cookies') total += 2.5;
        if (treat === 'Muffins') total += 3;
        if (treat === 'Brownies') total += 3.5;
        if (treat === 'Lemon Bars') total += 3;
    });

    const orderSummary = `
        <h3>Order Summary</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Coffee Type:</strong> ${coffeeType}</p>
        <p><strong>Size:</strong> ${size.charAt(0).toUpperCase() + size.slice(1)}</p>
        <p><strong>Treats:</strong> ${treats.length > 0 ? treats.join(', ') : 'None'}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `;
    
    document.getElementById('orderSummary').innerHTML = orderSummary;
});
