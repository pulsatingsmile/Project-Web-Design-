// Events Data
const eventsData = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    category: "Workshop",
    date: "Dec 28, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "CS Building, Room 301",
    capacity: 50,
    registered: 38,
    description:
      "Hands-on workshop covering AI fundamentals and machine learning applications.",
    fullDescription:
      "Join us for an intensive 3-hour workshop on Artificial Intelligence and Machine Learning. Industry experts will guide you through practical exercises covering neural networks, data preprocessing, and model training. Participants will work on real-world projects and receive a certificate of completion. Bring your laptop with Python installed.",
  },
  {
    id: 2,
    title: "Annual Career Fair",
    category: "Academic",
    date: "Jan 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    capacity: 500,
    registered: 312,
    description:
      "Meet recruiters from top companies and explore career opportunities at the upcoming event.",
    fullDescription:
      "The Annual Career Fair brings together over 50 leading companies seeking talented students for internships and full-time positions. Dress professionally, bring multiple copies of your resume, and prepare your elevator pitch. Company representatives will conduct on-spot interviews and share information about their organizations.",
  },
  {
    id: 3,
    title: "Winter Sports Tournament",
    category: "Sport",
    date: "Jan 5, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "Sports Complex",
    capacity: 200,
    registered: 145,
    description:
      "Inter-department sports competition including basketball, volleyball, and badminton.",
    fullDescription:
      "Show your athletic prowess in our Winter Sports Tournament! Compete in basketball, volleyball, and badminton events. Teams will be formed by department, and prizes will be awarded to top performers. Spectators are welcome. Registration closes on January 1st. Sports attire required.",
  },
  {
    id: 4,
    title: "Cultural Night 2024",
    category: "Social",
    date: "Dec 30, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Open Air Theater",
    capacity: 400,
    registered: 289,
    description:
      "Celebrate diversity with performances, food stall, and cultural exhibitions.",
    fullDescription:
      "Experience a night of cultural celebration featuring dance performances, music, drama, and cuisine from around the world. Students from different backgrounds will showcase their heritage through various art forms. Food stalls will offer international delicacies. This is a free event open to all students and faculty.",
  },
  {
    id: 5,
    title: "Research Symposium",
    category: "Academic",
    date: "Jan 20, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Conference Hall",
    capacity: 150,
    registered: 92,
    description:
      "Present and discuss cutting-edge research from various disciplines.",
    fullDescription:
      "The Annual Research Symposium provides a platform for students and faculty to present their research findings. Sessions will cover topics in engineering, sciences, humanities, and social sciences. Keynote speakers from renowned institutions will share insights. Lunch and refreshments will be provided.",
  },
  {
    id: 6,
    title: "Photography Exhibition & Workshop",
    category: "Workshop",
    date: "Jan 10, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Art Gallery",
    capacity: 40,
    registered: 28,
    description:
      "Learn photography techniques and showcase your work.",
    fullDescription:
      "Photography enthusiasts are invited to this special event featuring an exhibition of student work followed by a hands-on workshop. Professional photographers will share tips on composition, lighting, and editing. Bring your camera (DSLR or smartphone). Selected works will be featured in the campus magazine.",
  },
];

// State
let currentCategory = "All";

// Render Events
function renderEvents() {
  const container = document.getElementById("events-container");
  const searchQuery = document
    .getElementById("event-search")
    .value.toLowerCase();

  const filtered = eventsData.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery) ||
      event.description.toLowerCase().includes(searchQuery);
    const matchesCategory =
      currentCategory === "All" || event.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  container.innerHTML = filtered
    .map((event) => {
      const capacityPercent = (event.registered / event.capacity) * 100;
      const isFull = event.registered >= event.capacity;

      return `
            <div class="card p-6">
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-3">
                        <h3 class="text-text-primary flex-1 poppins">${
                          event.title
                        }</h3>
                        <span class="badge badge-${event.category.toLowerCase()}">${
        event.category
      }</span>
                    </div>
                    
                    <p class="text-text-secondary">${event.description}</p>
                    
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center gap-2 text-text-secondary">
                            <img src="/FrontEnd/dist/Icons/CalendarBlack.svg" class="w-4 h-4">
                            <span>${event.date} at ${event.time}</span>
                        </div>
                        <div class="flex items-center gap-2 text-text-secondary">
                            <img src="./dist/Icons/Location.svg" alt="" class="w-4 h-4">
                            <span>${event.location}</span>
                        </div>
                    </div>
                    
                    <div>
                        <div class="flex items-center justify-between text-sm mb-1">
                            <div class="flex items-center gap-1 text-text-secondary">
                            <img src="./dist/Icons/Users.svg" alt="" class="w-5 h-5">
                                <span>Capacity</span>
                            </div>
                            <span class="text-text-secondary">${
                              event.registered
                            } / ${event.capacity}</span>
                        </div>
                        <div class="capacity-bar">
                            <div class="capacity-fill" style="width: ${capacityPercent}%"></div>
                        </div>
                    </div>
                    
                    <div class="flex gap-2 pt-2">
                        <button onclick="registerEvent(${
                          event.id
                        })" class="btn btn-primary btn-sm flex-1" ${
        isFull ? "disabled" : ""
      }>
                            ${isFull ? "Full" : "Register"}
                        </button>
                        <button onclick="viewDetails(${
                          event.id
                        })" class="btn btn-secondary btn-sm flex-1">
                          <img src="./dist/Icons/EyeBlack.svg" alt="" class="w-4 h-4 mr-2">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  lucide.createIcons();
}

// Filter by Category
function filterByCategory(category) {
  currentCategory = category;

  document.querySelectorAll("#event-filters .filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    }
  });

  renderEvents();
}

// Filter Events (Search)
function filterEvents() {
  renderEvents();
}

// Register for Event
function registerEvent(id) {
  const event = eventsData.find((e) => e.id === id);
  if (event.registered < event.capacity) {
    showToast(`Registered for: ${event.title}`);
  }
}

// View Details
function viewDetails(id) {
  const event = eventsData.find((e) => e.id === id);
  const isFull = event.registered >= event.capacity;

  const content = `
        <div class="space-y-4">
            <span class="badge badge-${event.category.toLowerCase()}">${
    event.category
  }</span>
            
            <div class="space-y-3 text-text-primary">
                <div class="flex items-center gap-2">
                    <i data-lucide="calendar" class="w-5 h-5 text-nav-primary"></i>
                    <span>${event.date} at ${event.time}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i data-lucide="map-pin" class="w-5 h-5 text-nav-primary"></i>
                    <span>${event.location}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i data-lucide="users" class="w-5 h-5 text-nav-primary"></i>
                    <span>${event.registered} / ${
    event.capacity
  } registered</span>
                </div>
            </div>
            
            <p class="text-text-primary leading-relaxed">${
              event.fullDescription
            }</p>
            
            <div class="pt-4 border-t border-gray-200">
                <button onclick="registerEvent(${
                  event.id
                }); closeModal();" class="btn btn-primary w-full" ${
    isFull ? "disabled" : ""
  }>
                    ${isFull ? "Event Full" : "Register Now"}
                </button>
            </div>
        </div>
    `;
  openModal(event.title, content);
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  renderEvents();
});
