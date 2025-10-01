//import product models 
import { getAllProduct, getProductById } from "../models/ProductsModel.ts";

//function that get a data and an error
export async function fetchProducts() {
    const { data, error } = await getAllProduct()
    console.log(data)
    if (error) {
        console.log('error:',error)
        throw error
    }

    return data
}
//function that get the product by id and an error if something went wrong and return the product or an error
export async function fetchProduct(id: string) {
    const { data, error } = await getProductById(id)

    if (error) throw error

    return data
}