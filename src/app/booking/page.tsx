import LocationDateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function Reservations () {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createAt)

    return(
        <div>

        <div className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>

            <TextField id="Name-Lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" />
            <TextField id="Contact-Number" name="Contact-Number" label="Contact-Number" variant="standard" />

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Date and Location</div>
                <LocationDateReserve/>
            </div>

            <Button name="Book Venue" variant="contained" color="primary">
                Book Venue
            </Button>


        </div>
        <div className="bg-slate-100 m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.name}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createAt.toString()}</td></tr>
            </tbody></table>
        </div>

        </div>
    )
}