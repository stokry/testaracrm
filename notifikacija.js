document.addEventListener('DOMContentLoaded', () => {
    const notificationContainer = document.querySelector('.crm-notification-container');
    const closeButton = document.querySelector('.crm-notification-close');
    const notificationCard = document.querySelector('.crm-notification-card');
    
    if (notificationContainer) {
        notificationContainer.style.display = 'none';
    }
    
    setTimeout(() => {
        if (notificationContainer) {
            notificationContainer.style.display = 'block';
            notificationContainer.style.animation = 'fadeIn 0.3s ease-in';
            
    
            updateNotificationContent(
                'WhatsApp',
                '#25D366',
                'Nova poruka od Marija Jurić',
                'Nova WhatsApp poruka'
            );
        }
    }, 10000);


    setTimeout(() => {
        if (notificationContainer) {
            notificationContainer.style.display = 'block';
            notificationContainer.style.animation = 'fadeIn 0.3s ease-in';
            
       
            updateNotificationContent(
                'Email',
                '#4d5180',
                'Nova Email poruka od Ivan Horvat',
                'Novi Email primljen'
            );
        }
    }, 20000);

    if (closeButton && notificationCard) {
        closeButton.addEventListener('click', () => {
            notificationContainer.style.display = 'none';
        });
    }

    function updateNotificationContent(type, iconColor, title, subtitle) {
        const iconSVG = type === 'WhatsApp' 
            ? '<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />'
            : '<path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" /><path d="M3 7L12 13L21 7" />';

        const titleElement = document.querySelector('.crm-notification-title');
        const subtitleElement = document.querySelector('.crm-notification-subtitle');
        
        if (titleElement) {
            titleElement.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    ${iconSVG}
                </svg>
                ${title}
            `;
        }
        
        if (subtitleElement) {
            subtitleElement.textContent = subtitle;
        }
    }
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;