document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const coffeeType = document.querySelector('input[name="coffeeType"]:checked').value;
    const size = document.getElementById('size').value;
    const extras = [];
    if (document.getElementById('extraCoffee').checked) extras.push('Extra Coffee');
    if (document.getElementById('whippedCream').checked) extras.push('Whipped Cream');
    if (document.getElementById('extraCaramel').checked) extras.push('Extra Caramel');

    let total = 0;
    if (coffeeType === 'Turkish Coffee') total += 3;
    if (coffeeType === 'American Coffee') total += 5;
    if (coffeeType === 'Iced Latte') total += 7;

    if (size === 'small') total += 1.5;
    if (size === 'medium') total += 2.5;
    if (size === 'large') total += 3.5;

    if (extras.includes('Extra Coffee')) total += 1.5;
    if (extras.includes('Whipped Cream')) total += 2;
    if (extras.includes('Extra Caramel')) total += 3
