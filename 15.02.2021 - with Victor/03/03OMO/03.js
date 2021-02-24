const { describe } = require('mocha');
const { assert } = require('chai');

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

describe("Tests …", function () {
    describe("Dealership testing:", function () {

        it("First method1", function () {
            assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000);
        });

        it("First method2", function () {
            assert.equal(dealership.newCarCost('', 30000), 30000);
        });

        it("Second method", function () {

            let equipment = dealership.carEquipment(['roof'], [0]);

            assert.equal(dealership.carEquipment(['roof', 'seats'], [0]), 'roof', 'seats')

        });

        it("Third method", function () {
            
            assert.equal(dealership.euroCategory(4), 'We have added 5% discount to the final price: 14250.')

        });
    });

    // TODO: …
});
