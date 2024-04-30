import React, { useContext } from 'react';
import { userContext } from '../../Utils/DataProvider/DataProvider';
import bg from '../../assets/image/formbg.png'
import { updateProfile } from 'firebase/auth';
import auth from '../../Utils/FireBase/firebase.config';
import Swal from 'sweetalert2';
import PageTitle from '../../Utils/PageTitle';

const UserProfile = () => {
    const { currentUser, setLoading } = useContext(userContext)
    const handelEditProfile = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, {
            displayName: e.target.name.value ? e.target.name.value : e.target.name.placeholder,
            photoURL: e.target.photoURL.value ? e.target.photoURL.value : e.target.photoURL.placeholder
        })
            .then(() => {
                Swal.fire({
                    title: "Congratulation",
                    text: "Your Profile is Updated.",
                    icon: "success"
                });
                setLoading(true)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Craft item added failed.",
                    footer: ''
                });
            })

    }
    return (

        <div style={{ backgroundImage: `url(${bg})` }}>
            {/* ------------------Page title---------- */}
            <PageTitle title={"Update Profile"} />
            <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className='min-h-[calc(100vh-325px)] mt-[68px] mb-10 md:mb-0 mx-auto container flex  justify-center items-center px-2 md:px-0'>
                <div className=' px-10 md:px-14 py-10 rounded-lg border-2 border-[#FF76CE]' >
                    <form onSubmit={handelEditProfile}>
                        <h3 className='font-rancho text-4xl md:text-6xl text-[#FF76CE]'>Update Your Profile</h3>
                        <div className='flex justify-center items-center mt-8'>
                            <img className='size-[150px] rounded-full' src={currentUser.photoURL} alt="" />
                        </div>
                        <div className='flex gap-1 flex-col mt-8'>
                            <p className='font-semibold text-[#FF76CE]'>Name</p>
                            <input name='name' type="text" className='bg-transparent outline-none border-b-2' placeholder={currentUser?.displayName} />
                        </div>
                        <div className='flex gap-1 flex-col mt-6'>
                            <span className='flex items-center gap-2'>
                                <p className='font-semibold text-[#FF76CE]'>Email</p>
                                <small className='text-red-600'>(Not changeable)</small>
                            </span>
                            <input name='email' type="text" className='bg-transparent outline-none border-b-2' readOnly value={currentUser?.email || 'Email Not Public'} />
                        </div>
                        <div className='flex gap-1 flex-col mt-6'>
                            <p className='font-semibold text-[#FF76CE]'>PhotoURL</p>
                            <input name='photoURL' type="text" className='bg-transparent outline-none border-b-2' placeholder={currentUser?.photoURL} />
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <button type='submit' className='btn bg-[#FF76CE] text-white'>Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    );
};

export default UserProfile;