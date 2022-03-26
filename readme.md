# has-match-curry

> Check object value for match

**Note: this is a fork of the original [has-match](https://github.com/mvllow/has-match), the entire codebase is just a restructure of the original to be a curried function.**

**All code and funding still points to the original author mvllow**

## Install

```sh
npm install has-match
```

## Usage

The API of this is a little different from the original library, and the data source is curried left, aka the last parameter is to be the data source.

```js
import hasMatch from 'has-match-curry'

const garden = {
	name: 'Sunny Fields',
	plants: ['roses', 'lilies', 'gerberas'],
}

hasMatch('gerb')(garden)
// => true

hasMatch('sunny fields')(garden)
// => true

hasMatch('sunny fields', ['plants'])(garden)
// => false
```

**Filter**

```js
const gardens = [
	{
		name: 'Sunny Fields',
		plants: ['roses', 'lilies', 'gerberas'],
	},
	{
		name: 'Moony Meadows',
		plants: ['cosmos', 'lilies', 'mushrooms'],
	},
]

gardens.filter(hasMatch('cosmos'))
// => [{ name: 'Moony Meadows', plants: ['cosmos', 'lilies', 'mushrooms'] }]
```

## LICENSE

[MIT](/license)

```
Copyright (c) 2021 mvllow <mvllow@icloud.com>
Copyright (c) 2022 Reaper <ahoy@barelyhuman.dev>
```
