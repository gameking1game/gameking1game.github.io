document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    localStorage.setItem(username, password);
    alert('Kayıt başarılı! Giriş yapabilirsiniz.');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (localStorage.getItem(username) === password) {
        alert('Giriş başarılı!');
        
        if (username === 'aa' && password === 'aa1') {
            document.getElementById('editSection').style.display = 'block';
            document.getElementById('messageSection').style.display = 'block';
        } else {
            document.getElementById('infoSection').style.display = 'block';
            document.getElementById('infoMessage').innerText = 'Merhaba, ' + username + '!';
        }
    } else {
        alert('Kullanıcı adı veya şifre yanlış.');
    }
});
