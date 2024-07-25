document.addEventListener("DOMContentLoaded", function() {
    const loadingContainer = document.getElementById('loading');
    const content = document.getElementById('content');
    const taskForm = document.getElementById('task-form');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    // Simulasi proses loading
    setTimeout(function() {
        loadingContainer.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Sesuaikan durasi timeout sesuai kebutuhan

    // Tambahkan tugas baru ke daftar
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const newTaskItem = document.createElement('li');
            newTaskItem.innerHTML = `
                <span class="task">${taskText}</span>
                <div class="actions">
                    <button class="complete-btn">Selesai</button>
                    <button class="delete-btn">Hapus</button>
                </div>
            `;
            todoList.appendChild(newTaskItem);
            newTaskInput.value = '';
        }
    });

    // Delegasi event untuk menyelesaikan atau menghapus tugas
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('complete-btn')) {
            const taskItem = event.target.closest('li');
            taskItem.querySelector('.task').classList.toggle('completed');
        }

        if (event.target.classList.contains('delete-btn')) {
            const taskItem = event.target.closest('li');
            todoList.removeChild(taskItem);
        }
    });
});
