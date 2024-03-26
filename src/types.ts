export interface UserType {
    name: string,
    email: string,
    address: string[],
    role: "admin" | "user",
    avatar: string | undefined
}

export interface IProduct {
    _id:string,
    name: string,
    description: string,
    shortdescription: string,
    price: number,
    category: string,
    quantity: string,
    images: string[],
    slug: string,
    productCategory: string
}

export interface Icategory {
    _id: string,
    name: string,
    image: string
}

export interface IPRes <T> {
    success: boolean,
    products: T[]
}

export interface IURes <T> {
    success: boolean,
    user: T[]
}

export interface ICRes <T> {
    success: boolean,
    categories: T[]
}

export interface IMRes {
    success: boolean,
    message: string
}