document.addEventListener('DOMContentLoaded', () => {
    const addItemButtons = document.querySelectorAll('.add-item');
    const removeItemButtons = document.querySelectorAll('.remove-item');
    
 
    function updateOrder(mesaId, type, action) {
        const selectElement = document.querySelector(`#${type}-${mesaId}`);
        const price = parseFloat(selectElement.options[selectElement.selectedIndex].dataset.price);
        const quantityElement = document.querySelector(`#cantidad-${type}-${mesaId}`);
        const totalElement = document.querySelector(`#total-${mesaId}`);
        
        let quantity = parseInt(quantityElement.textContent);
        if (action === 'add') {
            quantity++;
        } else if (action === 'remove' && quantity > 0) {
            quantity--;
        }
        
        quantityElement.textContent = quantity;
        totalElement.textContent = (quantity * price).toFixed(2);
    }

    addItemButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const mesaId = e.target.getAttribute('data-mesa-id');
            const type = e.target.getAttribute('data-type');
            updateOrder(mesaId, type, 'add');
        });
    });

    removeItemButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const mesaId = e.target.getAttribute('data-mesa-id');
            const type = e.target.getAttribute('data-type');
            updateOrder(mesaId, type, 'remove');
        });
    });
});
