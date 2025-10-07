import { getCartItems } from "../models/UserModel"

export async function fetchItemInCart() {
    const { data, error } = await getCartItems()

    if(error) throw error
    
    return data
}