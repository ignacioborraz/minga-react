import { configureStore } from "@reduxjs/toolkit"
import category_reducer from './reducers/categories'
import author_reducer from './reducers/authors'
import manga_reducer from './reducers/mangas'

const store = configureStore({
    reducer: {
        categories: category_reducer,
        authors: author_reducer,
        mangas: manga_reducer
    }
})

export default store