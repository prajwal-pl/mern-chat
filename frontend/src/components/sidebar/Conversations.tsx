import React from "react";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="overflow-auto py-2 flex flex-col">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
