import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

 export const SaveContactMe = createAsyncThunk( "saveContactMe", async (formData, thunkAPI) => {

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/contact-save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        }
        console.log("thunk", thunkAPI.rejectWithValue(data))
        return thunkAPI.rejectWithValue(data);
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
}
);


const contactMeSlice = createSlice({
    name: "contactMe",
    initialState:{
        contactMe: null,
        loading: false,
        error: null
    },
    reducers:{
        contactMeLoading: (state) => {
            state.loading = true;
        },
        contactMeSuccess: (state, action) => {
            state.contactMe = action.payload;
            state.loading = false;
            state.error = null;
        },
        contactMeFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        removeContactMe: (state) => {
            state.contactMe = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(SaveContactMe.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SaveContactMe.fulfilled, (state, action) => {
            state.contactMe = action.payload;
                state.loading = false;        
                state.error = null;
        });
        builder.addCase(SaveContactMe.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        
    }
});


export const { contactMeLoading, contactMeSuccess, contactMeFail , removeContactMe } = contactMeSlice.actions;
export default contactMeSlice.reducer;