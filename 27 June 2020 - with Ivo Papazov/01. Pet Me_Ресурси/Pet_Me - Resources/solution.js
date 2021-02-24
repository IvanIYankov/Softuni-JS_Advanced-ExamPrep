function solve() {

    let addBtn = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
    let adoptionElement = document.getElementsByTagName('section')[0];
    let nowAdoptedElements = document.getElementsByTagName('section')[1];
    let ulElementInAdoption = document.querySelector('section > ul');
    let ulElementInAdopted = document.querySelector('#adopted > ul');


    addBtn.addEventListener('click', event => {
        event.preventDefault();

        if (!inputElements.every(e => e.value)) {
            return
        }

        if (!Number(ageElement.value)) {
            return
        }

        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let petButtonElement = document.createElement('button');

        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`
        spanElement.innerText = (`Owner: ${ownerElement.value}`)
        petButtonElement.innerText = (`Contact with owner`)

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(petButtonElement);

        ulElementInAdoption.appendChild(liElement);

        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';

        petButtonElement.addEventListener('click', petButtonClick);
    })

    function petButtonClick(buttonEvent) {
        let parent = buttonEvent.currentTarget.parentElement;

        buttonEvent.currentTarget.remove();

        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        let iTakeItBtnElement = document.createElement('button');

        inputElement.setAttribute('placeholder', 'Enter your names')
        iTakeItBtnElement.textContent = 'Yes! I take it!';

        divElement.appendChild(inputElement);
        divElement.appendChild(iTakeItBtnElement);

        parent.appendChild(divElement);

        iTakeItBtnElement.addEventListener('click', onTakeItButtonClick);
    }

    function onTakeItButtonClick(iTakeBtnEvent) {
        let parentBtnElement = iTakeBtnEvent.currentTarget.parentElement;
        let bottomLiElement = iTakeBtnEvent.currentTarget.parentElement.parentElement;

        
        let newOwnerInput = bottomLiElement.querySelector('input');
        let newOwnerSpanElement = bottomLiElement.querySelector('span');
         
        let newOwnerName = newOwnerInput.value; 
        
        if (!newOwnerName) {
            return;
        }
        
        newOwnerSpanElement.textContent = `New Owner: ${newOwnerName}`
        
        ulElementInAdopted.appendChild(bottomLiElement);

        parentBtnElement.remove();

        let checkedButtonElement = document.createElement('button');
        checkedButtonElement.textContent = 'Checked';
    
        bottomLiElement.appendChild(checkedButtonElement);

        checkedButtonElement.addEventListener('click', e => {
            bottomLiElement.remove();
        })
    }
}
        
// //Adopt pet;
// document.body.innerHTML = `<h1>Pet Me!</h1>
//     <p>Want to adopt a pet or need to rehome a dog or cat?</p>
//     <p>Here we can help!</p>
//     <form id="add">
//         <h2>Add New Pet</h2>
//         <div id='container'>
//             <input type="text" placeholder="Name" />
//             <input type="text" placeholder="Age" />
//             <input type="text" placeholder="Kind" />
//             <input type="text" placeholder="Current Owner" />
//             <button>Add</button>
//         </div>
//     </form>
//     <section id="adoption">
//         <h2>Find a new friend from here:</h2>
//         <ul></ul>
//     </section>
//     <section id="adopted">
//         <h2>Buddies with a new home:</h2>
//         <ul></ul> 
//     </section>
//     <script>document.onload = solve();</script>`

// result();
//     // fill inputs
//     const form = document.getElementById('container');
//         let [name, age, kind, owner, addBtn] = Array.from(form.children);

//         name.value = 'Tom';
//         age.value = '0.3';
//         kind.value = 'cat';
//         owner.value = 'Jim King';

//     // click add
//     addBtn.click();

//     // fill contact btn
//     let newLiItem = Array.from(document.querySelector("#adoption > ul").children)[0];
//     let [p, span, btn] = Array.from(newLiItem.children); // [p, span, btn]               
//     btn.click();

//     // fill new input 
//     document.querySelector("#adoption > ul > li > div > input").value = 'Lara Smith'; 
//     document.querySelector("#adoption > ul > li > div > button").click(); 
    
//     let countLi = document.querySelector("#adopted > ul").children.length;
      
//     expect(countLi).to.be.equal(1,'One pet is adopted'); 
//     expect(document.querySelector("#adopted > ul > li > p").textContent).to.be.equal("Tom is a 0.3 year old cat",'One pet is adopted - Tom is a 0.3 year old cat'); 
//     expect(document.querySelector("#adopted > ul > li > span").textContent).to.be.equal("New Owner: Lara Smith",'One pet is adopted from Lara Smith'); 
//     expect(document.querySelector("#adopted > ul > li > button").textContent).to.be.equal("Checked",'Button text is Checked'); 
     
     
 
        

