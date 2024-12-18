function updateQuantity(id, change) {
    const quantityInput = document.getElementById(id);
    let currentQuantity = parseInt(quantityInput.value) || 0;
    currentQuantity = Math.max(0, currentQuantity + change); 
    quantityInput.value = currentQuantity;
    calculateTotal();
}

const priceDetails = {
    'upper-seat-qty': 499,
    'middle-seat-qty': 899,
    'lower-seat-qty': 1499
};

function calculateTotal() {
    let total = 0;
    for (const id in priceDetails) {
        const quantity = parseInt(document.getElementById(id).value) || 0;
        total += quantity * priceDetails[id];
    }
    document.getElementById('total-price').textContent = `Php ${total}`;
}

function proceedToCheckout() {
    const params = new URLSearchParams();
    for (const id in priceDetails) {
        const quantity = parseInt(document.getElementById(id).value) || 0;
        params.append(id, quantity);
    }
    window.location.href = `Event1-checkout.html?${params.toString()}`;
}