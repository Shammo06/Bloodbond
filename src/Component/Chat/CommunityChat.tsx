import { useRef } from "react";


const CommunityChat = () => {
    const message = useRef<HTMLInputElement>(null)
    const handleSendMessage = () => {
        const chat = message.current?.value;
        console.log(chat)        
      };
    return (
        <div>
            <div className="min-h-screen my-5 ">
            <h1 className="text-3xl font-bold text-center mb-4">Chat With People</h1>

            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4 bg-gray-200 rounded-md">
                <ul>
                
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