/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                spinGradient: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                spinGradient: 'spinGradient 8s linear infinite',
            },
            backgroundImage: {
                'color-blobs': 'conic-gradient(from 90deg, #ff7b54, #ffb347, #ffc700, #85e085, #85c1e9, #d580ff, #ff7b54)',
            },
        },
    },
    plugins: [],
}