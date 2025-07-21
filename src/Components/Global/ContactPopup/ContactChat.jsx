import React, { useState } from "react";
import ChatButton from "../../Shared/Button/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDesign } from "../../../context/DesignProvider";

const CloseButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "transparent",
}));

function ContactChat({
  userMsgs,
  closeChat,
  sendUserMsg,
  setUserMsgInput,
  userMsgInput,
}) {
  const { colors, borderRadius } = useDesign();

  return (
    <>
      <div
        style={{
          width: "90%",
          paddingLeft: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>ჩვენი წარმომადგენელი დაგიკავშირდება მალე</h4>
        <CloseButton disableRipple disableFocusRipple onClick={closeChat}>
          <CancelIcon />
        </CloseButton>
      </div>
      <div
        style={{
          width: "80%",
          height: "70%",
          backgroundColor: "#fff",
          borderTopLeftRadius: "1rem",
          padding: "1rem",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            background: colors.secondaryGray,
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
          }}
        >
          გამარჯობა, რითი შეგვიძლია დაგეხმაროთ?
        </div>
        {userMsgs &&
          userMsgs.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: "flex-end",
                background: colors.primaryPink,
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            >
              {msg}
            </div>
          ))}
      </div>
      {/* user-chat-box */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Aa"
          style={{
            padding: "0.5rem 1rem",
            width: "90%",
            border: "none",
            borderRadius: borderRadius.btnRect,
          }}
          name="user-msg"
          value={userMsgInput}
          onChange={(e) => setUserMsgInput(e.target.value)}
        />
        <ChatButton variant="chatSubmit" onClick={sendUserMsg} />
      </div>
    </>
  );
}

export default ContactChat;
