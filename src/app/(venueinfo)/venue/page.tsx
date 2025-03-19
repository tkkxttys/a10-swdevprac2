/*import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default function Venue() {

    const venues =  getVenues()

    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <VenueCatalog venuesJson={venues}/>
            </Suspense>

            <hr className="my-10"/>

            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
        </main>
    )
}*/

import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default function Venue() {

    const venues =  getVenues()

    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <VenueCatalog venuesJsonPromise={venues}/>
            </Suspense>

            <hr className="my-10"/>

            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
        </main>
    )
}