import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState: BookState = {bookItems:[]}

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<BookingItem>) => {
            const remainItems = state.bookItems.filter((obj: { nameLastname: string; tel: string; venue: string; bookDate: string; }) => {
                return ((obj.nameLastname !== action.payload.nameLastname) 
                || (obj.tel !== action.payload.tel)
                || (obj.venue !== action.payload.venue) 
                || (obj.bookDate !== action.payload.bookDate))
            })
            state.bookItems = remainItems
        }
    }
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer