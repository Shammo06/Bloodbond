import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"; 

interface donateBloodProps {
    data: {
        bloodGroup: string,
        patientName: string,
        bloodBag: string,
        time: string,
        location: string
    }
}



const DonateBlood: React.FC<donateBloodProps> = ({ data }) => {

    // const isDonor = useIsDonor();
    // console.log(isDonor)
    const navigate = useNavigate();
    const auth = useAuth();
    if(!auth){
        return null
    }
    const {user} = auth;

    const handleBloodDonate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData (e.currentTarget)

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const donateBag = formData.get("donateBag") as string;
        const donateTime = formData.get("donateTime") as string;

        const donateData = {name, email, phone, donateBag, donateTime}

        console.log(donateData)
        e.currentTarget.reset();

    }

    return (

        <div className="bg-white p-6 rounded-md border border-gray-300 shadow-md"
        >
            <div className="text-center text-xl font-bold text-[#850000] mb-4">
                {data.bloodGroup} BLOOD REQUIRED
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                    <div className="font-bold">Patient Name</div>
                    <div className="text-left pl-2">{data.patientName}</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Blood Group</div>
                    <div className="text-left pl-2">{data.bloodGroup}</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Need No. Of Bags</div>
                    <div className="pl-2">{data.bloodBag} Bag</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Donation Time</div>
                    <div className="pl-2">{data.time}</div>
                </div>

                <div className="flex items-center">
                    <div className="font-bold">Location</div>
                    <div className="text-left pl-2">{data.location}</div>
                </div>
            </div>

            <div className="text-center mt-6">
                
                <button className="py-2 px-6 bg-[#ea062b] text-white rounded-md hover:bg-red-800 transition duration-300" onClick={() => {
                    const modal = document.getElementById('my_modal_3') as HTMLDialogElement || null;
                    if (modal) {
                        if(!user){
                            navigate('/login')
                        } 
                        modal.showModal()
                    }
                }}>Donate Blood</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">
                            Donate Blood
                        </h3>
                        <form onSubmit={handleBloodDonate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    name="name"
                                    required 
                                    defaultValue={user?.displayName || ""}
                                    type="text"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    defaultValue={user?.email || ""}
                                    name="email"
                                    required
                                    readOnly
                                    type="email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    required
                                    name="phone"
                                    type="text"
                                    placeholder="+880 18XXXXXXXX"
                                    className="input input-bordered w-full"
                                    defaultValue={"+880"}
                                />{" "}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number of Donate Bags</span>
                                </label>
                                <input
                                    required
                                    name="donateBag"
                                    type="number"
                                    className="input input-bordered w-full" 
                                    min={1}
                                    defaultValue={1}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donation Time</span>
                                </label>
                                <input
                                    required
                                    name="donateTime"
                                    type="time"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <button className="w-full mt-5 btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full">
                                Donate
                            </button>
                        </form>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>


        </div>
    );
};

export default DonateBlood;