export type User = {
    id:string
    CEAFESTID: string
    name: string
    email: string
    mobile: string
    role: Role
    emailVerified: boolean
    organization?:string | null
    gender: string
    collegeAddress?: string | null 
    hostel?:string | null
    country?:string | null
    type: string
    isIITM:boolean
    payment?:boolean | null
}

export type Role = 'ADMIN' | 'USER'