module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "shark-text": ["AUTHENTIC Sans", "sans-serif"],
                "shark-display": ["Didact Gothic", "sans-serif"],
                "shark-display-light": [
                    "Didact Gothic",
                    "sans-serif",
                ],
                "shark-display-heavy": [
                    "Didact Gothic",
                    "sans-serif",
                ],
                "shark-display-black": [
                    "Didact Gothic",
                    "sans-serif",
                ],
            },
            colors: {
                "shark-white": "#ffffff",
                "shark-black": "#000000",
                "shark-light-blue": "#A7DFF6",
                "shark-blue": "#004C83",
                "shark-dark-blue": "#002049",
                "shark-magenta": "#AB36BE",
                "shark-pink": "#FF638D",
                "shark-orange": "#FE500C",
                "shark-beach": "#F9F1DF",
                "nouns-grey": "#F2F3F6",
            },
        },
        screens: {
            xs: "200px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
