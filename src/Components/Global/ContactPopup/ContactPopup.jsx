import React, { useState } from "react";
import { useDesign } from "../../../context/DesignProvider";
import ChatButton from "../../Shared/Button/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactChat from "./ContactChat";

function ContactPopup() {
  const [emailInput, setEmailInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMsgInput, setUserMsgInput] = useState("");
  const [userMsgs, setUserMsgs] = useState([]);
  const { colors, borderRadius } = useDesign();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserEmail(emailInput);
    setIsChatOpen(true);
    setEmailInput("");
  };

  const closeChat = () => {
    if (isChatOpen) {
      const confirmation = confirm(
        "You're leaving the chat, would you like to proceed?"
      );
      if (confirmation) {
        setIsChatOpen(false);
        setUserMsgs([]);
      }
    }
  };

  const sendUserMsg = () => {
    if (!userMsgInput.trim()) return;

    setUserMsgs((prevMessages) => [...prevMessages, userMsgInput]);
    setUserMsgInput("");
  };

  const baseStyles = {
    height: "382px",
    maxWidth: "539px",
    width: "100%",
    borderTopLeftRadius: "5%",
    backgroundColor: colors.primaryPink,
    position: "absolute",
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "2rem",
    alignItems: "center",
    transition: "height 0.1s ease-in",
  };

  const chatExpandedStyles = {
    height: "1000px",
    borderRadius: "10% 0 0 0",
    paddingLeft: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  };

  return (
    <div
      style={{
        ...baseStyles,
        ...(isChatOpen && chatExpandedStyles),
      }}
    >
      {!isChatOpen ? (
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <label htmlFor="email">მოგვწერე</label>
            <input
              type="email"
              placeholder="your Email"
              name="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              style={{
                padding: "0.5rem",
                border: "none",
                borderRadius: borderRadius.inputRadius,
              }}
            />
          </div>
          <ChatButton variant="chatSubmit" />
        </form>
      ) : (
        <ContactChat
          userMsgs={userMsgs}
          closeChat={closeChat}
          sendUserMsg={sendUserMsg}
          setUserMsgInput={setUserMsgInput}
          userMsgInput={userMsgInput}
        />
      )}
    </div>
  );
}

export default ContactPopup;
