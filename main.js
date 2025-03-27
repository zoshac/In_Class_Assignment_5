const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export function getUsers () {
    return fetch (BASE_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error (`HTTP ERROR: ${response.status}`)
        }
        return response.json();
    })
    .catch(error => {
        console.error("Fetch Failed", error.message)
        throw.error:
    }):
}

import { getUsers } from `./api.js`;

function displayUsers () {
    const container = document.getElementById("postContainer");

    getUsers()
    .then (users => {
        users.slice(0,5).forEach(user => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
            container.appendChild(div);
        });
    })
    .catch(error => {
        container.innerHTML = `<p style="color:red;"> Failed to load posts:
        ${error.message}</p>`;

    })
}
displayUsers();