import React from 'react'
import { isAuthenticated } from '../utility/auth'
import type { cartItemType, ProductData } from '../content/types'

interface prop {
    product: ProductData,
    jwt: string | null
}
function AddButtom({ jwt, product }: prop) {

    async function addToCart() {
        if (!jwt) return alert("please login")
        const authenticated = await isAuthenticated(jwt)
        if (!authenticated) return alert("please login")
            const updatedCart= [...authenticated.carts,product]
            console.log(updatedCart);
            
            fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/api/users/${authenticated.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ carts: updatedCart })
            }).then((re)=>console.log(re)
            ).catch((er)=>console.log(er)
            )
        return alert("successfully added")


    }
    return (
        <button onClick={addToCart} className="py-2 px-6 rounded bg-red-300 flex items-center gap-1">
            {/* <Icon name={"cart_icon"} />  */}
            Add
        </button>
    )
}

export default AddButtom