import { Product, ProductFashionMale } from "./types/Product";

export const sampleProducts: Product[] = [
	{
		name: 'Nike Slim shirt',
		slug: 'nike-slim-shirt',
		category: 'Shirts',
		image: '../images/p1.jpg',
		price: 120,
		countInStock: 10,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 10,
		description: 'high quanlity shirt',
	},
	{
		name: 'Adidas Fit Shirt',
		slug: 'adidas-fit-shirt',
		category: 'Shirts',
		image: '../images/p2.jpg',
		price: 100,
		countInStock: 20,
		brand: 'Adidas',
		rating: 4.0,
		numReviews: 10,
		description: 'high quanlity product',
	},
	{
		name: 'Lacoste Free Pants',
		slug: 'lacoste-free-pants',
		category: 'Pants',
		image: '../images/p3.jpg',
		price: 220,
		countInStock: 0,
		brand: 'Lacoste',
		rating: 4.8,
		numReviews: 17,
		description: 'high quanlity product',
	},
	{
		name: 'Nike Slim Pant',
		slug: 'nike-slim-pant',
		category: 'Pants',
		image: '../images/p4.jpg',
		price: 78,
		countInStock: 15,
		brand: 'Nike',
		rating: 4.5,
		numReviews: 14,
		description: 'high quanlity product',
	},
]

export const fashionMale: ProductFashionMale[] = [
	{
		name: 'Quần đùi nam',
		slug: 'quan-dui-nam',
		image: 'https://lzd-img-global.slatic.net/g/p/d429b594b70f66506e600f5d62397db0.jpg_720x720q80.jpg_.webp',
		category: 'Quần',
		brand: 'Jersey',
		price: 17900,
		countInStock: 1200,
		description: 'Quần đùi nam. quần short mặc nhà đi chơi tập thể thao chất liệu cotton thoáng mát (hàng bán tai xưởng may )',
		rating: 4.8,
		numReviews: 427,
		size: ["40-50KG", "50-60KG", "60-73KG", "74-85KG", "85-95KG"]
	}
]