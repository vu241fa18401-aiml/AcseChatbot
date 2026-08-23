document.querySelector('.send-btn').addEventListener('click', sendMessage);
document.querySelector('.chat-input-area input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.querySelector('.chat-input-area input');
    const messageText = input.value.trim();
    
    if (messageText === '') return;

    // 1. Display user message
    appendMessage(messageText, 'user');
    input.value = '';

    // 2. Simulate sending a POST request to your teammates' backend API
    // (This mocks the behavior described in your tutorial step)
    setTimeout(() => {
        const botResponse = `Received! This is a mock response from the backend for: "${messageText}"`;
        appendMessage(botResponse, 'bot');
    }, 1000);
}

function appendMessage(text, sender) {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<p>${text}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}