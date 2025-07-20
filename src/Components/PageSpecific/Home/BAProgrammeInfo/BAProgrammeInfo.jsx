import React from "react";
import { useDesign } from "../../../../context/DesignProvider";
import {
  bachelorProgrammes,
  programLinks,
} from "../../../../data/home/homeData";
import LayoutWrapper from "../../../Global/LayoutWrapper/LayoutWrapper";
import Video from "./Video";

function BAProgrammeInfo() {
  const { colors, fontSizes, spacing } = useDesign();
  return (
    <section style={{ height: "531px", marginTop: "56px" }}>
        {/* info and video container */}
        <div>
          {/* programmes info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            //   height: "100%",
              justifyContent: "space-between",
              backgroundColor: "red",
            }}
          >
            {/* info title container*/}
            <div>
              <h2 style={{ fontSize: fontSizes.heading2 }}>
                <span
                  style={{
                    color: colors.primaryPink,
                    borderBottom: `1px solid ${colors.primaryPink}`,
                    paddingBottom: spacing.sm,
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
            <div>
              <h3 style={{ color: colors.primaryPink }}>
                კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო
                პროგრამაზე დეტალური ინფორმაციის მისაღებად იხილეთ:
              </h3>

              {/* programme lists - list 2 */}
              <ul>
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
          <Video />
        </div>
    </section>
  );
}

export default BAProgrammeInfo;
