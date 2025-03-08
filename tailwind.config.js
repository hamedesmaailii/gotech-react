const colors = require("tailwind/colors");
const colors = require("tailwind/fontSize");
const colors = require("tailwind/shadow");

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "var(--color-primary-light)",
                    default: "var(--color-primary)"
                },
                seconadry: "var(--color-secondary)",
                white: "var(--color-white)",
                gray1: "varr(--color-gray1)",
                gray2: "var(--color-gray2)",
                black0: "var(--color-black0)",
                black2: "var(--color-black2)",
                black3: "var(--color-black3)",
                black5: "var(--color-black5)",
                black6: "var(--color-black6)",
                black7: "var(--color-black7)",
                black9: "var(--color-black9)",
                primaryGradientStart: "var(--color-primary-gradient-start)",
                primaryGradientEnd: "var(--color-primary-gradient-end)",
                transparent: "transparent",
                IBColor: "var(--color-IB)",
                FTColor: "var(--color-FT)",
                facebookGCS: "var(--color-facebook-g-start)",
                facebookGCE: "var(--color-facebook-g-end)",
                skypeGCS: "var(--color-skype-g-start)",
                skypeGCE: "var(--color-skype-g-end)",
                linkedinGCS: "var(--color-linkedin-g-start)",
                linkedinGCE: "var(--color-linkedin-g-end)",
                instagramGCS: "var(--color-instagram-g-start)",
                instagramGCE: "var(--color-instagram-g-end)",
            },

            fontSize: {
                xxsmall: "var(--text-xxsmall)",
                xsmall: "var(--text-xsmall)",
                small: "var(--text-small)",
                regular: "var(--text-regular)",
                normal: "var(--text-normal)",
                medium: "var(--text-medium)",
                large: "var(--text-large)",
                xlarge: "var(--text-xlarge)",
            },

            spacing: {
                '4': 'var(--spacing-4)',
                '5': 'var(--spacing-5)',
                '10': 'var(--spacing-10)',
                '15': 'var(--spacing-15)',
                '16': 'var(--spacing-16)',
                '18': 'var(--spacing-18)',
                '20': 'var(--spacing-20)',
                '24': 'var(--spacing-24)',
                '30': 'var(--spacing-30)',
                '32': 'var(--spacing-32)',
                '34': 'var(--spacing-34)',
                '35': 'var(--spacing-35)',
                '36': 'var(--spacing-36)',
                '40': 'var(--spacing-40)',
                '50': 'var(--spacing-50)',
                '60': 'var(--spacing-60)',
                '80': 'var(--spacing-80)',
                '85': 'var(--spacing-85)',
                '100': 'var(--spacing-100)',
                '110': 'var(--spacing-110)',
                '130': 'var(--spacing-130)',
                '170': 'var(--spacing-170)',
            },

            shadow: {
                regular: "var(--shadow-regular)",
                normal: "var(--shadow-normal)",
            },

            backgroundImage: {
                heroBg: "var(--hero-bg)",
            },
        }
    }
}