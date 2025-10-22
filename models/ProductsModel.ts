//import supabase exactly data base and we can do anything
import { supabase } from "../config/connectToDataBase";

//function that make request to database and select all products
export async function getAllProduct() {
  return supabase.from("Products").select("*, products_attributes(*)");
}
//function that make request to database and select product by id
export async function getProductById(id: string) {
  return supabase
    .from("Products")
    .select("*, products_attributes(*)")
    .eq("id", id);
}

//useless function
export async function getProductByQueryParams(index1: number, index2: number) {
  return supabase.from("Products").select().range(index1, index2);
}

//function that returns 5 products that are not equal to the parameters
export async function relatedProduct(name: string) {
  return supabase.from("Products").select("*").neq("name", name).range(0, 4);
}
