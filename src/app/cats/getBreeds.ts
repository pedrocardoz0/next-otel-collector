type Weight = {
    imperial: string;
    metric: string;
};

type Breed = {
    weight: Weight;
    id: string;
    name: string;
    cfa_url: string;
    vetstreet_url: string;
    vcahospitals_url: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url: string;
    hypoallergenic: number;
    reference_image_id: string;
};

type Image = {
    breeds: Breed[];
    id: string;
    url: string;
    width: number;
    height: number;
};

type CatData = Image[];


export async function getBreedsData(): Promise<CatData> {
    try {
        const headers = new Headers()
        const api_token = process.env.API_TOKEN ?? ""

        headers.append("x-api-key", api_token)
        const data = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10", {
            headers
        })
    
        if (!data.ok) {
            throw new Error('Failed to get data')
        }
    
        return data.json()
    } catch (err) {
        throw new Error("Failed")
    }
}

interface ImageFav {
    id: string;
    url: string;
}

interface Favourite {
    id: number;
    user_id: string;
    image_id: string;
    sub_id: string;
    created_at: string;
    image: ImageFav;
}

type FavouritesResponse = Favourite[];

export async function getFavourites(): Promise<FavouritesResponse> {
    try {
        const headers = new Headers()
        headers.append("x-api-key", process.env.API_TOKEN)
    
        const data = await fetch("https://api.thecatapi.com/v1/favourites?sub_id=pedro-custom-uuid&limit=100", {
            headers,
            next: {
                tags: ['fav']
            }
        })
    
        if (!data.ok) {
            console.log(await data.text())
            throw new Error("failed to get favourites")
        }
    
        return data.json()
    } catch (err) {
        throw new Error("Failed")
    }
}