document.addEventListener('DOMContentLoaded', () => {
    const preuzmiButton = document.querySelector('.crm-preuzmi');
    const actionButtons = document.querySelector('.crm-action-buttons');
    const releaseButton = document.querySelector('.crm-button-secondary');
    const taskItems = document.querySelectorAll('.crm-task-item');
    const defaultMessage = document.querySelector('.crm-default-message');
    const taskDetails = document.querySelector('.crm-task-details');
    const clientDetails = document.querySelector('.crm-info-panel');
    const footer = document.querySelector('.crm-details-footer');

    // Hide task details and client info panel by default
    if (taskDetails) taskDetails.style.display = 'none';
    if (clientDetails) clientDetails.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (defaultMessage) defaultMessage.style.display = 'flex';

    if (preuzmiButton) {
        preuzmiButton.addEventListener('click', () => {
            const activeTask = document.querySelector('.crm-task-item.active');
            if (activeTask) {
                activeTask.classList.add('assigned');
            }

            preuzmiButton.style.display = 'none';
            
            if (actionButtons) {
                actionButtons.style.display = 'flex';
            }
        });
    }

    if (releaseButton) {
        releaseButton.addEventListener('click', () => {
            const activeTask = document.querySelector('.crm-task-item.active');
            if (activeTask) {
                activeTask.classList.remove('assigned');
            }

            if (preuzmiButton) {
                preuzmiButton.style.display = 'block';
            }

            if (actionButtons) {
                actionButtons.style.display = 'none';
            }
        });
    }

    taskItems.forEach(taskItem => {
        taskItem.addEventListener('click', () => {
            // Remove active class from all tasks
            taskItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked task
            taskItem.classList.add('active');
            
            // Hide default message
            if (defaultMessage) defaultMessage.style.display = 'none';
            
            // Show task details and client info
            if (taskDetails) {
                taskDetails.style.display = 'contents';
                taskDetails.classList.add('active');
            }
            
            if (clientDetails) {
                clientDetails.style.display = 'block';
            }
            
            if (footer) {
                footer.style.display = 'flex';
            }
            
            // Handle assign button visibility
            if (taskItem.classList.contains('assigned')) {
                if (preuzmiButton) preuzmiButton.style.display = 'none';
                if (actionButtons) actionButtons.style.display = 'flex';
            } else {
                if (preuzmiButton) preuzmiButton.style.display = 'block';
                if (actionButtons) actionButtons.style.display = 'none';
            }
        });
    });

    // Toggle completed tasks expand/collapse
    document.querySelector('.completed-tasks-toggle').addEventListener('click', function() {
        this.classList.toggle('expandedCompletedTasks');
        document.querySelector('.completed-tasks-container').classList.toggle('expandedCompletedTasks');
    });
});