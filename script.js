document.addEventListener('DOMContentLoaded', (event) => {
    // Search functionality
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        const query = searchInput.value;
        if (query) {
            alert('Searching for: ' + query);
            // You can add your search functionality here
            // For example, redirect to a search results page
            // window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Modal functionality
    const modal = document.getElementById('auth-modal');
    const loginButton = document.getElementById('login-button');
    const loginText = document.getElementById('login-text');
    const closeButton = document.querySelector('.close-button');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterForm = document.getElementById('show-register-form');
    const showLoginForm = document.getElementById('show-login-form');

    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
    });

    loginText.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Toggle between login and register forms
    showRegisterForm.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    showLoginForm.addEventListener('click', (event) => {
        event.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (!storedEmail || !storedPassword) {
            alert('Not registered. Please register.');
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        } else if (email === storedEmail && password === storedPassword) {
            alert('Login successful');
            // Add your login success functionality here
            closeModal();
        } else {
            alert('Username or password is incorrect');
        }
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Registration successful');
        // Automatically show the login form after registration
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Like button functionality
    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Item liked');
        // Add your like functionality here
        // For example, send a request to the server to like an item
    });

    // Bag button functionality
    const bagButton = document.getElementById('bag-button');
    bagButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecting to bag');
        // Add your bag redirection here
        // window.location.href = '/bag';
    });

    // Settings button functionality
    const settingsButton = document.getElementById('settings-button');
    settingsButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecting to settings');
        // Add your settings redirection here
        // window.location.href = '/settings';
    });
});
