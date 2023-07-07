export interface Product {
    id: string;
    title: string;
    price: number;
    amount: number;
    type: "service" | "product";
    description: string;
    ownerId: string;
    place: string;
    imageId: string;
}
