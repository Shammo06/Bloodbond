/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal from "sweetalert2";
import group from "../../assets/cm1.jpg";
import useAuth from "../../hooks/useAuth";


const CampaignDetails: React.FC = () => {


    const auth = useAuth();

    if (!auth) {
        return null;
    }

    const { user } = auth;



    const handleResister = (e: any) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        console.log(name, email, phone, address)

        const modal = document.getElementById('my_modal_2')

        if (modal) {
            modal.style.display = "none";
            // modal.close()
        }
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Well done on becoming a volunteer!",
            showConfirmButton: false,
            timer: 1500
        });

    }
    return (
        <div>
            <div className="bg-base-100 shadow-lg">
                <figure className="relative">
                    <img className="w-3/4 max-h-[450px] mx-auto " src={group} alt="campaign" />

                </figure>
                <div className="md:mt-5 mb-10 pb-8">
                    <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
                        <div className="mt-3 md:mt-0 px-2 md:px-6 xl:px-8">
                            <h2 className="text-2xl font-bold text-[#DC0000]">
                                LifeSaver Blood Donation Drive
                            </h2>
                            <address>Dhanmondi, Dhaka</address>
                        </div>
                        <div className="bg-[#DC0000] text-white px-5 md:py-2 xl:mr-6 md:mr-4">
                            <h4 className="text-lg font-bold">12-Feb-2024</h4>
                            <h5></h5>
                        </div>
                    </div>
                    <p className="px-2 md:px-6 xl:px-8 mt-6 text-lg font-medium mb-5">
                        Blood group collection involves determining an individual's blood
                        type to facilitate safe blood transfusions and medical procedures.

                        LifeSaver Blood Donation Drive is a community-driven initiative aimed at raising awareness about the importance of blood donation and encouraging individuals to participate in this life-saving act. Organized by local organizations, hospitals, or non-profit groups, the drive typically involves setting up donation centers in accessible locations such as schools, community centers, or workplaces.
                        <br /><br />
                        The primary goal of the LifeSaver Blood Donation Drive is to address the constant need for blood in medical emergencies, surgeries, and treatments for various illnesses. By mobilizing volunteers and donors, the drive strives to replenish blood supplies and ensure that hospitals have an adequate stock to meet the needs of patients.

                        The drive is often promoted through various channels, including social media, local newspapers, and community outreach events. Educational materials are provided to inform potential donors about the donation process, eligibility criteria, and the impact of their contributions on saving lives.
                    </p>
                    <div className="px-2 md:px-6 xl:px-8 flex flex-col md:flex-row justify-between gap-5 max-w-6xl mx-auto">
                        <button className="md:w-1/2 btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full" onClick={() => {
                            const modal = document.getElementById(
                                'my_modal_2'
                            ) as HTMLDialogElement || null
                            if (modal) {
                                modal.showModal()
                            }
                        }}>Register as Volunteer </button>
                        <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center mb-5">Volunteer Registration</h3>
                                <form onSubmit={handleResister}>
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input name="name" required defaultValue={user?.displayName || ''} type="text" className="input input-bordered w-full" />
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input defaultValue={user?.email || ''} name="email" required type="email" className="input input-bordered w-full" />
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input required name="phone" type="number" placeholder="+880 18XXXXXXXX" className="input input-bordered w-full" />
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input required name="address" type="text" className="input input-bordered w-full" />
                                    <button className="w-full mt-5 btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full">Register</button>
                                </form>
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>

                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <button className="md:w-1/2 btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full">Donate for this Camping!</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;