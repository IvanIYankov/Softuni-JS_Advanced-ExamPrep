let { Repository } = require("./solution.js");
const {describe} = require('mocha');
const {assert} = require('chai');

describe('Tests …', function() {
	let properties = {
		name: 'string',
		age: 'number',
		birthday: 'object',
	};
	let repo;

	this.beforeEach(() => {
		repo = new Repository(properties);
	});

	describe('TODO …', function() {
		it('add', function() {
			let entity = {
				name: 'Pesho',
				age: 22,
				birthday: new Date(1998, 0, 7),
			};
			assert.equal(repo.add(entity), 0);
			assert.equal(repo.add(entity), 1);
			assert.deepEqual(repo.data.get(1), entity);
			assert.equal(repo.count, 2);
		});
		it('add', function() {
			let entity = {
				nameSomething: 'Pesho',
				age: 22,
				birthday: new Date(1998, 0, 7),
			};
			assert.throw(() => {
				repo.add(entity);
			}, `Property name is missing from the entity!`);
		});
		it('add', function() {
			let entity = {
				name: 2,
				age: 22,
				birthday: new Date(1998, 0, 7),
			};
			assert.throw(() => {
				repo.add(entity);
			}, `Property name is not of correct type!`);
		});
	});

	describe('TODO …', function() {
		it('constructor', function() {
			assert.instanceOf(repo, Repository);
			assert.deepEqual(repo.props, properties);
			assert.deepEqual(repo.data, new Map());
			assert.equal(repo.nextId(), 0);
			assert.equal(repo.count, 0);
		});
	});

	describe('TODO …', function() {
		it('getId', function() {
			let entity1 = {
				name: 'Pesho1',
				age: 23,
				birthday: new Date(1998, 0, 7),
			};
			let entity2 = {
				name: 'Pesho48',
				age: 45,
				birthday: new Date(1998, 0, 7),
			};
			repo.add(entity1);
			assert.equal(repo.add(entity2),1);

			assert.throw(() => {
				repo.getId(8);
			}, `Entity with id: 8 does not exist!`);

			assert.deepEqual(repo.getId(0), entity1);
		});
	});

	describe('TODO …', function() {
		it('update', function() {
			let entity = {
				name: 'Pesho',
				age: 22,
				birthday: new Date(1998, 0, 7),
			};

			let entity1 = {
				name: 'Pesho1',
				age: 23,
				birthday: new Date(1998, 0, 7),
			};
			let entity2 = {
				name: 'Pesho48',
				age: 45,
				birthday: new Date(1998, 0, 7),
			};
			let entity3 = {
				nameStr: 'Pesho48',
				age: 45,
				birthday: new Date(1998, 0, 7),
			};
			let entity4 = {
				name: 18,
				age: 45,
				birthday: new Date(1998, 0, 7),
			};
			repo.add(entity);
			repo.add(entity1);

			assert.throw(() => {
				repo.update(8, entity2);
			}, `Entity with id: 8 does not exist!`);

			assert.throw(() => {
				repo.update(0, entity3);
			}, `Property name is missing from the entity!`);
			assert.throw(() => {
				repo.update(0, entity4);
			}, `Property name is not of correct type!`);

			repo.update(0, entity2);
			assert.equal(repo.count, 2);
			assert.deepEqual(repo.getId(0), entity2);
			assert.deepEqual(Array.from(repo.data.entries()), [
				[
					0,
					{
						name: 'Pesho48',
						age: 45,
						birthday: new Date(1998, 0, 7),
					},
				],
				[
					1,
					{
						name: 'Pesho1',
						age: 23,
						birthday: new Date(1998, 0, 7),
					},
				],
			]);
		});
	});
	describe('TODO …', function() {
		it('del', function() {
			assert.throw(() => {
				repo.del(8);
            }, `Entity with id: 8 does not exist!`);

            let entity = {
				name: 'Pesho',
				age: 22,
				birthday: new Date(1998, 0, 7),
            };
             let entity2 = {
					name: 'Gosho',
					age: 22,
					birthday: new Date(1998, 0, 7),
            };
            let entity3 = {
				name: 'Sasho',
				age: 22,
				birthday: new Date(1998, 0, 7),
			};
            repo.add(entity);
            repo.add(entity2);
            repo.add(entity3);
            assert.equal(repo.count,3);
            repo.del(0);
            repo.del(2)
            assert.equal(repo.count, 1);
            assert.deepEqual(Array.from(repo.data.entries()),[[1,entity2]])
        });
        
	});
});
