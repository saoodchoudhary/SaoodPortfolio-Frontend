import { configureStore } from "@reduxjs/toolkit";
import contactMe from "./contactMe";

const store = configureStore({
    reducer:{
        // add reducers here
        contactMe: contactMe
    }
});


export default store;