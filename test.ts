import {test} from 'uvu'
import assert from 'uvu/assert'
import hasMatch from './src/index'

const garden = {
	name: 'Sunny Fields',
	plants: ['roses', 'lilies', 'gerberas'],
}

const asArray = [garden]

test('main', () => {
	assert.is(hasMatch('lilies')({}), false)
	assert.is(hasMatch('pineapple')(garden), false)
})

test('match string value', () => {
	assert.is(hasMatch('sunny fields', [])(garden), true)
})

test('match string value in array', () => {
	assert.is(hasMatch('roses', [])(garden), true)
})

test('partial match string value', () => {
	assert.is(hasMatch('sun', [])(garden), true)
})

test('partial match string value in array', () => {
	assert.is(hasMatch('ger', [])(garden), true)
})

test('match included keys only', () => {
	assert.is(hasMatch('sunny fields', ['plants'])(garden), false)
	assert.is(hasMatch('roses', ['plants'])(garden), true)
})

test('match on array filter', () => {
	assert.equal(asArray.filter(hasMatch('sunny fields', ['plants'])), [])
	assert.equal(asArray.filter(hasMatch('roses', ['plants'])), [
		{
			name: 'Sunny Fields',
			plants: ['roses', 'lilies', 'gerberas'],
		},
	])
})

test.run()
