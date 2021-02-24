const { describe } = require('mocha');
const { assert } = require('chai');

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}


describe("Tests …", function () {
    describe("Make an order", function () {

        it("First method", function () {
            assert.throw(() => pizzUni.makeAnOrder({ orderedDrink: 'the name of the drink' }), 'You must order at least 1 Pizza to finish the order.');
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'pizza1', orderedDrink: 'coke' }), 'You just ordered pizza1 and coke.');
        });

        it("Second method", function () {
            let pizzas = [
                { pizzaName: 'pizza1', status: 'preparing' },
                { pizzaName: 'pizza2', status: 'ready' }];

            let pizzaIsReady = [{ pizzaName: 'pizza2', status: 'ready' }];


            assert.equal(pizzUni.getRemainingWork(pizzas), 'The following pizzas are still preparing: pizza1.')
            assert.equal(pizzUni.getRemainingWork(pizzaIsReady), 'All orders are complete!')
        });

        it("Third method", function () {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 90);
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);

        });
    });

    // TODO: …
});