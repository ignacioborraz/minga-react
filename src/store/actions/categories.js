import { createAction } from "@reduxjs/toolkit"

const save_categories = createAction(
    'save_categories',
    ({ categories })=> {
        return {
            payload: {
                categories
            }
        }
    }
)

const actions = { save_categories }
export default actions