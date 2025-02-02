class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {

        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = budget;
    }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`
    }

    recipes({recipeName, productsList}) {
        if (this.products.some(p => productsList.includes(p) == false)) {
            throw new Error('We do not have this product');
        }

        this.dishes.push({recipeName, productList});

        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        if (dish.some(d => this.dishes.includes(d) == false)) {
            throwError('We do not have this dish');
        } else if (this.guests.some(g => this.guests.includes(g) == true)) {
            throwError('This guest has already been invited');
        }

        console.log(this.guests[name]);


    }

    showAttendance() {
        console.log(this.dishes);
    }
}

function throwError(message) {
    throw new Error(message);
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});

dinner.inviteGuests('Ivan', 'Oshav');


////////////////////////////TESTING///////////////////////////////

/*
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.showAttendance();



dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());


*/