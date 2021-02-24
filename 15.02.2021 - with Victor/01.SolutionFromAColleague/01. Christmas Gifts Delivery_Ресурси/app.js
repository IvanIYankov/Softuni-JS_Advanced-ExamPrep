function solution() {
    const containerDivEl = document.querySelector('.container');
    const sections = document.querySelectorAll('.card');
    const listUl = sections[1].children[1];
    const sentUl = sections[2].children[1];
    const discardedUl = sections[3].children[1];

    let state = {
        gifts: [],
        add: function (e) {
            const addInputEl = e.target.previousElementSibling;

            if (!addInputEl.value) {
                return;
            }

            let newLiEl = this.createElements('li', addInputEl.value, 'gift');
            let newSendBtn =this. createElements('button', 'Send', '', 'sendButton');
            let newDiscardBtn =this. createElements('button', 'Discard', '', 'discardButton');
            this.appendElements(newSendBtn, newLiEl);
            this.appendElements(newDiscardBtn, newLiEl);

            this.gifts.push(newLiEl);
            this.gifts.sort((a, b) => a.textContent.localeCompare(b.textContent));
            this.gifts.forEach(li => this.appendElements(li, listUl))
            addInputEl.value = "";
        },
        send: function (e) {
            let li = e.target.parentElement;

            e.target.nextElementSibling.remove();
            e.target.remove();
            this.appendElements(li, sentUl);

            let index = this.gifts.findIndex(el => el.textContent == li.textContent);
            this.gifts.splice(index, 1);
        },

        discard: function (e) {
            let li = e.target.parentElement;
            Array.from(li.children).forEach(x => x.remove())
            this.appendElements(li, discardedUl);

            let index = this.gifts.findIndex(el => el.textContent == li.textContent);
            this.gifts.splice(index, 1);
        },


        

        createElements: function(type, text, cls, id) {
            const el = document.createElement(type);
            el.textContent = text;
            if (cls) {
                el.classList.add(cls);
            }
            if (id) {
                el.id = id;
            }
            return el;
        },

        appendElements : function (from, to) {
            to.appendChild(from);
        },
    }

    containerDivEl.addEventListener('click', function (e) {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.textContent === "Add gift") {
                state.add(e);
            } else if (e.target.textContent === "Send") {
                state.send(e)
            } else if (e.target.textContent === 'Discard') {
                state.discard(e);
            }
        }
    })
}