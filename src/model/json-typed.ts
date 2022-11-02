// This file was not written very well for typescript
// - disabling type checking until it can be refactored
// @ts-nocheck

export interface ConfigRegex {
	pattern: any,
	type: any
}

export interface JsonTypedParseConfig {
	regex: ConfigRegex[]
}

export const jsonTypedConfigRegexDate: ConfigRegex =
{
	pattern: /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/i,
	type: Date
};

export const reviverStandard = function (value, type) {
	let valueType = typeof value;
	if (Array.isArray(value)) {
		return new type(...value);
	} else if (
		valueType == 'number'
		|| valueType == 'string'
	) {
		return new type(value);
	} else {
		return Object.assign(new type, value);
	}
};

export class JsonTyped {
	static stringifyTyped(value: any): string {
		const typedReplacer = (key, value) => {
			if (key !== '_v' && value && value.constructor) {
				let alias = value.constructor.alias
					? value.constructor.alias
					: value.constructor.name;
				if (
					alias
					&& [
						'Object',
						'Array',
						'String',
						'Number',
						'Boolean'
					].includes(alias) == false
				) {
					value = value
						&& typeof value.toJsonTyped == 'function'
						? value.toJsonTyped() : value;
					return { _n: alias, _v: value };
				}
			}
			return value;
		}

		return JSON.stringify(typedReplacer(null, value), typedReplacer);
	}

	static parseTyped(text: string, types: Array<any>, config?: JsonTypedParseConfig): any {
		var typesByName = {};
		if (Array.isArray(types) && types.length) {
			types.forEach(function (type) {
				let typeName = type.alias ? type.alias : type.name;
				if (type.type && type.reviver) {
					typesByName[typeName] = type;
				} else {
					typesByName[typeName] = {
						type: type,
						reviver: (origValue) => reviverStandard(origValue, type)
					}
				};
			});
		}

		const typedReviver = (_key, value) => {
			if (value) {
				let name = value._n;
				let origValue = value._v;
				if (name) {
					if (typesByName[name]) {
						let reviver = typesByName[name].reviver;
						if (reviver) {
							return reviver(origValue);
						}
					}
					if (origValue) return origValue;
				} else {
					// Detect type by of string value with regex pattern
					if (typeof value === 'string') {
						if (config && Array.isArray(config.regex)) {
							for (let regexConfig of config.regex) {
								if (
									regexConfig.pattern
									&& regexConfig.type
									&& typeof regexConfig.pattern.test == 'function'
									&& regexConfig.pattern.test(value)
								) {
									return reviverStandard(value, regexConfig.type);
								}
							}
						}
					}
				}
			}
			return value;
		}

		return typedReviver(null, JSON.parse(text, typedReviver));
	}
}

export default JsonTyped;
