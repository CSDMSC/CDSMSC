/**
 * speakers.js
 * Handles the data and rendering for the Speakers page.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SPEAKER DATABASE ---
    const speakers = [
        {
            id: "sethi",
            name: "Prof. Srinivas Sethi",
            role: "Professor & Head, CSE",
            institution: "IGIT, Sarang",
            track: "Computer Science",
            trackColor: "text-brand-500", 
            barColor: "bg-brand-500",
            date: "Feb 20",
            time: "10:30 AM",
            // UPDATED FILENAME:
            image: "assets/images/Prof. Srinivas Sethi.jpg", 
            bio: "An eminent academician from IGIT Sarang, specializing in Computer Science Engineering. His session will cover advanced network security paradigms and algorithmic efficiency."
        },
        {
            id: "ahmad",
            name: "Dr. Sk. Safique Ahmad",
            role: "Professor, Mathematics",
            institution: "IIT Indore",
            track: "Mathematics",
            trackColor: "text-purple-500",
            barColor: "bg-purple-500",
            date: "Feb 20",
            time: "11:30 AM",
            // NOTE: This image was missing from your folder screenshot. 
            // Please ensure "Dr. Sk. Safique Ahmad.jpg" exists or rename your file to this:
            image: "assets/images/Dr. Sk. Safique Ahmad.jpg", 
            bio: "Joining us from the prestigious IIT Indore, Dr. Ahmad brings deep expertise in Numerical Linear Algebra. His talk bridges theoretical mathematics with modern computational needs."
        },
        {
            id: "panda",
            name: "Prof. Sanjaya Kumar Panda",
            role: "Asst. Professor, CSE",
            institution: "NIT, Warangal",
            track: "Computer Science",
            trackColor: "text-brand-500",
            barColor: "bg-brand-500",
            date: "Feb 20",
            time: "12:30 PM",
            // UPDATED FILENAME:
            image: "assets/images/Prof. Sanjaya Kumar Panda.jpg",
            bio: "Representing NIT Warangal, Prof. Panda focuses on distributed systems and cloud computing. He will discuss data-driven approaches in scalable system architectures."
        },
        {
            id: "dash",
            name: "Dr. Priya Ranjan Dash",
            role: "Professor & Head, Statistics",
            institution: "Utkal University",
            track: "Statistics",
            trackColor: "text-teal-500",
            barColor: "bg-teal-500",
            date: "Feb 20",
            time: "02:30 PM",
            // UPDATED FILENAME:
            image: "assets/images/Prof. Priya Ranjan Dash.jpg",
            bio: "Dr. Dash leads the Statistics department at Utkal University. His session explores advanced statistical inference methods and their critical role in Big Data analytics."
        },
        {
            id: "chatrjee",
            name: "Prof. Prasant Chatrjee",
            role: "Professor, Mathematics",
            institution: "Visva-Bharati, Santiniketan",
            track: "Mathematics",
            trackColor: "text-purple-500",
            barColor: "bg-purple-500",
            date: "Feb 20",
            time: "03:30 PM",
            // UPDATED FILENAME (Spelling 'Chattarjee' match):
            image: "assets/images/Prof. Prasant Chattarjee.jpg",
            bio: "From Visva-Bharati, Prof. Chatrjee's work in applied mathematics provides the foundational structures required for complex data modeling and analysis."
        },
        {
            id: "nayak",
            name: "Biswajit Nayak",
            role: "Director",
            institution: "Grid Analytics India Pvt. Ltd.",
            track: "Industry / Statistics",
            trackColor: "text-teal-500",
            barColor: "bg-teal-500",
            date: "Feb 20",
            time: "04:30 PM",
            // UPDATED FILENAME:
            image: "assets/images/Biswajit Nayak.jpg",
            bio: "Bringing an industry perspective, Mr. Nayak will demonstrate how statistical models are applied in real-world business scenarios at Grid Analytics."
        },
        {
            id: "udgata",
            name: "Prof. Siba K. Udgata",
            role: "Professor, School of CIS",
            institution: "University of Hyderabad",
            track: "Computer Science",
            trackColor: "text-brand-500",
            barColor: "bg-brand-500",
            date: "Feb 21",
            time: "10:00 AM",
            // UPDATED FILENAME (Spelling 'Ugdata' match):
            image: "assets/images/Prof. S K Ugdata.jpg",
            bio: "Prof. Udgata is a leading authority on Wireless Sensor Networks and Intelligent Algorithms. He delivers the keynote on Day 2 regarding computational intelligence."
        },
        {
            id: "das",
            name: "Prof. Satyabrata Das",
            role: "Assoc. Professor, CSE",
            institution: "VSSUT, Burla",
            track: "Computer Science",
            trackColor: "text-brand-500",
            barColor: "bg-brand-500",
            date: "Feb 21",
            time: "11:00 AM",
            // UPDATED FILENAME:
            image: "assets/images/Prof. Satyabrata Das.jpg",
            bio: "Prof. Das from VSSUT Burla specializes in Machine Learning applications. His session will focus on the practical implementation of ML models in data science."
        },
        {
            id: "samanta",
            name: "Prof. Gauranga C. Samanta",
            role: "Professor & Head, Math",
            institution: "Fakir Mohan University",
            track: "Mathematics",
            trackColor: "text-purple-500",
            barColor: "bg-purple-500",
            date: "Feb 21",
            time: "12:00 PM",
            // NOTE: This image was missing from your folder screenshot.
            // Please ensure "Prof. Gauranga Charan Samanta.jpg" exists.
            image: "assets/images/Prof. Gauranga Charan Samanta.jpg",
            bio: "Prof. Samanta is renowned for his work in Cosmology and Relativity. He will discuss the mathematical modeling of large-scale structures."
        },
        {
            id: "pattnaik",
            name: "Prof. Monalisha Pattnaik",
            role: "Professor & Head, Statistics",
            institution: "Sambalpur University",
            track: "Statistics",
            trackColor: "text-teal-500",
            barColor: "bg-teal-500",
            date: "Feb 21",
            time: "01:00 PM",
            // UPDATED FILENAME (Spelling 'Pattanaik' match):
            image: "assets/images/Prof. Monalisha Pattanaik.jpg",
            bio: "Prof. Pattnaik brings expertise in Multivariate Analysis. Her talk will focus on interpreting complex datasets with multiple variables."
        }
    ];

    // --- 2. RENDER LOGIC ---
    const container = document.getElementById('speakers-container');
    
    // Only run if the container exists (prevents errors on other pages)
    if (container) {
        container.innerHTML = ''; // Clear loading state

        speakers.forEach(speaker => {
            const card = `
                <div class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full relative">
                    <div class="h-1.5 w-full ${speaker.barColor}"></div>
                    
                    <div class="p-6 flex flex-col flex-grow items-center text-center">
                        <div class="w-28 h-28 mb-5 relative group-hover:scale-105 transition-transform duration-300">
                            <img src="${speaker.image}" 
                                 onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=f3f4f6&color=4b5563&size=128'" 
                                 alt="${speaker.name}" 
                                 class="w-full h-full rounded-full object-cover border-4 border-white shadow-md">
                             <div class="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-sm border border-gray-100 text-xs">
                                <i class="ph-fill ph-microphone-stage ${speaker.trackColor}"></i>
                             </div>
                        </div>
                        
                        <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                            ${speaker.name}
                        </h3>
                        <p class="text-xs font-bold text-brand-600 uppercase tracking-wide mb-2">${speaker.institution}</p>
                        <p class="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">${speaker.role}</p>

                        <div class="mt-auto w-full">
                            <div class="flex items-center justify-center gap-2 text-xs font-semibold text-gray-500 mb-4 bg-gray-50 py-2 rounded-md border border-gray-200">
                                <i class="ph-bold ph-calendar-blank"></i> ${speaker.date} 
                                <span class="text-gray-300">|</span> 
                                <i class="ph-bold ph-clock"></i> ${speaker.time}
                            </div>
                            
                            <button onclick="window.openModal('${speaker.id}')" class="w-full py-2.5 rounded-lg border border-brand-200 text-brand-700 font-bold text-sm hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-sm flex items-center justify-center gap-2">
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    // --- 3. MODAL LOGIC ---
    window.openModal = function(id) {
        const speaker = speakers.find(s => s.id === id);
        if(!speaker) return;

        // Populate Modal Data
        document.getElementById('modal-name').innerText = speaker.name;
        document.getElementById('modal-role').innerText = speaker.role;
        document.getElementById('modal-institution-text').innerText = speaker.institution;
        document.getElementById('modal-time').innerText = `${speaker.date}, 2026 • ${speaker.time}`;
        document.getElementById('modal-track').innerText = speaker.track;
        document.getElementById('modal-bio').innerText = speaker.bio;
        
        // Handle Image
        const img = document.getElementById('modal-image');
        img.src = speaker.image;
        img.onerror = function() {
            this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=f3f4f6&color=4b5563&size=128`;
        };

        document.getElementById('speaker-modal').classList.remove('hidden');
    };

    window.closeModal = function() {
        document.getElementById('speaker-modal').classList.add('hidden');
    };
    
    // Close modal when clicking on the backdrop
    const modalBackdrop = document.getElementById('speaker-modal');
    if(modalBackdrop) {
        modalBackdrop.addEventListener('click', function(e) {
            if (e.target === this) window.closeModal();
        });
    }

});