import { supabase } from "../config/connectToDataBase";


//function that make request to database and select item in cart
export async function getCartItems() {
    return supabase
        .from("productInCart")
        .select("*")
}