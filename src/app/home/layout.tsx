import React from "react";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home Page',
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <ul>
                <li>hey</li>
            </ul>
            {children}
        </div>
    )
}