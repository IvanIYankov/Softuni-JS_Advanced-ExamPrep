const dealership = require('./dealership');
const expect = require('chai').expect;

describe('test', () => {
    describe('newCarCost', () => {
        it('returns OG price when the model is not supported', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        });
        it('returns price with discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        });

    })

    describe('carEquipment', () => {
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        });
    })

    describe('euroCategory', () => {
        it ('category is below threshold', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it ('category is above threshold', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    })
})