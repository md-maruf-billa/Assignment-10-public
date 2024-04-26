import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa6';
import { VscEye } from "react-icons/vsc";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import formbg from '../../assets/image/formbg.png'


const Login = () => {
    const [eye, setEye] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const navigateRoute = () => { navigate(location.state ? location.state : "/") };
   
    const {
        register,
        handleSubmit
    } = useForm()
    const handelLogin = (data) => {
        logInUserWithEmailAndPassword(data.email, data.password)
            .then(result => {
                document.getElementById('my_modal_1').showModal();
                const showModal = setTimeout(navigateRoute, 2000);
            })
            .catch(error => {

                // toast.warn("Email or Password Incorrect!")
            })
    }
    // ----------------Handel Password Showing---------
    const handelEye=()=>{
        setEye(!eye);
    }
    // --------Handel google login------
 

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className='min-h-[calc(100vh-345px)] mt-[68px] mb-5 flex justify-center items-center container mx-auto text-black px-2 md:px-0'>

            <form onSubmit={handleSubmit(handelLogin)} className='px-10 md:px-14 py-10 rounded-lg border-2 border-[#FF76CE]' style={{backgroundImage:`url(${formbg})`}}>
                <h3 className='text-center text-5xl mb-10 text-[#FF76CE] font-rancho'>Login Now</h3>

                <div className='flex flex-col md:w-[400px] gap-12'>
                    <input {...register("email")} className='dark:text-white border-b-2 outline-none bg-transparent' required type="email" placeholder='Username or Email' />

                    <div className='relative'>
                        <input {...register("password")} className='dark:text-white border-b-2 outline-none bg-transparent w-full' required type={`${eye?"password":"text"}`} placeholder='Password' />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            {
                                eye ? <VscEye onClick={handelEye} className='text-2xl text-[#5a5a5a] cursor-pointer'></VscEye> :
                                    <FaEyeSlash onClick={handelEye} className='text-xl text-[#5a5a5a] cursor-pointer'></FaEyeSlash>
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-6'>
                    <div className='flex items-center gap-2'>
                        <input className='cursor-pointer' type="checkbox" name="" />
                        <p className='text-xs md:text-base dark:text-white'>Remember Me</p>
                    </div>
                    <div>
                        <Link className='text-xs md:text-base text-[#FF76CE]'>Forget Password?</Link>
                    </div>
                </div>
                <button type='submit' className='btn w-full bg-[#FF76CE] text-white font-semibold border-none outline-none mt-12'>Login</button>
                <p className='text-center mt-4 text-xs md:text-base dark:text-white'>Don’t have an account? <Link className='text-[#FF76CE]' to={"/registration"}>Create an account</Link></p>



                <div className='flex items-center gap-2 mt-5'>
                    <div className='border-2 w-1/2 h-[1px]'></div>
                    <p>OR</p>
                    <div className='border-2 w-1/2 h-[1px]'></div>
                </div>
                <div className='flex gap-5 justify-center items-center mt-5'>
                    <FcGoogle onClick={() => handelSocialLogin('google')} className='text-4xl cursor-pointer'></FcGoogle>
                    <FaFacebook onClick={() => handelSocialLogin('faceBook')} className='text-4xl cursor-pointer text-blue-600'></FaFacebook>
                    <FaGithub onClick={() => handelSocialLogin('gitHub')} className='text-4xl cursor-pointer'></FaGithub>
                    <FaTwitter onClick={() => handelSocialLogin('twitter')} className='text-4xl cursor-pointer text-blue-400'></FaTwitter>
                </div>
            </form>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex justify-center items-center flex-col gap-5">
                    <div className=''>
                        <img src="data:image/png;base64,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"></img>
                    </div>
                    <h2 className='text-3xl text-center font-semibold text-blue-600'>Yeah!!
                        <br />
                        You are Successfully Login</h2>
                </div>
            </dialog>
        </div>
    );
};

export default Login;