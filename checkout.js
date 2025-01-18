function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(param)) || 0;
    }

function displayCheckoutDetails() {
    const prices = {
    'upper-seat-qty': 499,
    'middle-seat-qty': 899,
    'lower-seat-qty': 1499
};

    let total = 0;
    let detailsHtml = '<h3>Your Order:</h3><ul>';
    for (const id in prices) {
        
const quantity = getQueryParameter(id);
    if (quantity > 0) {
    const price = prices[id] * quantity;
    detailsHtml += `<li>${quantity} x ${id.replace('-qty', '').replace(/-/g, ' ')} - ₱ ${price}</li>`;
    total += price;
}
}
detailsHtml += `</ul><p><strong>Total: ₱ ${total}</strong></p>`;
document.getElementById('checkout-details').innerHTML = detailsHtml;
}
displayCheckoutDetails();