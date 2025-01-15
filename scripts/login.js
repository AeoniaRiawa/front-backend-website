// Show Signup Form
document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

// Show Login Form
document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Signup Functionality
document.getElementById('signup-btn').addEventListener('click', async () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const error = document.getElementById('signup-error');

    // Clear previous error messages
    error.classList.add('hidden');

    if (name && email && password) {
        try {
            const response = await fetch('http://localhost:4000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                alert('Sign Up Successful! Redirecting to Login page...');
                document.getElementById('signup-form').classList.add('hidden');
                document.getElementById('login-form').classList.remove('hidden');
            } else {
                error.textContent = 'Sign Up Failed! Please try again.';
                error.classList.remove('hidden');
            }
        } catch {
            error.textContent = 'An error occurred. Please try again later.';
            error.classList.remove('hidden');
        }
    } else {
        error.textContent = 'All fields are required!';
        error.classList.remove('hidden');
    }
});

// Login Functionality
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const error = document.getElementById('login-error');

    // Clear previous error messages
    error.classList.add('hidden');

    if (email && password) {
        try {
            const response = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Welcome back, ${data.user.name}!`);
                localStorage.setItem('user', JSON.stringify(data));
                // Handle successful login, e.g., redirect or update UI
                window.location.href = 'index.html'; // Redirect to login page 
            } else {
                error.textContent = 'Invalid email or password. Please try again.';
                error.classList.remove('hidden');
            }
        } catch {
            error.textContent = 'An error occurred. Please try again later.';
            error.classList.remove('hidden');
        }
    } else {
        error.textContent = 'All fields are required!';
        error.classList.remove('hidden');
    }
});
