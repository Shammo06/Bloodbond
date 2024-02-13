import axios from "axios";
import {  useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import moment from 'moment';



const CommunityChat = () => {
    const [data,refetch] = useChat();

    const auth = useAuth();
    const { user } = auth;
    const message = useRef<HTMLInputElement>(null)
    const handleSendMessage = () => {
        const chat = message.current?.value;
        const data ={
            date: moment().format(), 
            user: user.displayName,
            message: chat,
        }
        if(chat){
            console.log(data)
            axios.post('https://blood-bound.vercel.app/createCommunityChat',data)
            .then()
            .catch(error=>console.log(error.message))           
            message.current.value = '';
            refetch();
        }
               
      };
    return (
        <div>
            <div className="min-h-screen my-5 ">
            <h1 className="text-3xl font-bold text-center mb-4">Chat With People</h1>

            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4 bg-gray-200 rounded-md">
                <ul>
                {data.map((item) => (
                    <li key={item.time} className="bg-gray-300 p-2 mb-2 rounded-md">
                        {item.user} : {item.message}
                    </li>
                ))}
                </ul>
                </div>

                <div className="flex p-2 bg-white rounded-md">
                <input
                    type="text"
                    ref = {message}
                    placeholder="Type your message..."            
                    className="flex-1 p-2 border rounded-md mr-2"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-[#DC0000] text-white p-2 rounded-md btn-outline"
                >
                    Send
                </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CommunityChat;