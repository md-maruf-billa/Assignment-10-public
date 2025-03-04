import React, { useEffect, useState } from 'react';
import bg from '../../assets/image/formbg.png'
import { Link } from 'react-router-dom';
import Button from '../../Utils/Button';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import groovyWalkAnimation from "../../assets/Animation - 1714310323427.json";
import PageTitle from '../../Utils/PageTitle';
const AllArtAndCraft = () => {
    const [loading, setLoading] = useState(true);
    const [displayData, setDisplayData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://canvas-creations-server.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setAllData(data);
                setLoading(false);
            })
    }, [])



    // ----------filter function hare------------
    const handelFilter = (e) => {
        const filterQuery = e.target.value;
        if (filterQuery == "Customization Yes") {
            const filtered = allData.filter(data => data.customizable == 'Yes');
            setFilteredData(filtered)
        }
        else if (filterQuery == "Customization No") {
            const filtered = allData.filter(data => data.customizable != 'Yes');
            setFilteredData(filtered)
        }
        else if (filterQuery == "Default") {
            setFilteredData(allData);
        }
    }

    // -------------set Display data ----------
    useEffect(() => {
        setDisplayData(allData);
    }, [allData])
    useEffect(() => {
        setDisplayData(filteredData);
    }, [filteredData])

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='min-h-[calc(100vh-320px)] bg-no-repeat bg-cover' >
              {/* ------------------Page title---------- */}
              <PageTitle title={"All Craft"}/>
            <div
                data-aos="zoom-in-up" data-aos-duration="1500"
                className='min-h-[70vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url(https://th.bing.com/th/id/R.e34aaca44ca8d569f778209bd74f3626?rik=VAXeY7z%2fHJ30tQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f6HyzwVS.jpg&ehk=ecdLGSXUlco6Xzkx4M8i3NfxKOk4PqvNNCAKhb389D0%3d&risl=&pid=ImgRaw&r=0)] bg-center flex justify-center items-center'>
                <div className="text-6xl md:text-8xl lg:text-9xl text-[#ff98d9] font-rancho">
                    <Typewriter

                        words={["All Craft", "And", "Items", "View More", "Hit Details"]}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </div>
            </div>
            {
                loading ? <div className='flex justify-center items-center h-screen'>
                    <div className="loader"></div>
                </div> :
                    <div>
                        <div
                            data-aos="zoom-in-up" data-aos-duration="1000"
                            className='container mx-auto flex justify-end mt-10'>
                            <div className='space-y-2'>
                                <h3>Filter By Customization</h3>
                                <select onClick={handelFilter} className="select select-bordered w-full max-w-xs">
                                    <option disabled selected>Select Customization</option>
                                    <option>Default</option>
                                    <option>Customization Yes</option>
                                    <option>Customization No</option>
                                </select>
                            </div>
                        </div>
                        <div className="overflow-x-auto container mx-auto mt-10">
                            {
                                displayData.length == 0 ?
                                    <div className='flex justify-center items-center'>
                                        <Lottie animationData={groovyWalkAnimation} />
                                    </div> :
                                    <table className="table">
                                        {/* head */}
                                        <thead data-aos="fade-up" data-aos-duration="1000">
                                            <tr>

                                                <th>Art & Craft Name</th>
                                                <th className='hidden md:block'>Description</th>
                                                <th>Customization</th>
                                                <th></th>
                                            </tr>
                                        </thead>


                                        <tbody>

                                            {

                                                displayData.map(data =>
                                                    <tr key={data._id} data-aos='zoom-in' data-aos-duration="1000">
                                                        <td>
                                                            <div className="flex items-center gap-3">
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={data.photoURL} />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold">{data.name}</div>
                                                                    <div className="text-sm opacity-50"><span className='font-semibold'>Author :</span> {data.userName}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='hidden md:block'>
                                                            {data.description}
                                                            <br />
                                                            <span className="badge badge-ghost badge-sm">{data.category}</span>

                                                            <span className="badge badge-ghost badge-sm">{data.stock}</span>

                                                            <span className="badge badge-ghost badge-sm">Price: {data.price} $</span>
                                                        </td>
                                                        <td>{data.customizable}</td>
                                                        <th>
                                                            <Link state={data._id} to={`/details/${data._id}`}>
                                                                <Button btnName={"Details"} size={"btn-sm text-xs"} />
                                                            </Link>
                                                        </th>
                                                    </tr>)
                                            }

                                        </tbody>


                                    </table>
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllArtAndCraft;