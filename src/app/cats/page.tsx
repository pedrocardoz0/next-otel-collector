import { getBreedsData } from "@/app/cats/getBreeds"
import styles from '@/app/cats/styles.module.css'
import Image from 'next/image'
import Button from '@/app/cats/button'

export const revalidate = 5

export default async function CatPage() {
    const data = await getBreedsData()

    return (
        <>
        {console.log(data[0].id)}
            {data.map((cat, index) => (
                <div key={index} className={styles.card}>
                    <Image 
                        blurDataURL={cat.url}
                        placeholder="blur"
                        src={cat.url} 
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />

                    <h1>{cat.breeds[0].name}</h1>

                    <h4>{cat.breeds[0].origin}</h4>
                    <Button id={cat.id} />
                </div>
            ))}
            
        </>
    )
}