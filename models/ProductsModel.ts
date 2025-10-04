//import supabase exactly data base and we can do anything
import { supabase } from "../config/connectToDataBase";

//function that make request to database and select all products
export async function getAllProduct() {
    
    return supabase
    .from("Products")
    .select("*, products_attributes(*)")
}
//function that make request to database and select product by id
export async function getProductById( id: string ) {
    return supabase
    .from("Products")
    .select("*, products_attributes(*)")
    .eq("id", id)
}
//function that make request to database and select item in cart
export async function getCartItems() {
    return supabase
    .from("productInCart")
    .select("*")
}