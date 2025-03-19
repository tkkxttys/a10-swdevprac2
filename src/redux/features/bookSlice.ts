/*import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState: BookState = {bookItems:[]}

export const bookSlice = createSlice ({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems.push(action.payload)
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
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

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState: BookState = {bookItems:[]}

export const bookSlice = createSlice ({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const exists = state.bookItems.some(item => 
                item.nameLastname === action.payload.nameLastname &&
                item.tel === action.payload.tel &&
                item.venue === action.payload.venue &&
                item.bookDate === action.payload.bookDate
            );
            if (!exists) {
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            const index = state.bookItems.findIndex(
                (obj) =>
                    obj.nameLastname === action.payload.nameLastname &&
                    obj.tel === action.payload.tel &&
                    obj.venue === action.payload.venue &&
                    obj.bookDate === action.payload.bookDate
            );
            if (index !== -1) {
                state.bookItems.splice(index, 1);  // ลบ item ที่ตรง
            }
        }        
    }
})

export const {addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer