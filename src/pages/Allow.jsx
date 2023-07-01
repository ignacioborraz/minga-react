import Welcome from "../components/Welcome"

export default function Index() {

    return (
         <main className='flex flex-col md:pt-20 w-full min-h-screen items-center justify-between'>
            <Welcome title={'Bad Auth'} />
        </main>
    )

}