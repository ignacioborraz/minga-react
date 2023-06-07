export default function SignIn({ changeView,setChangeView }) {
    return (
        <main className="flex pt-20 items-center justify-center bg-white w-full h-screen">
            <img className="hidden absolute top-0 left-0 md:block h-screen w-[50%] object-cover" src="/img/signin.png" alt="signin" />
            <div className="md:absolute md:top-0 md:right-0 flex flex-col justify-center items-center h-screen w-[50%]">
                <p className="font-semibold text-[32px] text-center">Welcome <span className="text-[#F472B6]">back</span>!</p>
                <p className="font-semibold text-[12px] mb-[20px] text-center p-2">Discover manga and manwha, track your progress, have fun, read manga.</p>
                <form className="flex flex-col">
                    <input className="w-[300px] md:w-[340px] lg:w-[400px] xl:w-[500px] h-[60px] p-2 text-[12px] rounded-lg border-2 mt-[25px] border-[#1F1F1F]" type="email" name="" id="" placeholder="Email" />
                    <input className="w-[300px] md:w-[340px] lg:w-[400px] xl:w-[500px] h-[60px] p-2 text-[12px] rounded-lg border-2 mt-[25px] border-[#1F1F1F]" type="password" name="" id="" placeholder="Password" />
                    <input className="w-[300px] md:w-[340px] lg:w-[400px] xl:w-[500px] h-[60px] p-2 my-[25px] text-xl text-white rounded-lg bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] p-[10px]" type="button" value="Sign In" />
                </form>
                <p className="font-semibold text-[12px] text-center">You don't have an account yet? <span className="text-[#F472B6]">Sign up</span>!</p>
                <p className="font-semibold text-[12px] text-center">Go back to <span onClick={()=>setChangeView(!changeView)} className="text-[#F472B6]">Home Page</span>!</p>
            </div>
        </main>
    )
}
