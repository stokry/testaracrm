    // Quick Actions Form Toggle
    const quickActionsToggle = document.getElementById('quickActionsToggle');
    const quickActionsForm = document.getElementById('quickActionsForm');
    const fileUpload = document.getElementById('fileUpload');
    const attachedFiles = document.getElementById('attachedFiles');
    const quickNote = document.getElementById('quickNote');


    quickActionsToggle.addEventListener('click', () => {
        quickActionsForm.classList.toggle('collapsed');
        quickActionsForm.classList.toggle('expanded');
    });

    fileUpload.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        
  
        attachedFiles.innerHTML = '';
        

        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = 'crm-file-item';
            fileItem.innerHTML = `
                <span class="crm-file-item-name">${file.name}</span>
                <button class="crm-remove-file" onclick="this.parentElement.remove()">
                     <i class="fa-regular fa-paperclip"></i>
                </button>
            `;
            attachedFiles.appendChild(fileItem);
        });
    });

  
    document.querySelector('.crm-send-note').addEventListener('click', () => {
        const noteText = quickNote.value.trim();
        const files = Array.from(attachedFiles.children).map(item => 
            item.querySelector('.crm-file-item-name').textContent
        );
        
        if (noteText || files.length > 0) {
            console.log('Note:', noteText);
            console.log('Attached files:', files);
            
            // Clear form
            quickNote.value = '';
            attachedFiles.innerHTML = '';
            quickActionsForm.classList.add('collapsed');
            quickActionsForm.classList.remove('expanded');
            
           
        }
    });