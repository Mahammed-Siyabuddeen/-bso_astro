import type {userType1} from '../content/types'
interface prop {
    value: string
}
export async function isAuthenticated2(value: string): Promise<userType|false> {
    const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/api/users/me?populate[carts][populate]=Image`, {
        // populate[carts][populate][products][populate]=Image
        headers: {
            Authorization: `Bearer ${value}`
        },
    
    })
    
    if (response.ok) {
        return await response.json() as userType1;
    }
    return false
}