/*'use client'
import LocationDateReserve from "@/components/DateReserve";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, UseDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/bookSlice";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import getUserProfile from "@/libs/getUserProfile"



export default function Reservations () {

    const urlParams = useSearchParams()
    const vid = urlParams.get('id')
    const model = urlParams.get('model')

    const dispatch = useDispatch<AppDispatch>()

    const makeReservation = () => {
        if(cid && model && pickupDate && returnDate) {
            const item: BookingItem = {
                carId: cid,
                carModel: model,
                numOfDays: returnDate.diff(pickupDate, "day"),
                pickupDate: dayjs(pickupDate).format("YYYY/MM/DD"),
                pickupLocation: pickupLocation,
                returnDate: dayjs(returnDate).format("YYYY/MM/DD"),
                returnLocation: returnLocation
            }
            dispatch(addReservation(item))
        }
    }

    const [name, setName] = useState<string|null>()
    const [pickupDate, setPickupDate] = useState<Dayjs|null>()
    const [pickupLocation, setPickupLocation] = useState<string>('BKK')
    const [returnDate, setReturnDate] = useState<Dayjs|null>()
    const [returnLocation, setReturnLocation] = useState<string>('BKK')

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="text-xl font-medium">Car: {model}</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date and Location</div>
                <LocationDateReserve onDateChange={(value: Dayjs) => {setPickupDate(value)}} onLocationChange={(value: string) => {setPickupLocation(value)}}/>
                <div className="text-md text-left text-gray-600">Return Date and Location</div>
                <LocationDateReserve onDateChange={(value: Dayjs) => {setReturnDate(value)}} onLocationChange={(value: string) => {setReturnLocation(value)}}/>
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={makeReservation}>
                Reserve this Car
            </button>



            <div className="w-[100%] flex flex-col items-center space-y-4">
                <div className="text-xl font-medium">New Reservation</div>

                <TextField id="Name-Lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" value='name'/>
                <TextField id="Contact-Number" name="Contact-Number" label="Contact-Number" variant="standard" />

                <div className="w-fit space-y-2">
                    <div className="text-md text-left text-gray-600">Date and Location</div>
                    <LocationDateReserve/>
                </div>

                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={makeReservation}>
                    Book Venue
                </button>
            </div>

        </main>
    );
}*/

/*'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/bookSlice";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import LocationDateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";

export default function Reservations() {
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState<string>('');
    const [contactNumber, setContactNumber] = useState<string>('');
    const [venue, setVenue] = useState<string>('');
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);

    // ฟังก์ชันที่ทำการเพิ่มข้อมูลการจองใน Redux Store
    const makeReservation = () => {
        if (name && contactNumber && venue && bookingDate) {
            const item: BookingItem = {
                nameLastname: name,
                tel: contactNumber,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
            };
            dispatch(addReservation(item));
        }
    };

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>

            <div className="w-fit space-y-5">
                <TextField 
                    id="Name-Lastname" 
                    name="Name-Lastname" 
                    label="Name-Lastname" 
                    variant="standard" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    id="Contact-Number" 
                    name="Contact-Number" 
                    label="Contact-Number" 
                    variant="standard" 
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />

                <div className="w-fit space-y-2">
                    <div className="text-md text-left text-gray-600">Booking Place and Date</div>
                    <LocationDateReserve onDateChange={(value: Dayjs) => {setBookingDate(value)}} onLocationChange={(value: string) => {setVenue(value)}}/>
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    className="mt-4"
                    onClick={makeReservation}
                >
                    Book Venue
                </Button>
            </div>
        </main>
    );
}*/

'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/bookSlice";
import { TextField, Button } from "@mui/material";
import LocationDateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";

export default function Reservations() {
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState<string>('');
    const [contactNumber, setContactNumber] = useState<string>('');
    const [venue, setVenue] = useState<string>('');
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);

    // ฟังก์ชันที่ทำการเพิ่มข้อมูลการจองใน Redux Store
    const makeReservation = () => {
        if (name && contactNumber && venue && bookingDate) {
            const item: BookingItem = {
                nameLastname: name,
                tel: contactNumber,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
            };
            dispatch(addReservation(item));
        }
    };

    return (
        <main className="w-full flex flex-col items-center space-y-6 p-4 bg-gradient-to-t from-blue-100 via-white to-blue-50 min-h-screen">
            <div className="text-2xl font-semibold text-gray-800">New Reservation</div>

            <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-md font-medium text-gray-700">Name and Contact Information</div>
                <TextField
                    id="Name-Lastname"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-4"
                />
                <TextField
                    id="Contact-Number"
                    name="Contact-Number"
                    label="Contact Number"
                    variant="outlined"
                    fullWidth
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="mb-6"
                />

                <div className="text-md font-medium text-gray-700 mb-4">Booking Location and Date</div>
                <LocationDateReserve 
                    onDateChange={(value: Dayjs) => setBookingDate(value)} 
                    onLocationChange={(value: string) => setVenue(value)} 
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4 py-2 text-white font-semibold"
                    onClick={makeReservation}
                >
                    Book Venue
                </Button>
            </div>
        </main>
    );
}



