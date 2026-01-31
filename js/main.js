/**
 * CSDMSC 2026 - Main Logic
 * Handles global components (Navbar/Footer), Mobile Menu, and Active States.
 * STRICTLY FOLLOWS THEME-CONFIG COLORS.
 */

document.addEventListener("DOMContentLoaded", () => {
    App.init();
});

const App = {
    // Configuration for the Event
    config: {
        eventName: "CSDMSC 2026",
        dates: "Feb 20-21, 2026",
        venue: "Rajendra University",
        convenerEmail: "ddansana@rajendrauniversity.ac.in",
        convenerPhone: "9776456781"
    },

    init: function() {
        this.renderNavbar();
        this.renderFooter();
        this.highlightCurrentPage();
        this.initMobileMenu();
        this.initScrollEffects();
    },

    /**
     * Renders the Navigation Bar into #navbar-placeholder
     */
    renderNavbar: function() {
        const placeholder = document.getElementById('navbar-placeholder');
        if (!placeholder) return;

        placeholder.innerHTML = `
        <nav id="main-nav" class="bg-white/95 backdrop-blur-md border-b border-brand-100 fixed w-full z-50 top-0 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20">
                    <div class="flex-shrink-0 flex items-center gap-3">
                        <a href="index.html" class="group flex items-center gap-3">
                            <div class="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:bg-brand-500 transition-colors">
                                <span class="font-bold text-lg">C</span>
                            </div>
                            <div>
                                <h1 class="text-xl font-bold text-brand-900 tracking-tight leading-none group-hover:text-brand-600 transition">
                                    CSDMSC<span class="text-brand-500"> 2026</span>
                                </h1>
                                <p class="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-0.5">Rajendra University</p>
                            </div>
                        </a>
                    </div>
                    
                    <div class="hidden md:flex space-x-1 items-center">
                        <a href="index.html" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-full transition-colors">Home</a>
                        <a href="about.html" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-full transition-colors">About</a>
                        <a href="speakers.html" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-full transition-colors">Speakers</a>
                        <a href="schedule.html" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-full transition-colors">Schedule</a>
                        <a href="contact.html" class="nav-link px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-full transition-colors">Contact</a>
                        
                        <a href="register.html" class="ml-4 px-6 py-2.5 bg-brand-900 text-white text-sm font-bold rounded-lg shadow-md hover:bg-brand-800 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                            Register
                        </a>
                    </div>

                    <div class="md:hidden flex items-center">
                        <button id="mobile-menu-btn" class="p-2 rounded-md text-gray-600 hover:text-brand-600 hover:bg-brand-50 focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-brand-100 absolute w-full shadow-xl">
                <div class="px-4 pt-2 pb-6 space-y-2">
                    <a href="index.html" class="block mobile-link px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Home</a>
                    <a href="about.html" class="block mobile-link px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">About</a>
                    <a href="speakers.html" class="block mobile-link px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Speakers</a>
                    <a href="schedule.html" class="block mobile-link px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Schedule</a>
                    <a href="contact.html" class="block mobile-link px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50">Contact</a>
                    <a href="register.html" class="block text-center mt-4 px-3 py-3 rounded-lg text-base font-bold bg-brand-600 text-white mx-3 hover:bg-brand-700">Register Now</a>
                </div>
            </div>
        </nav>
        `;
    },

    /**
     * Renders the Footer into #footer-placeholder
     * Matches the Professional Blue Theme
     */
    renderFooter: function() {
        const placeholder = document.getElementById('footer-placeholder');
        if (!placeholder) return;

        placeholder.innerHTML = `
        <footer class="bg-brand-900 text-brand-100 border-t border-brand-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
                    <div class="space-y-4">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white font-bold shadow-lg">C</div>
                            <h3 class="text-2xl font-bold text-white tracking-tight">CSDMSC 2026</h3>
                        </div>
                        <p class="text-brand-200 text-sm leading-relaxed max-w-sm">
                            National Conference on Computational and Data Sciences in Mathematics, Statistics and Computer Science.
                        </p>
                        <div class="flex space-x-4 pt-2">
                            <a href="#" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-brand-200 hover:bg-brand-600 hover:text-white transition-all">
                                <i class="ph-fill ph-facebook-logo text-xl"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-brand-200 hover:bg-brand-600 hover:text-white transition-all">
                                <i class="ph-fill ph-twitter-logo text-xl"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-brand-200 hover:bg-brand-600 hover:text-white transition-all">
                                <i class="ph-fill ph-linkedin-logo text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-brand-800 pb-2 inline-block">Quick Access</h4>
                        <ul class="space-y-3">
                            <li><a href="about.html" class="text-brand-200 hover:text-white hover:pl-2 transition-all text-sm flex items-center"><i class="ph-bold ph-caret-right mr-2 text-brand-500"></i>Concept Note</a></li>
                            <li><a href="speakers.html" class="text-brand-200 hover:text-white hover:pl-2 transition-all text-sm flex items-center"><i class="ph-bold ph-caret-right mr-2 text-brand-500"></i>Keynote Speakers</a></li>
                            <li><a href="schedule.html" class="text-brand-200 hover:text-white hover:pl-2 transition-all text-sm flex items-center"><i class="ph-bold ph-caret-right mr-2 text-brand-500"></i>Program Schedule</a></li>
                            <li><a href="register.html" class="text-brand-200 hover:text-white hover:pl-2 transition-all text-sm flex items-center"><i class="ph-bold ph-caret-right mr-2 text-brand-500"></i>Registration</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-sm font-bold text-white tracking-wider uppercase mb-6 border-b border-brand-800 pb-2 inline-block">Contact Convener</h4>
                        <ul class="space-y-4 text-sm text-brand-200">
                            <li class="flex items-start">
                                <i class="ph-fill ph-user-circle text-brand-500 text-xl mr-3 mt-0.5"></i>
                                <span>
                                    <strong class="text-white block">Dr. Debabrata Dansana</strong>
                                    Dept. of Computer Science<br>
                                    Rajendra University
                                </span>
                            </li>
                            <li class="flex items-center">
                                <i class="ph-fill ph-envelope text-brand-500 text-xl mr-3"></i>
                                <a href="mailto:${this.config.convenerEmail}" class="hover:text-white transition border-b border-transparent hover:border-brand-500">${this.config.convenerEmail}</a>
                            </li>
                            <li class="flex items-center">
                                <i class="ph-fill ph-phone text-brand-500 text-xl mr-3"></i>
                                <span>${this.config.convenerPhone}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-brand-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-300">
                    <p>&copy; 2026 Rajendra University. All rights reserved.</p>
                    <p class="mt-2 md:mt-0 flex items-center gap-1">
                        Designed for <span class="font-semibold text-white">CSDMSC 2026</span>
                    </p>
                </div>
            </div>
        </footer>
        `;
    },

    /**
     * Highlights the current page in the Navbar
     */
    highlightCurrentPage: function() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        
        // Desktop Links
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-brand-600', 'font-bold', 'bg-brand-50');
            }
        });

        // Mobile Links
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.remove('text-gray-700');
                link.classList.add('bg-brand-50', 'text-brand-600', 'font-bold');
            }
        });
    },

    /**
     * Initializes Mobile Menu Toggle
     */
    initMobileMenu: function() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        
        if (btn && menu) {
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                // Optional: Animate icon transition if needed
            });
        }
    },

    /**
     * Scroll Effects for Navbar
     */
    initScrollEffects: function() {
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    }
};