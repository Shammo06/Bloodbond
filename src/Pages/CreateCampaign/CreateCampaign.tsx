import axios from "axios";
import { Field, Form, Formik } from "formik";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const initialValue = {
    title: "",
    date: "",
    address: "",
    details: "",
    photo: "",
};
const CreateCampaign: React.FC = () => {
    const axiosPublic = useAxiosPublic();


    const handleSubmit = async (values: typeof initialValue) => {



        const title = values.title;
        const date = values.date;
        const address = values.address;
        const details = values.details;

        const fileInput = document.getElementById("photo") as HTMLInputElement;
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            // console.error("No Photo Selected");
            return;
        }

        const photo = fileInput.files[0];

        const img = new FormData();
        img.append("image", photo);

        const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
        const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

        const imgUploadResponse = await axios.post(image_hosting_api, img);

        const imageUrl = imgUploadResponse.data.data.url;
        // console.log(imageUrl);
        const campaign = {
            title,
            date,
            address,
            details,
            photo: imageUrl
        }
        console.log(campaign);
        axiosPublic.post("/campaigncreate",campaign)
        .then(res => {
            console.log(res.data);
            
        })




    };

    return (
        <div className="bg-white p-5 border rounded-lg">
            <h2 className="text-3xl font-bold text-center py-4">Create New Campaign</h2>

            <Formik initialValues={initialValue} onSubmit={handleSubmit}>
                <Form className="max-w-3xl mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Title</label>
                        <Field type="text" name="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 focus:outline-red-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Campaign Title" required />
                    </div>
                    <div className="flex items-center gap-4 ">
                        <div className="mb-5 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <Field type="date" name="date" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 focus:outline-red-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <Field type="text" name="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 focus:outline-red-500 focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Campaign Address" required />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                        <Field name="details" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-1 focus:outline-red-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" rows={5} placeholder="Campaign Details" required />
                    </div>
                    <div className="mb-5">

                        <label className="block mb-2 text-sm font-medium dark:text-white">Photo</label>
                        <Field type="file" id="photo" name="image" className="file-input  file-input-bordered  w-full max-w-xs" />

                    </div>



                    <button type="submit" className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Create Campign</button>
                </Form>
            </Formik>

        </div>
    );
};

export default CreateCampaign;