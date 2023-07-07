import { configureStore } from "@reduxjs/toolkit"
import category_reducer from './reducers/categories'

const store = configureStore({
    reducer: {
        categories: category_reducer
    }
})

export default store