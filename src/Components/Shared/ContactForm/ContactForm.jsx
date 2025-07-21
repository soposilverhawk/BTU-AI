import React, { useState } from "react";
import { useDesign } from "../../../context/DesignProvider";
import { Typography } from "@mui/material";
import Button from "../../Shared/Button/Button";

function ContactForm({ variant, title }) {
  const hasNoteInput = variant === "AI-contact" ? false : true;
  const { colors, fontSizes, borderRadius } = useDesign();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    ...(!hasNoteInput && { email: "" }),
    ...(!hasNoteInput && { tel: "" }),
    ...(hasNoteInput && { note: "" }),
    ...(!hasNoteInput && { receiveInfo: false }),
  });
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const handleInput = (event) => {
    const { name, value, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "radio" && name === "receiveInfo" ? value === "true" : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setSubmittedFormData(formData);
    setFormData({
      name: "",
      surname: "",
      ...(!hasNoteInput && { email: "" }),
      ...(!hasNoteInput && { tel: "" }),
      ...(hasNoteInput && { note: "" }),
      ...(!hasNoteInput && { receiveInfo: false }),
    });
  };

  const inputContainerBase = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "45%",
    gap: "20px",
  };

  const inputBase = {
    padding: "31px 7px",
    borderRadius: borderRadius.btnRect,
    border: "none",
  };

  const labelBase = {
    fontSize: "18px",
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingLeft: "7px",
  };

  const requiredBase = {
    color: "red",
  };

  const rowBase = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div
      style={{
        height: "681px",
        padding: "50px",
        backgroundColor: colors.primaryBlue,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "45px",
      }}
    >
      <h3
        style={{
          fontSize: fontSizes.heading3,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {title}
      </h3>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          height: "100%",
          justifyContent: "space-between",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* first row inputs */}
        <div style={rowBase}>
          {/* name input */}
          <div style={inputContainerBase}>
            <label htmlFor="name" style={labelBase}>
              სახელი <span style={requiredBase}>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="თქვენი სახელი"
              value={formData.name}
              onChange={(e) => handleInput(e)}
              required
              style={inputBase}
            />
          </div>
          {/* surname input */}
          <div style={inputContainerBase}>
            <label htmlFor="surname" style={labelBase}>
              გვარი <span style={requiredBase}>*</span>
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="თქვენი გვარი"
              value={formData.surname}
              onChange={(e) => handleInput(e)}
              required
              style={inputBase}
            />
          </div>
        </div>
        {/* second row inputs */}
        {variant === "AI-contact" ? (
          <>
            <div style={rowBase}>
              <div style={inputContainerBase}>
                <label htmlFor="tel">
                  ტელეფონი <span style={requiredBase}>*</span>
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="ტელეფონის ნომერი"
                  value={formData.tel}
                  onChange={(e) => handleInput(e)}
                  required
                  style={inputBase}
                />
              </div>
              <div style={inputContainerBase}>
                <label htmlFor="email">
                  ელ.ფოსტა <span style={requiredBase}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="თქვენი ელ-ფოსტა"
                  value={formData.email}
                  onChange={(e) => handleInput(e)}
                  required
                  style={inputBase}
                />
              </div>
            </div>
            <Typography variant="body1" sx={{ fontSize: "20px" }}>
              მსურს მივიღო ინფორმაცია BTU-ს სასწავლო პროგრამებისა და დაგეგმილი
              სამომავლო აქტივობების/ღონისძიებების შესახებ ელექტრონული ფოსტის,
              სატელეფონო კომუნიკაციის ან/და SMS-ის საშუალებით. 
            </Typography>
            <div style={{ display: "flex", gap: "1rem" }}>
              {/* radio option container 1 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  type="radio"
                  id="yes"
                  name="receiveInfo"
                  value="true"
                  onChange={(e) => handleInput(e)}
                  checked={formData.receiveInfo === true}
                />
                <label htmlFor="yes">კი</label>
              </div>
              {/* radio option container 2 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  type="radio"
                  id="no"
                  name="receiveInfo"
                  value="false"
                  onChange={(e) => handleInput(e)}
                  checked={formData.receiveInfo === false}
                />
                <label htmlFor="no">არა</label>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div style={{ ...inputContainerBase, width: "auto" }}>
              <label htmlFor="note">
                ტექსტი <span style={requiredBase}>*</span>
              </label>
              <textarea
                name="note"
                id="note"
                placeholder="ტექსტი..."
                value={formData.note}
                required
                rows={10}
                onChange={(e) => handleInput(e)}
                style={inputBase}
              ></textarea>
            </div>
          </div>
        )}
        <div style={{ margin: "0 auto", width: "15%" }}>
          <Button variant="formSubmit" width="100%">
            გაგზავნა
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;