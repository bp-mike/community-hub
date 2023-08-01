document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    redirect('index.html');
  });

  function redirect(url) {
    window.location.href = url;
  }

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
  });
});
