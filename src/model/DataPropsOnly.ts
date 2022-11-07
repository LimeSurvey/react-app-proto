export type DTO<t> = any

export type DataPropNames<T> = {
	[K in keyof T]: T[K] extends Function ? never : K;
}[keyof T]

export type DataPropsOnly<T> = {
	[P in DataPropNames<T>]: T[P] extends object ? DTO<T[P]> : T[P]
}

export default DataPropsOnly;