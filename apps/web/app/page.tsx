// "use client";
// import { useState } from "react";
// import { useSocket } from "../context/SocketProvider";
// import classes from "./page.module.css";

// export default function Page() {
//   const { sendMessage, messages } = useSocket();
//   const [message, setMessage] = useState("");
//   return (
//     <div>
//       {/* <div>
//         <h1>All Messages will appear here</h1>
//       </div> */}
//       <div>
//         <input
//           onChange={(e) => setMessage(e.target.value)}
//           className={classes["chat-input"]}
//           placeholder="Messages..."
//         />
//         <button
//           onClick={(e) => sendMessage(message)}
//           className={classes["button"]}
//         >
//           Send
//         </button>
//       </div>
//       <div>
//         {messages.map((e, index) => (
//           <li key={index}>{e}</li>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div className={classes["container"]}>
      {/* Heading */}
      <h1 className={classes["heading"]}>All messages appear here</h1>

      {/* Input Section */}
      <div className={classes["inputContainer"]}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]}
          placeholder="Type a message..."
        />
        <button
          onClick={() => {
            sendMessage(message);
            setMessage(""); // clear after sending
          }}
          className={classes["button"]}
        >
          Send
        </button>
      </div>

      {/* Messages Section */}
      <div className={classes["messages"]}>
        {messages.length === 0 ? (
          <p className={classes["empty"]}>No messages yet...</p>
        ) : (
          messages.map((e, index) => (
            <li key={index} className={classes["messageItem"]}>
              {e}
            </li>
          ))
        )}
      </div>
    </div>
  );
}
