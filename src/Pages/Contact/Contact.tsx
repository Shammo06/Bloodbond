/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";




const Contact = () => {

    const form = useRef();
    const auth = useAuth();
    if (!auth) {
        return;
    }
    const { user } = auth;

    const sendEmail = (e: any) => {
        e.preventDefault(); 
        

        if (form.current) {
            emailjs.sendForm('service_0lmy5dx', 'template_q1qkcin', form.current, 'wpNh2IsyaGvPczacL')
                .then((result) => {
                    console.log(result.text);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your message has been sent successfully!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "This is an error. Please try again.",
                        showConfirmButton: false,
                        timer: 1500
                      });
                });
        }
        
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="pb-10">
            <h3 className="font-bold bg-[#850000] text-center text-white py-5 text-3xl mb-5">
                Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input name="name" required defaultValue={user?.displayName || ''} type="text" placeholder="👤 Your Name" className="input  border border-gray-400 w-full rounded-2xl bg-base-200 shadow-xl" />
                <input required defaultValue={user?.email || ''} type="email" name="email" placeholder="✉ Your Email" className="input  border border-gray-400 w-full rounded-2xl bg-base-200 shadow-xl" />
            </div>
            <textarea name="message" required className="textarea-lg rounded-2xl border border-gray-400 w-full bg-base-200 my-5 shadow-xl" placeholder="Massage"></textarea>
            <div className="flex justify-center">
                <button className="btn btn-outline bg-[#DC0000] text-white w-40">Send Massage</button>
            </div>
        </form>
    );
};

export default Contact;