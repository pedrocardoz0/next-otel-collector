import { getFavourites } from '@/app/cats/getBreeds'
import Image from 'next/image'

export default async function FavouritePage() {
    const data = await getFavourites()
    return (
        <div>
            {data.map((cat, index) => (
                <div key={index}>
                    <h1>{cat.image_id}</h1>

                    <Image 
                        blurDataURL={cat.image.url}
                        placeholder="blur"
                        src={cat.image.url} 
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                </div>
            ))}
        </div>
    )
}