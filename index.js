/**
 * @param {Object.<string, *>} source
 * @param {string} search
 * @param {string[]} [includeKeys]
 * @returns {boolean}
 */
export default function hasMatch(source, search, includeKeys) {
	const normalizedSearch = search.normalize().toLowerCase()

	const result = Object.keys(source).map((key) => {
		const value = source[key]

		if (includeKeys?.length > 0 && !includeKeys.includes(key)) {
			return false
		}

		if (typeof value === 'string') {
			const normalizedValue = source[key].normalize().toLowerCase()

			return normalizedValue === normalizedSearch
		}

		if (Array.isArray(value)) {
			return hasMatch(value, search, includeKeys)
		}

		return false
	})

	return result.includes(true)
}