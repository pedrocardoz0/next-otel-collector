import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dashboard Page',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h3>Dashboard Layout</h3>
            {children}
        </div>
    )
}