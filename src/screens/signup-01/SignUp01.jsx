import Input from "./components/Input"
import background from "./images/signup01.png";
const SignUp01 = () => {
    return (
        <div className="max-w-md mx-auto lg:max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen ">
                <div style={{ backgroundImage: `url(${background})` }} className="hidden relative lg:flex flex-col items-center justify-center bg-center bg-cover lg:max-w-3xl" >
                    <div className="bg-black absolute inset-0 z-10 bg-opacity-30"></div>

                    <div className="z-20">
                        <h1 className="font-mon text-4xl font-bold text-white capitalize ">explore your creativity</h1>
                        <p className="font-mon font-medium text-sm text-white text-center mt-2">Over 1000 courses taught by real creatives</p>
                    </div>
                </div>

                <div className="lg:px-8 lg:flex lg:flex-col lg:justify-center lg:max-w-lg lg:mx-auto">
                    <div className="flex justify-between items-center mt-8 lg:justify-center lg:flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h2 className="text-2xl font-mon font-bold">Sign Up</h2>
                        <div className="space-x-1 mt-2 hidden lg:flex">
                            <p className="text-sm font-mon tracking-wide">Already have an account?</p>
                            <h2 className="text-sm font-mon font-bold text-blue-900">Log In</h2>
                        </div>
                        <h2 className="font-mon font-bold uppercase text-xs text-blue-900 lg:hidden">log in</h2>
                    </div>

                    <div className="mt-8 space-y-4">
                        <Input />
                        <Input label="Email" />
                        <Input label="Password" isPassword type="password" />

                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="" className="h-4 w-4 " id="" />
                            <p className="font-mon text-xs capitalize font-medium">sign up for email updates</p>
                        </div>
                    </div>
                    <button className="bg-blue-900 mt-8 text-white w-full p-4 font-mon text-xs uppercase font-bold rounded-lg transition-colors duration-300 hover:bg-blue-800">sign up</button>
                    <p className="font-mon font-normal text-center text-xs px-20 tracking-wider mt-4 leading-4">By continuing, you agree to accept our
                        Privacy Policy & Terms of Service.</p>
                </div>

            </div>



        </div>
    )
}

export default SignUp01
