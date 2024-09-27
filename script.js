async function fetchUsers() {
    try {
        const response = await fetch('https://pruebasapis-production.up.railway.app/users');
        const users = await response.json();
        console.log(users); // Para depurar y ver los datos
        displayUsers(users);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

function displayUsers(users) {
    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos datos

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user'); // Puedes añadir una clase para el estilo
        userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p>Edad: ${user.age}</p>
        `;
        usersContainer.appendChild(userDiv);
    });
}

// Llamar a la función para obtener los usuarios al cargar la página
fetchUsers();
