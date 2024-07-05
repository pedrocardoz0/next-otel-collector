export async function generateStaticParams() {
    return [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'}
    ]
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return (
        <>
            <h1> we are in some page</h1>
            <p>
                {id}
            </p>
        </>
    )
}