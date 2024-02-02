import { FaFacebookMessenger } from "react-icons/fa";

interface Donor {
    name: string;
    email: string;
    photo: string;
    phone: string;
    district: string;
    bloodGroup: string;
    upazila: string;
    lastTimeDonate: string;
    address: string;
}

interface DonorCardProps {
    donor: Donor;
}

const DonorCard: React.FC<DonorCardProps> = ({ donor }) => {
    const {
        name, 
        phone, 
        bloodGroup,
        photo,
        district,
        upazila, 

    } = donor;

    // const { userName, email, phone, lastTimeDonate,  bloodGroup, photo, district, subDistrict, address } = donor;

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
                        <button className="btn bg-[#EB2C29] text-white"><FaFacebookMessenger /> Chat Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorCard;
