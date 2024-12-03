document.addEventListener('DOMContentLoaded', () => {
    const whatsappTemplate = `
        <div class="crm-whatsapp-conversation">
            
            <div class="crm-whatsapp-messages">
                <div class="crm-whatsapp-timestamp">Today, 10:30</div>
                <div class="crm-whatsapp-message received">
                    <div class="message-content">
                        Pozdrav, zanima me dostupnost proizvoda XYZ?
                    </div>
                    <div class="message-time">10:30</div>
                </div>
                <div class="crm-whatsapp-message sent">
                    <div class="message-content">
                        Pozdrav! Proizvod XYZ trenutno imamo na zalihi.
                    </div>
                    <div class="message-time">10:32</div>
                </div>
                <div class="crm-whatsapp-message received">
                    <div class="message-content">
                        Odlično! Koja je cijena?
                    </div>
                    <div class="message-time">10:33</div>
                </div>
            </div>
           
        </div>
    `;

    const taskItems = document.querySelectorAll('.crm-task-item');
    const detailsPanel = document.querySelector('.crm-details-messages');

    taskItems.forEach(item => {
        item.addEventListener('click', () => {
            const isWhatsApp = item.querySelector('.crm-whatsapp-icon');
            if (isWhatsApp) {
                detailsPanel.innerHTML = whatsappTemplate;
                setupWhatsAppChat();
            }
        });
    });

    function setupWhatsAppChat() {
        const input = document.querySelector('.crm-whatsapp-textbox');
        const sendButton = document.querySelector('.crm-whatsapp-send');
        const messagesContainer = document.querySelector('.crm-whatsapp-messages');

        function sendMessage(text) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const messageHTML = `
                <div class="crm-whatsapp-message sent">
                    <div class="message-content">${text}</div>
                    <div class="message-time">${time}</div>
                </div>
            `;
            messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        sendButton.addEventListener('click', () => {
            const text = input.value.trim();
            if (text) {
                sendMessage(text);
                input.value = '';
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                sendMessage(input.value.trim());
                input.value = '';
            }
        });
    }
});