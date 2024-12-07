const Login =({close}) => {
    return (
        <div className="flex items-start text-white bg-[#160430] m-auto rounded-2xl w-4/5 h-5/6">
            <div className="h-full w-[60%] overflow-hidden rounded-2xl">
                <img 
                    src={"/Icons/mainIcon/Login/bg.png"} 
                    alt="Background"
                    className="w-full"
                />
            </div>

            <div className="flex flex-col items-start justify-center w-[40%] h-full p-14">
                <h2 className="font-bold text-5xl uppercase">Sign in</h2>
                <p className="font-bold text-[9px] mt-4 mb-2">Sign in with email address</p>
                <form action="" className="w-full">
                    <div className="w-full relative">
                        <input 
                            type="email" 
                            name=""
                            id=""
                            className="w-full h-[42px] opacity-80 bg-[#261046] text-[#A4A4A4] pl-9 text-[12px] outline-none border-none rounded-md"
                            placeholder="Yourname.surname@gmail.com"
                        />
                        <img 
                            src={"/Icons/mainIcon/Login/message.png"} 
                            alt="Background"
                            className="absolute w-[15px] top-1/3 mt-[2px] ml-4"
                        />
                    </div>

                    <a
                        href="."
                        onClick={close}
                        className="w-full h-[42px] flex items-center justify-center rounded-md mt-[22px] bg-gradient-to-r from-[#501794] to-[#3E70A1] "
                    >
                        Sign up
                    </a>

                </form>

                <div className="w-full border my-5 border-[#727272]"></div>

                <p className="text-[9px] space-x-1 mb-2 text-[#B6B6B6]">Or continue with</p>

                <div className="flex justify-between w-full mb-2">
                    <div className="py-1 px-8 rounded-md items-center gap-1 text-[12px] flex bg-[#3B2063]">
                        <img 
                            src={"/Icons/mainIcon/Login/facebook.png"} 
                            alt="Google" 
                            className="w-3"
                        />
                        <span>Google</span>
                    </div>

                    <div className="py-1 px-8 rounded-md items-center gap-1 text-[12px] flex bg-[#3B2063]">
                        <img 
                            src={"/Icons/mainIcon/Login/google.png"} 
                            alt="Facebook" 
                            className="w-4"
                        />
                        <span>Facebook</span>
                    </div>
                </div>

                <p className="text-[9px] space-x-1 mb-4 text-[#B6B6B6]">By registering you with our <a href="/" className="text-[#9D5CE9]">Terms and Condition</a></p>
            </div>
        </div>
    )
}

export default Login