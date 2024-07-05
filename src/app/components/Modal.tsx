'use client'
import { useRouter } from 'next/navigation'
export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    return (
        <>
            <button type='button' onClick={() => router.back()}>Go Back</button>
            <h1>thats a modal</h1>
            {children}
        </>
    )
}