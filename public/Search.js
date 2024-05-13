document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('[data-search-btn]');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            window.location.href = `./search-results.html?q=${searchTerm}`;
        }
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm !== '') {
                window.location.href = `./search-results.html?q=${searchTerm}`;
            }
        }
    });
});
