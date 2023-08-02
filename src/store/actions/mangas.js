import { createAction } from "@reduxjs/toolkit"

const save_mangas_me = createAction(
    'save_mangas_me',
    (data)=> {
        console.log(data);
        return { payload: {
            logo: data.logo,
            all: data.all,
            news: data.news,
            olds: data.olds
        } }
    }
)

const actions = { save_mangas_me }
export default actions