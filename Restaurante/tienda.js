document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-item');
    const removeButtons = document.querySelectorAll('.remove-item');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mesaId = button.getAttribute('data-mesa-id');
            const itemType = button.getAttribute('data-type');
            updateQuantity(mesaId, itemType, 1);
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mesaId = button.getAttribute('data-mesa-id');
            const itemType = button.getAttribute('data-type');
            updateQuantity(mesaId, itemType, -1);
        });
    });

    function updateQuantity(mesaId, itemType, change) {
        const quantityElement = document.getElementById(`cantidad-${itemType}-${mesaId}`);
        const currentQuantity = parseInt(quantityElement.textContent, 10);
        const newQuantity = Math.max(currentQuantity + change, 0);
        quantityElement.textContent = newQuantity;

        updateTotal(mesaId);
    }

    function updateTotal(mesaId) {
        const comidaSelect = document.getElementById(`comida-${mesaId}`);
        const bebidaSelect = document.getElementById(`bebida-${mesaId}`);

        const comidaPrice = parseFloat(comidaSelect.options[comidaSelect.selectedIndex].dataset.price);
        const bebidaPrice = parseFloat(bebidaSelect.options[bebidaSelect.selectedIndex].dataset.price);

        const cantidadComida = parseInt(document.getElementById(`cantidad-comida-${mesaId}`).textContent, 10);
        const cantidadBebida = parseInt(document.getElementById(`cantidad-bebida-${mesaId}`).textContent, 10);

        const total = (comidaPrice * cantidadComida) + (bebidaPrice * cantidadBebida);

        document.getElementById(`total-${mesaId}`).textContent = total.toFixed(2);
    }
});
