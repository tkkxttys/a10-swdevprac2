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
            const remainItems = state.bookItems.filter(obj => {
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

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const index = state.bookItems.findIndex(
                (item) =>
                    item.nameLastname === action.payload.nameLastname &&
                    item.tel === action.payload.tel &&
                    item.venue === action.payload.venue &&
                    item.bookDate === action.payload.bookDate
            );
            if (index !== -1) {
                // ถ้ามีการจองในสถานที่เดียวกันและวันเดียวกัน ให้แทนที่ข้อมูลเดิม
                state.bookItems[index] = action.payload;
            } else {
                // ถ้าไม่มีการจองเดิม ให้เพิ่มการจองใหม่
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            // ลบการจองที่ตรงกับ nameLastname, tel, venue, และ bookDate
            state.bookItems = state.bookItems.filter(
                (item) =>
                    item.nameLastname !== action.payload.nameLastname ||
                    item.tel !== action.payload.tel ||
                    item.venue !== action.payload.venue ||
                    item.bookDate !== action.payload.bookDate
            );
        }
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
