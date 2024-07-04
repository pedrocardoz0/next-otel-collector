import Link from 'next/link'

export default function Page() {
    return (
        <>
            <Link href={'/home/dashboard#tjis'}>Dashboard Link</Link>
            <h1>Home</h1>
        </>
    )
}