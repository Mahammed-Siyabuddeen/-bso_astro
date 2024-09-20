import type {userType} from '../content/types'
interface prop {
    value: string
}
export async function isAuthenticated(value: string): Promise<userType|false> {
    const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/api/users/me?populate=*`, {
    
        headers: {
            Authorization: `Bearer ${value}`
        },
    
    })
    
    if (response.ok) {
        return await response.json() as userType;
    }
    return false
}