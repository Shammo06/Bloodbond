/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import DonorCard from "../../Component/DonorCard/DonorCard";
// import axios from "axios";


const DonorSearch = () => {

    const [districts, setDistrict] = useState<any[]>([])
    const [totalDonors, setTotalDonors] = useState<any[]>([])
    const [donors, setDonors] = useState<any[]>([])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target
        const bloodGroup = form.blGroup.value;
        const district = form.dist.value;
        // const donationDate = form.date.value;
        const donorType = form.type.value;
        
        const filterDonor = totalDonors.filter(donor => {
            if(district == 'all' ){
                return donor.district !== district
            }
            return donor.district === district
        })
        
        const filterBlGroup = filterDonor.filter(donor => donor.bloodGroup === bloodGroup)

        const filterIsEligible =  filterBlGroup.filter(donor => {
            if(donorType === 'all'){
                return donor.isDonatable !== 'all'
            }
            return donor.isDonatable === true;
        })
        console.log(filterIsEligible)
        setDonors(filterIsEligible)

    }

    useEffect(() => {
        fetch('/District.json')
            .then(res => res.json())
            .then(data => setDistrict(data.donors))
            .catch(error => console.error('Error fetching District data:', error));

        // axios.get('https://blood-bound.vercel.app/getdonars')
        //     .then(res => {
        //         console.log(res.data.donors)
        //         setTotalDonors(res.data.donors)
        //         setDonors(res.data.donors)
                
        //     })
        //     .catch((error) => {
        //         console.error(error)
                
        //     })

        fetch('/Donors.json')
        .then(res => res.json())
        .then((data) => { 
            setTotalDonors(data)
            setDonors(data)
        })
    }, [])


    return (
        <div className="mx-auto container">
            <h1 className="text-3xl md:text-4xl font-bold text-center my-5 bg-[#EB2C29] text-white py-3">Search Donor</h1>
            <form className=' w-full' onSubmit={handleSubmit}>
                <div className='grid gird-cols-1 md:grid-cols-4 gap-3 px-5'>
                    <div>
                        <label className="label" htmlFor='blGroup'>
                            <span className="label-text text-black">Blood Group</span>
                        </label>
                        <select required className="text-lg text-black select select-bordered w-full" name="blGroup">
                            <option value=""></option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    <div>
                        <label className="label" htmlFor='dist'>
                            <span className="label-text text-black">District</span>
                        </label>
                        <select required className="text-lg text-black select select-bordered w-full" name="dist">
                            <option value="all">All</option>
                            {
                                districts?.map(dis => <option key={dis?.id} value={dis?.name}>{dis?.name}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        <label className="label" htmlFor='date'>
                            <span className="label-text text-black">Donation Date</span>
                        </label>
                        <input className="text-lg text-black input input-bordered w-full" type="date" name="date" />
                    </div>
                    <div>
                        <label className="label" htmlFor='type'>
                            <span className="label-text text-black">Donor Type</span>
                        </label>
                        <select required className="text-lg text-black select select-bordered w-full" name="type">
                            <option value="all">All</option>
                            <option value="eligible">Eligible</option>

                        </select>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#EB2C29] text-white btn w-40 my-5" type="submit"><IoSearchSharp className="text-lg"></IoSearchSharp> Search
                    </button>
                </div>
            </form>


            <div className="my-10 px-5">
                {
                    donors.length > 0 ? <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4 bg-[#EB2C2926] text-black p-4">Total donors found: {donors.length}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                            {
                                donors.map(donor => <DonorCard key={donor.id} donor={donor}></DonorCard>)
                            }
                        </div>
                    </div> : <div>
                    <img className="w-72 mx-auto" src="https://i.ibb.co/f89c3vr/not-found-2.jpg" alt="" />
                    <h2 className="text-center text-2xl font-bold">Sorry No Donor Found!!!</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default DonorSearch;