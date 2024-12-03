document.addEventListener('DOMContentLoaded', () => {
    const taskItems = document.querySelectorAll('.crm-task-item');
    const defaultMessage = document.querySelector('.crm-default-message');
    const taskDetails = document.querySelector('.crm-task-details');
    const footer = document.querySelector('.crm-details-footer');

    
    taskItems.forEach(taskItem => {
        taskItem.addEventListener('click', () => {
          
            taskItems.forEach(item => {
                item.classList.remove('active');
            });

          
            taskItem.classList.add('active');

        
            defaultMessage.style.display = 'none';

    
            taskDetails.style.display = 'flex';
            taskDetails.classList.add('active'); 
            footer.style.display = 'flex';
        });
    });
});