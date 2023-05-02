import { Card } from "./types";

export const ICON_REGEX = /^[a-zA-Z]{3,32}$/;
export const HEX_COLOR_REGEX = /#[a-fA-F0-9]{6}$/;
export const INITIAL_CARD: Card = {
  title: "My Tech Stack",
  theme: "github",
  align: "left",
  titleAlign: "left",
  showBorder: true,
  hideBg: false,
  borderRadius: 4.5,
  fontWeight: "semibold",
  fontSize: 18,
  fontFamily: "Segoe UI",
  gap: 10,
  lineHeight: 7,
  hideTitle: false,
  lines: [
    {
      lineNumber: 1,
      badges: [
        { position: 0, color: "auto", icon: "laravel", label: "laravel" },
        { position: 1, color: "auto", icon: "react", label: "react" },
        { position: 2, color: "auto", icon: "c", label: "c" },
      ],
    },
  ],
  backgroundColor: "",
  borderColor: "",
  titleColor: "",
  badgeColor: "",
  width: 495,
};
