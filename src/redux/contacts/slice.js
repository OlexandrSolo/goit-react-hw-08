import { createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const INITIAL_STATE = {
    contacts: {
        items: [],
        loading: false,
        error: null
    }
};

const handlePending = state => { state.loading = true };
const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload
}

export const sliceContacts = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload)
            })
            .addCase(logout.fulfilled, () => {
                return INITIAL_STATE
            })
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index, 1)
            })
    },
})

export default sliceContacts.reducer
