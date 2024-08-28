document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.total-price');

    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            total += quantity * price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    cartItems.forEach(item => {
        const plusButton = item.querySelector('.plus');
        const minusButton = item.querySelector('.minus');
        const deleteButton = item.querySelector('.delete');
        const likeButton = item.querySelector('.like');
        const quantityElement = item.querySelector('.quantity');

        plusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
            updateTotal();
        });

        minusButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
                updateTotal();
            }
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('active');
        });
    });

    updateTotal(); // Calcul initial
});
