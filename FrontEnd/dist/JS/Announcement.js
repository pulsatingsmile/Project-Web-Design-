// Announcements Data
const announcementsData = [
  {
    id: 1,
    title: "Campus Closure - Holiday Season",
    category: "General",
    description:
      "Campus will be closed from December 24-26 for the holiday season.",
    fullContent:
      "The campus will be closed from December 24th to December 26th for the holiday season. All facilities including the library, cafeteria, and administrative offices will be unavailable during this period. Emergency contact information is available at the security office.",
    date: "Dec 20, 2025",
  },
  {
    id: 2,
    title: "Final Exam Schedule Released",
    category: "Academic",
    description:
      "The final examination schedule for Fall 2024 is now available.",
    fullContent:
      "The final examination schedule for Fall 2024 semester has been released. Students can view their exam schedules on the student portal. Please note that exam conflicts should be reported to the registrar's office by December 10th. Make sure to check the exam venue and timing carefully.",
    date: "Dec 18, 2025",
  },
  {
    id: 3,
    title: "Emergency Drill - December 22",
    category: "Emergency",
    description: "Fire drill scheduled for December 22nd at 10:00 AM.",
    fullContent:
      "An emergency fire drill is scheduled for December 22nd at 10:00 AM. All students and staff are required to participate. Please evacuate buildings immediately when the alarm sounds and proceed to designated assembly points. Do not use elevators during the drill.",
    date: "Dec 15, 2025",
  },
  {
    id: 4,
    title: "Tech Workshop Registration Open",
    category: "Events",
    description:
      "Register now for the upcoming technology workshop on AI and Machine Learning.",
    fullContent:
      "Registration is now open for our Technology Workshop on AI and Machine Learning. The workshop will be held on December 28th from 2:00 PM to 5:00 PM in the Computer Science Building, Room 301. Industry experts will be conducting hands-on sessions. Limited seats available - register on the events page.",
    date: "Dec 12, 2025",
  },
  {
    id: 5,
    title: "Library Extended Hours",
    category: "Academic",
    description: "Library will have extended hours during exam period.",
    fullContent:
      "To support students during the examination period, the library will extend its operating hours from December 15th to January 10th. The library will be open from 7:00 AM to 11:00 PM on weekdays and 9:00 AM to 9:00 PM on weekends. Study rooms can be booked online.",
    date: "Dec 10, 2025",
  },
  {
    id: 6,
    title: "Career Fair - January 2025",
    category: "Events",
    description:
      "Annual career fair featuring top companies and recruitment opportunities.",
    fullContent:
      "The Annual Career Fair will take place on January 15th, 2025, from 10:00 AM to 4:00 PM at the Main Auditorium. Over 50 companies will be participating, offering internship and full-time positions. Students are encouraged to bring multiple copies of their resumes and dress professionally.",
    date: "Dec 8, 2025",
  },
];

// State
let currentCategory = "All";

// Render Announcements
function renderAnnouncements() {
  const container = document.getElementById("announcements-container");
  const searchQuery = document
    .getElementById("announcement-search")
    .value.toLowerCase();

  const filtered = announcementsData.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery) ||
      announcement.description.toLowerCase().includes(searchQuery);
    const matchesCategory =
      currentCategory === "All" || announcement.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  container.innerHTML = filtered
    .map(
      (announcement) => `
        <div class="card p-6">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div class="flex-1">
                    <div class="flex items-start gap-3 mb-2 flex-wrap">
                        <h3 class="text-text-primary flex-1 poppins">${
                          announcement.title
                        }</h3>
                        <span class="badge badge-${announcement.category.toLowerCase()}">${
        announcement.category
      }</span>
                    </div>
                    <p class="text-text-secondary mb-2">${
                      announcement.description
                    }</p>
                    <p class="text-text-secondary text-sm">${
                      announcement.date
                    }</p>
                </div>
                <div class="flex sm:flex-col gap-2">
                    <button onclick="saveAnnouncement(${
                      announcement.id
                    })" class="btn btn-secondary btn-sm flex-1 sm:flex-none">
                    <img src="./dist/Icons/BookMark.svg" alt="" class="w-4 h-4 mr-2">
                        Save
                    </button>
                    <button onclick="viewDetails(${
                      announcement.id
                    })" class="btn btn-primary btn-sm flex-1 sm:flex-none">
                        <img src="./dist/Icons/EyeWhite.svg" alt="" class="w-4 h-4 mr-2">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  lucide.createIcons();
}

// Filter by Category
function filterByCategory(category) {
  currentCategory = category;

  document
    .querySelectorAll("#announcement-filters .filter-btn")
    .forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.category === category) {
        btn.classList.add("active");
      }
    });

  renderAnnouncements();
}

// Filter Announcements (Search)
function filterAnnouncements() {
  renderAnnouncements();
}

// Save Announcement
function saveAnnouncement(id) {
  const announcement = announcementsData.find((a) => a.id === id);
  showToast(`Saved: ${announcement.title}`);
}

// View Details
function viewDetails(id) {
  const announcement = announcementsData.find((a) => a.id === id);
  const content = `
        <div class="space-y-4">
            <div class="flex items-center gap-2 flex-wrap">
                <span class="badge badge-${announcement.category.toLowerCase()}">${
    announcement.category
  }</span>
                <span class="text-text-secondary text-sm">${
                  announcement.date
                }</span>
            </div>
            <p class="text-text-primary leading-relaxed">${
              announcement.fullContent
            }</p>
            <div class="pt-4 border-t border-gray-200">
                <button onclick="saveAnnouncement(${
                  announcement.id
                }); closeModal();" class="btn btn-primary w-full">
                    <i data-lucide="bookmark" class="w-4 h-4 mr-2"></i>
                    Save Announcement
                </button>
            </div>
        </div>
    `;
  openModal(announcement.title, content);
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  renderAnnouncements();
});
