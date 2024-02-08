import { useState, useEffect } from "react";
import io from "socket.io-client";

interface Message {
  _id: string;
  text: string;
  timestamp: string;
}

const socket = io("http://localhost:5000");

const Chat = () => {
  const [state, setState] = useState({
    messages: [] as Message[],
    messageInput: "",
  });

  useEffect(() => {
    const handleGetChatHistory = (chatHistory: Message[]) => {
      setState((prevState) => ({
        ...prevState,
        messages: chatHistory.reverse(),
      }));
    };

    const handleChatMessage = (msg: Message) => {
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, msg],
      }));
    };

    socket.emit("get chat history");
    socket.on("chat history", handleGetChatHistory);
    socket.on("chat message", handleChatMessage);

    return () => {
      socket.off("chat history", handleGetChatHistory);
      socket.off("chat message", handleChatMessage);
    };
  }, []);

  const handleSendMessage = () => {
    if (state.messageInput.trim() !== "") {
      socket.emit("chat message", state.messageInput);
      setState((prevState) => ({ ...prevState, messageInput: "" }));
    }
  };

  return (
    <div className="min-h-screen my-5 ">
      <h1 className="text-3xl font-bold text-center mb-4">Chat With Others</h1>

      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 bg-gray-200 rounded-md">
          <ul>
            {state.messages.map((msg) => (
              <li key={msg._id} className="bg-gray-300 p-2 mb-2 rounded-md">
                {msg.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex p-2 bg-white rounded-md">
          <input
            type="text"
            placeholder="Type your message..."
            value={state.messageInput}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                messageInput: e.target.value,
              }))
            }
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
  );
};

export default Chat;
