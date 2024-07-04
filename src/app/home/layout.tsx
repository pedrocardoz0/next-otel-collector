'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <div>
            <ul>
                <li>{pathname}</li>
            </ul>
            {children}
        </div>
    )
}