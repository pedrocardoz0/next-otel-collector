import Link from 'next/link'

export default function PeopleLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div>
                <Link href={"/management/admin/"}>People Admin</Link>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}