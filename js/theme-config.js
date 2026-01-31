/**
 * THEME CONFIGURATION
 * This file sets the design tokens for the entire website.
 * Any page referencing this script will inherit these exact colors and fonts.
 */

window.tailwind = {
    config: {
        theme: {
            extend: {
                // 1. Typography (Matches your Resume/PDF preference)
                fontFamily: {
                    sans: ['Fira Sans', 'sans-serif'],
                    serif: ['Merriweather', 'serif'], // Good for long text in 'About'
                },
                
                // 2. Color Palette (Academic & Professional Blue Theme)
                colors: {
                    brand: {
                        50: '#F0F9FF',  // Very Light Blue (Backgrounds)
                        100: '#E0F2FE', // Light Blue (Borders/Accents)
                        200: '#BAE6FD',
                        300: '#7DD3FC',
                        400: '#38BDF8',
                        500: '#0EA5E9', // Primary Brand Color (Buttons)
                        600: '#0284C7', // Hover States
                        700: '#0369A1',
                        800: '#075985', // Dark Blue (Headers)
                        900: '#0C4A6E', // Very Dark (Footer/Hero)
                        accent: '#F59E0B', // Amber (For "Register" or Warnings)
                    },
                    // Semantic Colors (Good for status updates)
                    status: {
                        success: '#10B981', // Green
                        error: '#EF4444',   // Red
                        warning: '#F59E0B', // Yellow
                    }
                },

                // 3. Border Radius (Professional = slightly rounded, not pill-shaped)
                borderRadius: {
                    'xl': '1rem',
                    '2xl': '1.5rem',
                },

                // 4. Custom Animations (Optional)
                animation: {
                    'fade-in': 'fadeIn 0.5s ease-in-out',
                    'slide-up': 'slideUp 0.5s ease-out',
                },
                keyframes: {
                    fadeIn: {
                        '0%': { opacity: '0' },
                        '100%': { opacity: '1' },
                    },
                    slideUp: {
                        '0%': { transform: 'translateY(20px)', opacity: '0' },
                        '100%': { transform: 'translateY(0)', opacity: '1' },
                    }
                }
            }
        }
    }
};