import { createAction } from "@reduxjs/toolkit"

const save_profile = createAction(
    'save_profile',
    (data)=> {
        return { payload: data }
    }
)

const actions = { save_profile }
export default actions