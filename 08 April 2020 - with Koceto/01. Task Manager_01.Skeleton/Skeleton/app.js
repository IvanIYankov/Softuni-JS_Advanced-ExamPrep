function solve() {
    
    let openSection = document.getElementById('section')[1];


    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value === '' || description.value === '' || date.value === '') {
            return;
        }

        

        task.value = '';
        description.value = '';
        date.value = '';
    })
}