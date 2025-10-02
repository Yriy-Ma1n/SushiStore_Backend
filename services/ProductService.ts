//import product models 
import { getAllProduct, getProductById } from "../models/ProductsModel";

import type { products_attributes } from "../types/productType";

//function that get a data and an error
export async function fetchProducts() {
    const { data, error } = await getAllProduct()
    console.log(data)
    if (error) {
        console.log('error:', error)
        throw error
    }

    return data
}
//function that get the product by id and an error if something went wrong and return the product or an error
export async function fetchProduct(id: string) {
    const { data, error } = await getProductById(id)
    if (data) {
        const some: {
            id: string,
            name: string,
            price: number,
            img: string,
            description: string,
            products_attributes: products_attributes[]
        }[] = data
       
    }




    if (error) throw error

    return data
}