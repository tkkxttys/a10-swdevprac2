/*import ProductCard from "./Card"
import Link from "next/link"

export default async function VenueCatalog({venuesJson}: {venuesJson: Promise<VenueJson>}) {

    const venueJsonReady = await venuesJson

    return(
        <>
        Explore {venueJsonReady.count} models in our catalog
        <div style={{margin: "20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    venueJsonReady.data.map((venueItem: Object) => (
                        <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}*/

import ProductCard from "./Card";
import Link from "next/link";

interface Venue {
    id: string;
    name: string;
    picture: string;
}

interface VenueJson {
    count: number;
    data: Venue[];
}

export default async function VenueCatalog({venuesJsonPromise}: {venuesJsonPromise: Promise<VenueJson>}) {
    const venueJsonReady = await venuesJsonPromise;

    return (
        <>
            Explore {venueJsonReady.count} models in our catalog
            <div style={{margin: "20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {venueJsonReady.data.map((venueItem: Venue) => (
                    <Link href={`/venue/${venueItem.id}`} className="w-1/5" key={venueItem.id}>
                        <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture}/>
                    </Link>
                ))}
            </div>
        </>
    );
}
