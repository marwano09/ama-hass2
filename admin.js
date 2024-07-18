document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('admin') !== 'logged_in') {
        window.location.href = 'index.html';
    } else {
        const welcomeMessage = `Hello my darlin wish u a good day bae, ${localStorage.getItem('loginDate')}`;
        document.getElementById('welcome-message').textContent = welcomeMessage;
    }
    
    document.getElementById('product-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('product-name').value;
        const location = document.getElementById('location').value;
        const serialNumber = document.getElementById('serial-number').value;
        const quantity = document.getElementById('quantity').value;
        const photo = document.getElementById('photo').files[0];

        const reader = new FileReader();
        reader.onloadend = function() {
            const photoURL = reader.result;
            addProductToTable(name, location, serialNumber, quantity, photoURL);
        };
        reader.readAsDataURL(photo);
    });

    function addProductToTable(name, location, serialNumber, quantity, photoURL) {
        const table = document.getElementById('product-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = name;
        cell2.textContent = location;
        cell3.textContent = serialNumber;
        cell4.textContent = quantity;
        cell5.innerHTML = `<img src="${photoURL}" alt="Product Photo" width="50">`;
    }
});
