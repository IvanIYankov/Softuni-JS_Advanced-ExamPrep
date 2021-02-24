function solve() {

    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const moduleName = document.querySelector('select');
    const modulesOutput = document.querySelector('.modules');

    
    let state = {};

    function add(e){
        e.preventDefault();

        if (lecture.value === '' || date.value === '' || moduleName.value.includes('Select module')) {
            return;
        }

        let lectureName = lecture.value;
        let dateString = date.value;

        const lectureTitle = lectureName + ' - ' + dateString.split('-').join('/').split('T').join(' - ');

        const delBtn = createElement('button', 'Del', ['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);
        const li = createElement('li', undefined, ['class=flex']);

        li.appendChild(lectureH4);
        li.appendChild(delBtn);

        let module = undefined;
        let ul = undefined;

    }

    function del(e) {

    }
    

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        attributes
            .map(attr => attr.split('='))
            .forEach(([name, value]) => {
                element.setAttribute(name, value);
            })

        return element;
    }

    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        
        if (e.target.tagName === 'BUTTON') { //ако таргета е бутон само тогава правя нещо 

            
            if (!e.target.classList.contains('red')) {  //Ако не съдържа клас red добавям 
                add(e);
                // render()
            } else {  //Иначе трия
                del(e);
            }
        }
    })
};