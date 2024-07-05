import Link from 'next/link'

export default function ManagementPage() {
    return (
        <div>
            <h1>Management Page</h1>
            <Link href={"/management/admin/"}>Admin</Link>
        </div>
    )
}