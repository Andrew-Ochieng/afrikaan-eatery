import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabase/supabaseConfig";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: window.location.origin
            }
        })

        if (email && password) {
            if(data) {
                toast.success('You successfully created new account')
                navigate('/login')
            }

            if (error) {
                toast.error('New user not created!')
            }
        } else {
            toast.error('Fill in all the inputs!')
        }



        

        
    }

    const imgUrl = "https://img.freepik.com/free-vector/realistic-illustration-roasted-turkey-grilled-chicken-with-spices-vegetables_1441-1789.jpg?w=1380&t=st=1670450632~exp=1670451232~hmac=69975cba4f68f9f6609e991e64b066995e838c70710200fbd6f427399c53fdfe"

    return ( 
        <>
            <ToastContainer 
                position = 'top-center'
                autoClose = {2000}
                hideProgressBar = {true}
                closeOnClick = {true}
                pauseOnHover = {true}
                draggable = {true}
                progress = {undefined}
                theme= 'colored'
            />
            <div className="md:flex justify-center items-center md:my-16 my-12 mx-8">
                <div className="md:w-1/2 md:mr-8">
                    <img className="" src={imgUrl} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleSubmit}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">Sign Up</h1>
                        {/* <div>
                            <label htmlFor="username">Username</label><br />
                            <input
                                type="text"
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div> */}
                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input
                                type="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                value={password}
                                className="form-input"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="my-2 py-2 px-4 rounded-md uppercase font-light bg-green-500 w-full">
                            Sign Up
                        </button>
                    </form>
                    <div className="md:text-base text-sm">
                        <h3>
                            Have an account already? 
                            <Link to="/login" className="text-red-500 font-medium mx-2">
                                Login
                            </Link>
                        </h3>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default SignUp;