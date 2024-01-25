import { FaFacebookMessenger } from "react-icons/fa";


const DonorCard = ({ donor }) => {

    const {name, photo, phone, district, bloodGroup, upazila} = donor;
    return (
        <div>
            <div className="card bg-[#EB2C2926] shadow-xl text-black">
                <figure><img className="w-32 h-32 rounded-full mt-4" src={photo} alt="Donor" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Blood Group: {bloodGroup}</p>
                    <p>Phone: {phone}</p>
                    <p>District: {district}</p>
                    <p>Upazila: {upazila}</p>

                    <div className="card-actions justify-end">
                        <button className="btn bg-[#EB2C29] text-white"><FaFacebookMessenger></FaFacebookMessenger> Chat Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorCard;