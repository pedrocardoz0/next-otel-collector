'use client'

import { favourite } from '@/app/cats/action'

export default function Button({ id }: { id: string }) {
    console.log("service: ID", id)
    return (
        <button onClick={async () => {
            await favourite(id) 
        }}>Favourite</button>
    )
}