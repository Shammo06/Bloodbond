import { Link } from "react-router-dom";
import img from "../../assets/404 page.jpg"

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center my-20 md:my-0 mb-10">
            <div className="relative">
                <img className="rounded-xl" src={img} alt="" />
                <Link to='/'><button className="btn bg-[#DC0000] text-white w-full  absolute  md:rounded-xl rounded-none md:-mt-2 btn-sm md:btn-md">Go Home</button></Link> 
            </div>
        </div>
        // <div className="flex justify-center items-center flex-col"> 
        //     <img src="https://i.ibb.co/XSCCdYh/404-page.jpg" alt="" />
        //     <div className="text-center">
        //     <h2>Oops!</h2>
        //     <p className="Uppercase">Page not Found</p>
        //     </div>
        // </div>
    );
};

export default ErrorPage;