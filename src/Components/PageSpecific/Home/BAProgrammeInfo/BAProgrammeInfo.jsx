import React from "react";
import { useDesign } from "../../../../context/DesignProvider";
import {
  bachelorProgrammes,
  programLinks,
} from "../../../../data/home/homeData";
import Video from "./Video";

function BAProgrammeInfo() {
  const { colors, fontSizes, spacing } = useDesign();
  return (
    <section style={{ height: "531px", marginTop: "56px" }}>
      {/* info and video container */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* programmes info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "80%",
            width: "80%",
          }}
        >
          {/* info title container*/}
          <div>
            <h2
              style={{
                fontSize: fontSizes.heading2,
                fotnWeight: "bold",
                borderBottom: `1px solid ${colors.primaryPink}`,
                paddingBottom: spacing.md,
                width: "60%",
              }}
            >
              <span
                style={{
                  color: colors.primaryPink,
                  marginRight: "0.5rem",
                }}
              >
                AI
              </span>
              ბაკალავრის პროგრამა
            </h2>
          </div>
          {/* programme lists - list 1 */}
          <div>
            <ul style={{ listStyleType: "disc" }}>
              {bachelorProgrammes.map(({ id, program }) => (
                <li key={id}>{program}</li>
              ))}
            </ul>
          </div>
          {/* programme lists - list 2 header */}
          <div
            style={{
              height: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ color: colors.primaryPink }}>
              კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო
              პროგრამაზე დეტალური ინფორმაციის მისაღებად იხილეთ:
            </h3>

            {/* programme lists - list 2 */}
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "disc" }}
            >
              {programLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} target="_blank">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* video */}
        <Video src="https://www.youtube.com/embed/J61jhlMnn30?si=Tzu11OXHpqGY7ZWW" />
      </div>
    </section>
  );
}

export default BAProgrammeInfo;
