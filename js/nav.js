const menuItems = document.querySelectorAll('.menu-item');

        // Function to set the active link based on the current URL
        function setActiveLink() {
            const currentUrl = window.location.pathname;
            menuItems.forEach(item => {
                if (item.href.endsWith(currentUrl)) {
                    item.classList.add('page-active');
                } else {
                    item.classList.remove('page-active');
                }
            });
        }

        // Call the function on page load
        setActiveLink();

        // Add event listener for menu items to handle click events
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove 'page-active' class from all items
                menuItems.forEach(link => link.classList.remove('page-active'));

                // Add 'page-active' class to the clicked item
                this.classList.add('page-active');
            });
        });