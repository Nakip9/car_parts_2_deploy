/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0ea5e9', // Sky 500
                secondary: '#0f172a', // Slate 900
                accent: '#38bdf8', // Sky 400
                light: '#f0f9ff', // Sky 50
            },
            fontFamily: {
                sans: ['Inter', 'Cairo', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
