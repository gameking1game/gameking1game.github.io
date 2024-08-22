<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Sistemi</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 400px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; }
        label, input, button { display: block; width: 100%; margin-bottom: 10px; }
        button { padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background-color: #45a049; }
        #loginSection, #registerSection, #notificationSection, #messageSection { display: none; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hoş Geldiniz</h2>
        <button id="hasAccountButton">Hesabın Var mı?</button>
        <button id="createAccountButton">Hesap Oluştur</button>

        <!-- Giriş Yapma Bölümü -->
        <div id="loginSection">
            <h2>Giriş Yap</h2>
            <form id="loginForm">
                <label for="loginUsername">Kullanıcı Adı:</label>
                <input type="text" id="loginUsername" required>
                <label for="loginPassword">Şifre:</label>
                <input type="password" id="loginPassword" required>
                <button type="submit">Giriş Yap</button>
            </form>
        </div>

        <!-- Kayıt Olma Bölümü -->
        <div id="registerSection">
            <h2>Hesap Oluştur</h2>
            <form id="registerForm">
                <label for="registerUsername">Kullanıcı Adı:</label>
                <input type="text" id="registerUsername" required>
                <label for="registerPassword">Şifre:</label>
                <input type="password" id="registerPassword" required>
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>

        <!-- Bildirim Bölümü -->
        <div id="notificationSection">
            <h2>Mesaj Var</h2>
        </div>

        <!-- Mesaj Bölümü -->
        <div id="messageSection">
            <h2>Mesajlar</h2>
            <div id="adminActions" style="display: none;">
                <h3>Mesaj Gönder</h3>
                <input type="text" id="recipientUsername" placeholder="Kullanıcı adı">
                <textarea id="messageContent" placeholder="Mesajınızı yazın"></textarea>
                <button id="sendMessageButton">Mesaj Gönder</button>
            </div>
            <div id="userMessages">
                <h3>Gelen Mesajlar</h3>
                <ul id="messagesList"></ul>
            </div>
        </div>
    </div>

    <script>
        const users = [
            { username: "Yönetici", password: "Yönetici1", isAdmin: true, messages: [] }
        ];

        document.getElementById('hasAccountButton').addEventListener('click', function() {
            document.getElementById('loginSection').style.display = 'block';
            document.getElementById('registerSection').style.display = 'none';
        });

        document.getElementById('createAccountButton').addEventListener('click', function() {
            document.getElementById('registerSection').style.display = 'block';
            document.getElementById('loginSection').style.display = 'none';
        });

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

        function handleLoginSuccess(user) {
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
    </script>
</body>
</html>
