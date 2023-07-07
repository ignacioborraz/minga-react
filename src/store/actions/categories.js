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

const save_current_category = createAction(
    'save_current_category',
    ({ current_category })=> {
        return {
            payload: {
                current_category
            }
        }
    }
)

const actions = { save_categories,save_current_category }
export default actions