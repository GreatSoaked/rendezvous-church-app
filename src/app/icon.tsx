import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="11" fill="black" stroke="none" />
        <path
          d="M7 20v-8l5-4 5 4v8"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M12 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M14 8.5C14 9.32843 13.1046 10 12 10C10.8954 10 10 9.32843 10 8.5"
           stroke="white"
           strokeWidth="1"
        />
      </svg>
    ),
    {
      ...size,
    }
  )
}
