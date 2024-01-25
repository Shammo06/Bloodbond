/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface District {
    id: string;
    division_id: string;
    name: string;
    bn_name: string;
    lat: string;
    lon: string;
    url: string;
}

interface Upazila {
    id: string;
    district_id: string;
    name: string;
    bn_name: string;
    url: string;
}
interface FinalUpazila {
    id: string;
    district_id: string;
    name: string;
    bn_name: string;
    url: string;
}

const DonorRegistration = () => {

    const [dist, setDist] = useState<District[]>([]);
    const [totalUpa, setTotalUpa] = useState<Upazila[]>([]);
    const [upazilas, setUpazilas] = useState<FinalUpazila[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/District.json')
        .then(res => res.json())
        .then(data => setDist(data))
        .catch(error => console.error('Error fetching District data:', error));

    },[])
    
    useEffect(() =>{
        fetch('/Upazila.json')
        .then(res => res.json())
        .then(data => setTotalUpa(data))
        .catch(error => console.error('Error fetching Upazila data:', error));

    },[])


    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    // const hosting_key = import.meta.env.VITE_IMG_KEY 
    const hosting_api = `https://api.imgbb.com/1/upload?key=facfae059fe84bd1276342cabb1b01ed`

    const onSubmit = (data: any) => {
        const { name, photo, email, password, phone, upazila, district, conPassword, blood } = data;
        if (password !== conPassword) {
            setError("* Password not matched")
        }
        else {
            setError('')
            const imageFile = { image: photo[0] }
            axios.post(hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => {
                    const imgUrl = res.data.data.image.url

                    console.log(name, imgUrl, email, password, phone, upazila, district, conPassword, blood)

                    // TODO: set backend here.......................



                })
                .catch(error => console.error(error))
        }
    }

    const handleDistrict = (e: any) => {
        const disName = e.target.value;
        const disId: any = dist.find(dis => dis.name === disName)
        const getUpa = totalUpa.filter(upa => upa.district_id === disId.id)
        setUpazilas(getUpa)


    }

    return (
        <div className="px-1">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-red-400 w-full mx-auto lg:w-3/4 p-5 my-10 rounded-lg">
                <h2 className="text-3xl font-bold text-black text-center">Donor Registration</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Name</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("name", { required: true })}

                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Name is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Profile photo</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full"
                            {...register("photo", { required: true })}

                        />
                        {errors.photo?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Photo is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Email</span>
                        </label>
                        <input type="email" className="input input-bordered"
                            {...register("email", { required: true })}
                        />
                        {errors.firstName?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Email is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Phone Number</span>
                        </label>
                        <input placeholder="+880 1XXXXXXXXX" type="number" className="input input-bordered"
                            {...register("phone", { required: true })}

                        />
                        {errors.phone?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Phone number is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Blood Group</span>
                        </label>
                        <select className="select select-bordered  text-lg text-black "
                            {...register("blood", { required: true })}
                        >
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
                        {errors.blood?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Blood Group is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your District</span>
                        </label>
                        <select className="select select-bordered text-lg text-black "
                            {...register("district", { required: true })}
                            onChange={handleDistrict}
                        >
                            <option value=""></option>
                            {
                                dist?.map(dis => <option key={dis?.id} value={dis?.name}>{dis?.name}</option>)
                            }
                        </select>
                        {errors.district?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* District is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Upazila</span>
                        </label>
                        <select className="select select-bordered text-lg text-black "
                            {...register("upazila", { required: true })}
                        >
                            <option value=""></option>
                            {
                                upazilas?.map(upa => <option key={upa?.id} value={upa?.name}>{upa?.name}</option>)
                            }
                        </select>
                        {errors.upazila?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Upazila is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Address</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("address", { required: true })}

                        />
                        {errors.address?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Address is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,15}$/ })}

                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600 font-bold text-center mt-1" role="alert">* Password is required</p>
                        )}
                        {errors.password?.type === 'pattern' && (<ul className="text-red-600 list-disc text-sm font-semibold mt-1 ml-4">
                            <li>Ensure the length is minimum 6 characters.</li>
                            <li>At least one upper case letter.</li>
                            <li>At least one digit.</li>
                            <li>At least one special character.</li>
                        </ul>)}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Confirm Password</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("conPassword", { required: true })}

                        />
                        {error ? <p className="text-red-600 font-bold text-center mt-1">{error}</p> : ''}
                    </div>
                </div>
                <input className="btn btn-primary w-full mt-4" type="submit" value="REGISTER" />
            </form>
        </div>
    );
};

export default DonorRegistration;

