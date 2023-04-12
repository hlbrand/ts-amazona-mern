export type Product = {
	name: string
	slug: string
	image: string
	category: string
	brand: string
	price: number
	countInStock: number
	description: string
	rating: number
	numReviews: number
}

export type ProductFashionMale = {
	name: string
	slug: string
	image: string
	category: string
	brand: string
	price: number
	countInStock: number
	description: string
	rating: number
	numReviews: number
	size: Array<string>
}