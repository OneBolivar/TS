import { ProductCategory } from "./types";

export interface Iproduct{
    productId : number;
    supplierId : number;
    inventoryId : number;
    productName : string;
    SKU : string;
    quantity : number;
    productPrice : number;  
    category : ProductCategory
}
