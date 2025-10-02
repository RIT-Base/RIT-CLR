document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resourceGrid = document.getElementById('resource-grid');
    const resourceCards = resourceGrid.querySelectorAll('.resource-card-wrapper');
    const noResultsMessage = document.getElementById('no-results-message');

    let activeFilter = 'all';
    let searchQuery = '';

    function filterItems() {
        let itemsFound = false;
        resourceCards.forEach(card => {
            const typeMatch = activeFilter === 'all' || card.dataset.type.toLowerCase() === activeFilter.toLowerCase();
            const queryMatch = card.dataset.title.toLowerCase().includes(searchQuery) ||
                               card.dataset.tags.toLowerCase().includes(searchQuery);

            if (typeMatch && queryMatch) {
                card.style.display = 'block';
                itemsFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        noResultsMessage.style.display = itemsFound ? 'none' : 'block';
    }

    searchBox.addEventListener('keyup', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterItems();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
                     
            activeFilter = btn.dataset.filter;
            filterItems();
        });
    });
});