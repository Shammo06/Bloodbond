import { useEffect } from "react";


const RequestBlood = () => {
    const [request, setRequest] = useState<any[]>([])

    useEffect(() => {
        fetch('/Donors.json')
            .then(res => res.json())
            .then(data => {
                setRequest(data)
            })

    }, [])
    return (
        <div>
            <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">A+ Blood Needed</h2>
                <p>Patient Name: xxxxxx</p>
                <p>Blood Group: xxxxxx</p>
                <p>Donation Time: xxxxxx</p>
                <p>Location: xxxxxx</p>
                <p>Contact: xxxxxx</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Donate Blood</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default RequestBlood;