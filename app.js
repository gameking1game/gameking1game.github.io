// Kullanıcı veritabanı (Geçici)
const users = [
    { username: "Yönetici", password: "Yönetici1", isAdmin: true, messages: [] }
];

// Kullanıcı giriş kontrolü
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Giriş başarılı!");
        showMessages(user);
    } else {
        alert("Geçersiz kullanıcı adı veya şifre.");
    }
});

// Mesajları gösterme
function showMessages(user) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('messageSection').style.display = 'block';

    if (user.isAdmin) {
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
        const messagesList = document.getElementById('messagesList');
        messagesList.innerHTML = '';
        user.messages.forEach(msg => {
            const listItem = document.createElement('li');
            listItem.textContent = `${msg.from}: ${msg.content}`;
            messagesList.appendChild(listItem);
        });
    }
}
