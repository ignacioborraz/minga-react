import { createReducer } from "@reduxjs/toolkit"
import actions from "../actions/authors"

const { save_profile } = actions

const initial_state = {
    profile: {},
}

const reducer = createReducer(
    initial_state,
    (build)=>build
        .addCase(
            save_profile,
            (state,action) => {
                let new_state = {
                    ...state,
                    profile: action.payload
                }
                return new_state
            }
        )
)

export default reducer