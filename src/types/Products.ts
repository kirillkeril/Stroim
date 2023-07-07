export interface Product {
    id: string;
    title: string;
    price: number;
    amount: number;
    type: "service" | "product";
    description: string;
    ownerId: string;
    ownerName: string;
    place: string;
    imageId: string;
}
