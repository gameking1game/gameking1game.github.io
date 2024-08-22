// Kullanıcı veritabanı (Geçici)
const users = [
    { username: "Yönetici", password: "Yönetici1", isAdmin: true, messages: [] }
];

// Başlangıçta butonları göster
document.getElementById('hasAccountButton').addEventListener('click', function() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerSection').style.display = 'none';
});
document.getElementById('createAccountButton').addEventListener('click', function() {
    document.getElementById('registerSection').style.display = 'block';
    document.getElementById('loginSection').style.display = 'none';
});

// Hesap oluşturma
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (users.find(u => u.username === username)) {
        alert('Bu kullanıcı adı zaten mevcut.');
    } else {
        users.push({ username, password, isAdmin: false, messages: [] });
        alert('Hesap başarıyla oluşturuldu!');
        document.getElementById('registerForm').reset();
    }
});

// Kullanıcı giriş kontrolü
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Giriş başarılı!");
        handleLoginSuccess(user);
    } else {
        alert("Geçersiz kullanıcı adı veya şifre.");
    }
});

// Giriş sonrası işlemler
function handleLoginSuccess(user) {
    // Giriş ekranlarını ve kayıt formunu gizle
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'none';

    if (user.isAdmin) {
        document.getElementById('messageSection').style.display = 'block';
        document.getElementById('adminActions').style.display = 'block';
        document.getElementById('sendMessageButton').addEventListener('click', function() {
            const recipient = document.getElementById('recipientUsername').value;
            const message = document.getElementById('messageContent').value;

            const recipientUser = users.find(u => u.username === recipient);

            if (recipientUser) {
                recipientUser.messages.push({ from: user.username, content: message });
                alert('Mesaj gönderildi!');
            } else {
                alert('Kullanıcı bulunamadı.');
            }
        });
    } else {
        if (user.messages.length > 0) {
            document.getElementById('notificationSection').style.display = 'block';
        }
    }
}
