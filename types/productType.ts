export type product = {
        id: string,
        name: string,
        price: number,
        img: string,
        description: string,
        products_attributes: products_attributes[]
    }

export type products_attributes = {
    name_of_attribute: string,
    product_id: string,
    value: string
}