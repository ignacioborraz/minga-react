import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/categories"

const { save_categories } = actions

const initial_state = {
    categories: [],
    current_category: 0
}

const reducer = createReducer(
    initial_state,
    (build)=>build
        .addCase(
            save_categories,
            (state,action) => {
                let new_state = {
                    ...state,
                    categories: action.payload.categories
                }
                return new_state
            }
        )
)

export default reducer