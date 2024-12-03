document.addEventListener('DOMContentLoaded', () => {
    const mailConversation = document.querySelector('.crm-mailConversation');
    const earlierButton = document.querySelector('.crm-mailConversation__earlier');
    const previousContainer = document.querySelector('.crm-mailConversation__previous');

    const previousEmails = [
        {
            author: 'Marko Horvat',
            email: 'm.horvat@korporacija.hr',
            time: '20.11.2024, 09:15h',
            isReply: false,
            content: `Poštovana Ana,
    
    Hvala na upitu. U prilogu Vam šaljem našu trenutnu ponudu za korporativne klijente.
    
    Srdačan pozdrav,
    Marko Horvat`,
            attachments: ['korporativna_ponuda_2024.pdf']
        },
        {
            author: 'Ana Anić',
            email: 'a.anic@tvrtka.hr',
            time: '20.11.2024, 10:30h',
            isReply: true,
            content: `Poštovani,
    
    Zahvaljujem na poslanoj ponudi. Možete li mi dodatno pojasniti uvjete plaćanja?
    
    Lijep pozdrav,
    Ana`,
            attachments: []
        },
        {
            author: 'Marko Horvat',
            email: 'm.horvat@korporacija.hr',
            time: '20.11.2024, 11:45h',
            isReply: false,
            content: `Poštovana Ana,
    
    Nudimo nekoliko opcija plaćanja:
    1. Jednokratno plaćanje uz 5% popusta
    2. Obročno plaćanje do 12 rata bez kamata
    3. Odgođeno plaćanje do 60 dana
    
    Javite koje Vam od navedenih opcija najviše odgovara.
    
    Srdačan pozdrav,
    Marko`,
            attachments: ['uvjeti_placanja.pdf']
        }
    ];

    const createEmailMessage = (email) => {
        const replyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="reply-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 18v-6a3 3 0 0 0 -3 -3h-10l4 -4m0 8l-4 -4" /></svg>`;

        return `
            <div class="crm-mailConversation__message ${email.isReply ? 'is-reply' : ''}">
                <div class="crm-mailConversation__header">
                    <div class="crm-mailConversation__author-wrapper">
                        <span class="crm-avatar ${email.isReply ? 'crm-avatar-reply' : ''}"></span>
                        <div>
                            <div class="crm-mailConversation__author">
                                ${email.author}
                                ${email.isReply ? replyIcon : ''}
                            </div>
                            <div class="crm-mailConversation__email">${email.email}</div>
                        </div>
                    </div>
                    <div class="crm-mailConversation__actions">
                        <div class="crm-mailConversation__time">${email.time}</div>
                    </div>
                </div>
                <div class="crm-mailConversation__content">
                    ${email.content.split('\n').map(line => `<p>${line.trim()}</p>`).join('')}
                </div>
                ${email.attachments.length > 0 ? `
                    <span class="crm-hr_dev"></span>
                    <div class="crm-mailConversation__attachments">
                        <p class="crm-text-muted">Attachments</p>
                        ${email.attachments.map(attachment => `
                            <div class="crm-cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke-width="2"/>
                                </svg>
                                <a href="#" class="crm-mailConversation__attachment-link">${attachment}</a>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    };

  
    earlierButton.addEventListener('click', () => {
        mailConversation.classList.toggle('expanded');
        if (mailConversation.classList.contains('expanded')) {
            previousContainer.innerHTML = previousEmails
                .map(email => createEmailMessage(email))
                .join('');
        } else {
            previousContainer.innerHTML = '';
        }
    });

  
    document.querySelector('.completed-tasks-toggle').addEventListener('click', function() {
        const completedTasksSection = document.querySelector('.crm-completed-tasks');
        completedTasksSection.classList.toggle('expanded');
        this.classList.toggle('expanded');
        
    
        if (completedTasksSection.classList.contains('expanded')) {
            setTimeout(() => {
                document.querySelector('.crm-completed-search-input').focus();
            }, 300); 
        }
    });

   
    document.querySelector('.crm-completed-search-input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const completedTasks = document.querySelectorAll('.completed-tasks-container .crm-task-item');
        
        completedTasks.forEach(task => {
            const taskTitle = task.querySelector('.crm-task-title-text').textContent.toLowerCase();
            const taskAuthor = task.querySelector('.crm-task-author').textContent.toLowerCase();
            
            if (taskTitle.includes(searchTerm) || taskAuthor.includes(searchTerm)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    });


    document.querySelector('.crm-active-search-toggle').addEventListener('click', function() {
        const header = document.querySelector('.crm-section-header');
        header.classList.add('search-active');
        document.querySelector('.crm-active-search-input').focus();
    });

    document.querySelector('.crm-active-search-close').addEventListener('click', function() {
        const header = document.querySelector('.crm-section-header');
        header.classList.remove('search-active');
        const searchInput = document.querySelector('.crm-active-search-input');
        searchInput.value = '';
    
        const activeTasks = document.querySelectorAll('.crm-active-tasks .crm-task-item');
        activeTasks.forEach(task => {
            task.style.display = '';
        });
    });

    document.querySelector('.crm-active-search-input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const activeTasks = document.querySelectorAll('.crm-active-tasks .crm-task-item');
        
        activeTasks.forEach(task => {
            const title = task.querySelector('.crm-task-title-text')?.textContent.toLowerCase() || '';
            const author = task.querySelector('.crm-task-author')?.textContent.toLowerCase() || '';
            const shouldShow = title.includes(searchTerm) || author.includes(searchTerm);
            task.style.display = shouldShow ? '' : 'none';
        });
    });
});