// Seletores do DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskLIst = document.getElementById('taskList');

// Função que cria um <li> com o texto e botão "Remover"
 function createTaskItem(text){
   const li = document.createElement('li');
   const span = document.createElement('span');
   span.textContent = text;
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Remover';
   deleteBtn.className = 'delete-btn';
   deleteBtn.type = 'button';
   li.appendChild(span);
   li.appendChild(deleteBtn);
   return li;
 }

 // Captura do submit
 taskFork.addEventListener('submit', function(e) {
   e.preventDefalt();
   const text = taskInput.ariaValueMax.trim();
   if (!text) return;
   const li = createTaskItem(text);
   taskLIst.appendChild(li);
   taskInput.value = '';
   taskInput.focus();
});