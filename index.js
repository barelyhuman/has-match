function createCurry(func) {
	return function curriedFunc(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args)
		}

		return function (...args2) {
			return Reflect.apply(curriedFunc, this, [...args, ...args2])
		}
	}
}

function _createHasMatch(search, includeKeys, source) {
	const normalizedSearch = search.normalize().toLowerCase()

	const result = Object.keys(source).map((key) => {
		const value = source[key]

		if (includeKeys?.length > 0 && !includeKeys.includes(key)) {
			return false
		}

		if (typeof value === 'string') {
			const normalizedValue = source[key].normalize().toLowerCase()

			return normalizedValue.includes(normalizedSearch)
		}

		if (Array.isArray(value)) {
			const result = value.map((item) => {
				if (typeof item === 'string') {
					const normalizedValue = item.normalize().toLowerCase()

					return normalizedValue.includes(normalizedSearch)
				}

				return false
			})

			return result.includes(true)
		}

		return false
	})

	return result.includes(true)
}

const hasMatch = createCurry(_createHasMatch)

export default hasMatch
