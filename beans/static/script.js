document.addEventListener('DOMContentLoaded', () => {
    // Sample pods data
    const pods = [
        { id: 1, name: "Photography Lovers" },
        { id: 2, name: "Book Club" },
        { id: 3, name: "Tech Innovators" },
        { id: 4, name: "Fitness Enthusiasts" },
        { id: 5, name: "Travel Buddies" },
        { id: 6, name: "Art Creators" },
        { id: 7, name: "Music Fans" },
        { id: 8, name: "Food Explorers" },
        { id: 9, name: "Gaming Legends" },
        { id: 10, name: "Pet Lovers" },
        { id: 11, name: "Wild life"},
        { id: 12, name: "Photography Lovers" },
        { id: 13, name: "Book Club" },
        { id: 14, name: "Tech Innovators" },
        { id: 15, name: "Fitness Enthusiasts" },
        { id: 16, name: "Travel Buddies" },
        { id: 17, name: "Art Creators" },
        { id: 18, name: "Music Fans" },
        { id: 19, name: "Food Explorers" },
        { id: 20, name: "Gaming Legends" },
    ];

    const podsGrid = document.getElementById('pods-grid');

    // Add pods dynamically to the grid
    pods.forEach(pods => {
        const podsCard = document.createElement('div');
        podsCard.classList.add('pods-card');
        podsCard.innerHTML = `
            <h3>${pods.name}</h3>
            <p>${Math.floor(Math.random() * 500) + 50} members</p>
            <button class="like-button"><span>&hearts;</span></button>
        `;

        // Like button functionality
        const likeButton = podsCard.querySelector('.like-button');
        likeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            alert(`You liked ${pods.name}!`);
        });

        podsGrid.appendChild(podsCard);
    });
});
