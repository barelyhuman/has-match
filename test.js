import test from 'ava'
import hasMatch from './index.js'

const garden = {
	name: 'Sunny Fields',
	plants: ['roses', 'lilies', 'gerberas'],
}

const asArray = [garden]

test('main', (t) => {
	t.is(hasMatch('lilies', [], {}), false)
	t.is(hasMatch('pineapple', [], garden), false)
})

test('match string value', (t) => {
	t.is(hasMatch('sunny fields', [], garden), true)
})

test('match string value in array', (t) => {
	t.is(hasMatch('roses', [], garden), true)
})

test('partial match string value', (t) => {
	t.is(hasMatch('sun', [], garden), true)
})

test('partial match string value in array', (t) => {
	t.is(hasMatch('ger', [], garden), true)
})

test('match included keys only', (t) => {
	t.is(hasMatch('sunny fields', ['plants'], garden), false)
	t.is(hasMatch('roses', ['plants'], garden), true)
})

test('match on array filter', (t) => {
	t.deepEqual(asArray.filter(hasMatch('sunny fields', ['plants'])), [])
	t.deepEqual(asArray.filter(hasMatch('roses', ['plants'])), [
		{
			name: 'Sunny Fields',
			plants: ['roses', 'lilies', 'gerberas'],
		},
	])
})
