'use client'

export default function Error({
    error, reset
}: {
    error: Error & { digest?: string },
    reset: () => void
}) {
    return (
        <div>
            <h2>Something Went Wrong!</h2>
            <p>{error.message}</p>
            <button
                onClick={() => reset()}
            >
                try again
            </button>
        </div>
    )
}