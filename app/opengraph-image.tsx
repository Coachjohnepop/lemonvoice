import { ImageResponse } from "next/og";

export const alt = "Lemonvoice — custom software and robot lawn mowing in Greater Sacramento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #f0f7f2 0%, #ffffff 45%, #fefce8 100%)",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#4a7c59",
          }}
        >
          Lemonvoice
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#111827",
              maxWidth: 980,
            }}
          >
            Custom software. Robot lawns.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "#4b5563",
              maxWidth: 860,
            }}
          >
            Systems around how you make money — and Segway Navimow mowing in Greater Sacramento.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#4a7c59",
            fontWeight: 600,
          }}
        >
          lemonvoice.com
        </div>
      </div>
    ),
    { ...size }
  );
}
