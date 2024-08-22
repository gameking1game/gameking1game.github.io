// Yönetici kullanıcı kaydını oluştur
function createAdminUser() {
    const adminUsername = 'AA';
    const adminPassword = 'AA1';

    if (!localStorage.getItem(adminUsername)) {
        const adminUser = {
            password: adminPassword,
            role: 'admin'
        };

        localStorage.setItem(adminUsername, JSON.stringify(adminUser));
        console.log('Yönetici kullanıcısı oluşturuldu: ' + adminUsername);
    }
}

// Kayıt işlemi
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const isAdmin = confirm('Bu kullanıcıyı yönetici yapmak istiyor musunuz?');

    if (isAdmin && (username !== 'AA' || password !== 'AA1')) {
        alert('Yönetici kullanıcı adı ve şifresi zaten tanımlı. Bu kullanıcı adı kullanılamaz.');
        return;
    }

    const user = {
        password: password,
        role: isAdmin ? 'admin' : 'user',
        messages: []  // Her kullanıcının mesajlarını saklamak için
    };

    if (localStorage.getItem(username)) {
        alert('Bu kullanıcı adı zaten mevcut. Lütfen başka bir kullanıcı adı seçin.');
    } else {
        localStorage.setItem(username, JSON.stringify(user));
        alert('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
    }
});

// Giriş işlemi
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'none';

        if (storedUser.role === 'admin') {
            document.getElementById('editSection').style.display = 'block';
            document.getElementById('messageSection').style.display = 'block';
            document.getElementById('infoSection').style.display = 'none';
            document.getElementById('logoutSection').style.display = 'block';
            alert('Giriş başarılı! Yönetici paneline hoş geldiniz, ' + username + '!');
        } else {
            document.getElementById('infoSection').style.display = 'block';
            document.getElementById('editSection').style.display = 'none';
            document.getElementById('messageSection').style.display = 'none';
            document.getElementById('logoutSection').style.display = 'block';
            
            // Kullanıcının mesajlarını göster
            const messages = storedUser.messages.filter(msg => msg.from === 'AA');
            const messageContent = messages.map(msg => `${msg.date}: ${msg.content}`).join('\n');

            document.getElementById('infoMessage').innerText = messageContent || 'Size gönderilmiş bir mesaj bulunmamaktadır.';
            alert('Giriş başarılı! Hoş geldiniz, ' + username + '!');
        }
    } else {
        alert('Kullanıcı adı veya şifre hatalı.');
    }
});

// Bilgileri güncelleme işlemi
document.getElementById('updateButton').addEventListener('click', function() {
    const username = document.getElementById('editUsername').value;
    const newPassword = document.getElementById('editPassword').value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser) {
        storedUser.password = newPassword;
        localStorage.setItem(username, JSON.stringify(storedUser));
        alert('Bilgiler başarıyla güncellendi!');
    } else {
        alert('Kullanıcı bulunamadı.');
    }
});

// Mesaj gönderme işlemi
document.getElementById('sendMessageButton').addEventListener('click', function() {
    const recipientUsername = document.getElementById('messageRecipient').value;
    const messageContent = document.getElementById('messageContent').value;

    const recipientUser = JSON.parse(localStorage.getItem(recipientUsername));

    if (recipientUser) {
        recipientUser.messages.push({
            from: 'AA',
            content: messageContent,
            date: new Date().toISOString()
        });
        localStorage.setItem(recipientUsername, JSON.stringify(recipientUser));
        alert('Mesaj başarıyla gönderildi!');
    } else {
        alert('Kullanıcı bulunamadı.');
    }
});

// Çıkış yapma işlemi
document.getElementById('logoutButton').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('infoSection').style.display = 'none';
    document.getElementById('editSection').style.display = 'none';
    document.getElementById('messageSection').style.display = 'none';
    document.getElementById('logoutSection').style.display = 'none';
    alert('Çıkış yapıldı!');
});

// Sayfa yüklendiğinde yönetici kullanıcısını oluştur
window.onload = function() {
    createAdminUser();
};
