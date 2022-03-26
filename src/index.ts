function hasMatch(search: string, includeKeys: string[] = []) {
	return (source: Record<string, unknown>): boolean => {
		const normalizedSearch = search.normalize().toLowerCase()

		const result = Object.keys(source).map((key) => {
			const value = source[key]

			if (includeKeys?.length > 0 && !includeKeys.includes(key)) {
				return false
			}

			if (typeof value === 'string') {
				const normalizedValue = (source[key] as string)
					.normalize()
					.toLowerCase()

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
}

export default hasMatch
