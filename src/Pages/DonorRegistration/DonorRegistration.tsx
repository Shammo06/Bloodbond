import { useState } from "react";
import { useForm } from "react-hook-form";

// export interface dis {
//     name: any;
//     code: any;
//   }

const DonorRegistration = () => {

    const [dist, setDist] = useState<any[]>([])
    const [upazilas, setUpazilas] = useState<any[]>([])

    fetch('/public/District.json')
        .then(res => res.json())
        .then(data => setDist(data))

    fetch('/public/Upazila.json')
        .then(res => res.json())
        .then(data => setUpazilas(data))


    const [error, setError] = useState('');


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data: any) => {
        const { name, email, password, phone, upazila, district, conPassword, blood } = data;
        if (password !== conPassword) {
            setError("Password not matched")
        }
        else {
            setError('')
            console.log(name, email, password, phone, upazila, district, conPassword, blood)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-red-400 w-full mx-auto lg:w-3/4 p-5 my-10 rounded-lg">
                <h2 className="text-3xl font-bold text-black text-center">Donor Registration</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Name</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === "required" && (
                            <p role="alert">Name is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Email</span>
                        </label>
                        <input type="email" className="input input-bordered"
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.firstName?.type === "required" && (
                            <p className="text-red-400" role="alert">Email is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Your Phone Number</span>
                        </label>
                        <input type="number" className="input input-bordered"
                            {...register("phone", { required: true })}
                            aria-invalid={errors.phone ? "true" : "false"}
                        />
                        {errors.phone?.type === "required" && (
                            <p role="alert">Phone number is required</p>
                        )}
                    </div>
                    <div data-aos="fade-left" className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Blood Group</span>
                        </label>
                        <select className="input input-bordered"
                            {...register("blood", { required: true })}
                            aria-invalid={errors.blood ? "true" : "false"}>
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
                            <span className="label-text text-black">District</span>
                        </label>
                        <select className="input input-bordered"
                            {...register("district", { required: true })}
                            aria-invalid={errors.district ? "true" : "false"}>
                            <option value=""></option>
                            {
                                dist?.map(dis => <option value={dis?.name}>{dis?.name}</option>)
                            }
                        </select>
                        {errors.district?.type === "required" && (
                            <p role="alert">District is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Upazila</span>
                        </label>
                        <select className="input input-bordered"
                            {...register("upazila", { required: true })}
                            aria-invalid={errors.upazila ? "true" : "false"}>
                            <option value=""></option>
                            {
                                upazilas?.map(upa => <option value={upa?.name}>{upa?.name}</option>)
                            }
                        </select>
                        {errors.upazila?.type === "required" && (
                            <p role="alert">Upazila is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Password</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password?.type === "required" && (
                            <p role="alert">Password is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Confirm Password</span>
                        </label>
                        <input type="text" className="input input-bordered"
                            {...register("conPassword", { required: true })}
                            aria-invalid={errors.conPassword ? "true" : "false"}
                        />
                        {error ? error : ''}
                    </div>
                </div>
                <input className="btn btn-primary w-full mt-4" type="submit" value="REGISTER" />
            </form>
        </div>
    );
};

export default DonorRegistration;

