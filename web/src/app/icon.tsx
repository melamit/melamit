import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16V8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 3.58172 19.5817 0 24 0C28.4183 0 32 3.58172 32 8C32 12.4183 28.4183 16 24 16H16V24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24V16Z"
          fill="url(#paint0_linear_43_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_43_3"
            x1="-7.5"
            y1="-12.25"
            x2="44.75"
            y2="45.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.275" stop-color="#FFBF92" />
            <stop offset="0.855" stop-color="#59FFD8" />
          </linearGradient>
        </defs>
      </svg>
    ),
    {
      ...size,
    }
  );
}
