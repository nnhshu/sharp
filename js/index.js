function toggleSearchInput() {
    const searchInput = document.getElementById("search-input");
    searchInput.classList.toggle("hidden");
    if (!searchInput.classList.contains("hidden")) {
        searchInput.focus();
    }
}

$(document).ready(function () {
    $('#confirm-btn').on('click', function () {
        $('#overlay').addClass('show');
    });

    $('#close-btn').on('click', function () {
        $('#overlay').removeClass('show');
    });
});

$(document).ready(function () {
    $('.close-dropdown').on('click', function () {
        $('.dropdown').removeClass('open');
    });
});

function setupDropdown(dropdownId, dropdownBtnId, dropdownTextId, dropdownListId) {
    const dropdown = document.getElementById(dropdownId);
    const dropdownBtn = document.getElementById(dropdownBtnId);
    const dropdownList = document.getElementById(dropdownListId);
    const dropdownText = document.getElementById(dropdownTextId);

    // Toggle dropdown visibility when the button is clicked
    dropdownBtn.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    // Handle item selection from dropdown
    dropdownList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', (e) => {
            const value = e.target.dataset.value;
            const text = e.target.innerText;

            // Update the selected value in the button
            dropdownText.innerText = text;

            // Close the dropdown
            dropdown.classList.remove('open');

            // Handle selected value (e.g., save to backend or use it elsewhere)
            console.log("Selected Value: ", value);
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
}

// Setup dropdowns for product type and product name
document.addEventListener('DOMContentLoaded', () => {
    // setupDropdown('dropdown', 'dropdown-btn', 'dropdown-text', 'dropdown-list');
    setupDropdown('dropdown_tensanpham', 'dropdown-btn_tensanpham', 'dropdown-text_tensanpham', 'dropdown-list_tensanpham');
});