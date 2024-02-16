import { FaFacebookMessenger } from "react-icons/fa";

interface data {
    name: string;
    email: string;
    photo: string;    
    donor: {
        phone: string;
        district: string;
        bloodGroup: string;
        upazila: string;
        address: string;
    };
}




interface DonorCardProps {
    data: data;
}

const DonorCard: React.FC<DonorCardProps> = ({ data }) => {
    const {
        name,
        donor,
        photo,
        email   

    } = data;
 
    return (
        <div>
            <div className="card bg-[#EB2C2926] shadow-xl text-black">
                <figure><img className="w-32 h-32 rounded-full mt-4" src={photo} alt="Donor" /></figure>
                <div className="px-4 py-4">
                    <h2 className="text-lg font-semibold">Name: {name}</h2>
                    <p>Blood Group: {donor.bloodGroup}</p>
                    <p>Phone: {donor.phone}</p>
                    <p>Email: {email}</p>
                    <p>District: {donor.district}</p>
                    <p>Upazila: {donor.upazila}</p>

                    <div className="card-actions justify-end">
                        <button className="btn bg-[#EB2C29] text-white"><FaFacebookMessenger /> Chat Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorCard;
