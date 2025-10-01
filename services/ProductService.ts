import { getAllProduct, getProductById } from "../models/ProductsModel";

export async function fetchProducts() {
    const { data, error } = await getAllProduct()

    if(error) throw error

    return data
}

export async function fetchProduct(id:string) {
    const { data, error } = await getProductById(id)
    
    if(error) throw error
    return data
}