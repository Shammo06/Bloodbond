import { FaFacebookMessenger } from "react-icons/fa";

interface Donor {
    userName: string;
    email: string;
    photo: string;
    phone: string;
    district: string;
    bloodGroup: string;
    subDistrict: string;
    lastTimeDonate: string;
    address: string;
}

interface DonorCardProps {
    donor: Donor;
}

const DonorCard: React.FC<DonorCardProps> = ({ donor }) => {
    const {
        userName, 
        phone, 
        bloodGroup,
        photo,
        district,
        subDistrict, 

    } = donor;

    // const { userName, email, phone, lastTimeDonate,  bloodGroup, photo, district, subDistrict, address } = donor;

    return (
        <div>
            <div className="card bg-[#EB2C2926] shadow-xl text-black">
                <figure><img className="w-32 h-32 rounded-full mt-4" src={photo} alt="Donor" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {userName}</h2>
                    <p>Blood Group: {bloodGroup}</p>
                    <p>Phone: {phone}</p>
                    <p>District: {district}</p>
                    <p>Upazila: {subDistrict}</p>

                    <div className="card-actions justify-end">
                        <button className="btn bg-[#EB2C29] text-white"><FaFacebookMessenger /> Chat Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorCard;
