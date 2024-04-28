import React, { useEffect, useState } from 'react';
import bg from '../../assets/image/formbg.png'
import { Link } from 'react-router-dom';
import Button from '../../Utils/Button';

const AllArtAndCraft = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/')
            .then(res => res.json())
            .then(data => {
                setAllData(data);
            })
    }, [])
    return (
        <div className='mt-[80px] min-h-[calc(100vh-320px)] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Art & Craft Name</th>
                            <th>Description / Price</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allData.map(data => <tr key={data._id}>
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
                                <td>
                                    {data.description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{data.category}</span>
                                    
                                    <span className="badge badge-ghost badge-sm">{data.stock}</span>
                                </td>
                                <td>{data.price} $</td>
                                <th>
                                    <Link state={data._id} to={`/details/${data._id}`}>
                                        <Button btnName={"Details"} />
                                    </Link>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllArtAndCraft;