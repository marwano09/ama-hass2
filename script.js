document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'amateallah@gmail.com' && password === 'kan7ma9elik-a-ama') {
        localStorage.setItem('admin', 'logged_in');
        const loginDate = new Date().toLocaleString();
        localStorage.setItem('loginDate', loginDate);
        window.location.href = 'admin.html';
    } else {
        alert('Invalid email or password');
    }
});
