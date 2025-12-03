// Clubs Data
const clubsData = [
  {
    id: 1,
    name: "Coding Club",
    category: "Tech",
    description:
      "Learn programming, build projects, and participate in hackathons.",
    fullDescription:
      "The Coding Club is a community of passionate programmers and tech enthusiasts. We organize weekly coding sessions, host workshops on various programming languages and frameworks, and participate in national hackathons. Members collaborate on open-source projects and get mentorship from senior developers. Whether you're a beginner or an expert, there's something for everyone!",
    members: 150,
    bannerClass: "club-banner-1",
  },
  {
    id: 2,
    name: "Photography Club",
    category: "Art",
    description:
      "Capture moments, learn techniques, and showcase your creative vision.",
    fullDescription:
      "Join the Photography Club to explore the art of visual storytelling. We organize photo walks, exhibitions, and workshops covering topics from basic composition to advanced editing. Members get access to professional equipment and participate in campus event coverage. Our annual photo exhibition showcases the best work from our talented members.",
    members: 85,
    bannerClass: "club-banner-2",
  },
  {
    id: 3,
    name: "Debate Society",
    category: "Academic",
    description:
      "Sharpen your argumentation skills and engage in intellectual discussions.",
    fullDescription:
      "The Debate Society provides a platform for students to develop critical thinking and public speaking skills. We conduct regular debate sessions on current affairs, organize inter-college competitions, and host guest speakers. Members receive training in various debate formats including parliamentary, Lincoln-Douglas, and policy debate.",
    members: 62,
    bannerClass: "club-banner-3",
  },
  {
    id: 4,
    name: "Basketball Team",
    category: "Sport",
    description:
      "Play competitive basketball and represent the college in tournaments.",
    fullDescription:
      "The Basketball Team welcomes players of all skill levels. We practice three times a week and compete in inter-college tournaments throughout the year. Professional coaches provide training sessions focusing on technique, strategy, and teamwork. Team members get access to the sports complex and participate in community outreach programs.",
    members: 45,
    bannerClass: "club-banner-4",
  },
  {
    id: 5,
    name: "Music Society",
    category: "Music",
    description:
      "Express yourself through music - from classical to contemporary.",
    fullDescription:
      "The Music Society celebrates all forms of musical expression. We have bands, orchestras, and solo performers who practice regularly and perform at campus events. The society organizes workshops on various instruments, vocal training, and music production. Our annual concert is one of the most anticipated events on campus.",
    members: 118,
    bannerClass: "club-banner-5",
  },
  {
    id: 6,
    name: "Environmental Club",
    category: "Social",
    description:
      "Make a difference through sustainability initiatives and awareness campaigns.",
    fullDescription:
      "The Environmental Club is dedicated to creating a sustainable campus and raising environmental awareness. We organize tree plantation drives, waste management workshops, and recycling campaigns. Members participate in policy discussions and collaborate with local NGOs. Join us to make a positive impact on our planet!",
    members: 97,
    bannerClass: "club-banner-6",
  },
  {
    id: 7,
    name: "Robotics Club",
    category: "Tech",
    description:
      "Design, build, and program robots for competitions and innovation.",
    fullDescription:
      "The Robotics Club brings together engineering enthusiasts to work on cutting-edge robotics projects. We participate in national robotics competitions, build autonomous systems, and explore AI integration. The club provides access to 3D printers, microcontrollers, and other equipment. Regular workshops cover topics from basic electronics to advanced control systems.",
    members: 73,
    bannerClass: "club-banner-7",
  },
  {
    id: 8,
    name: "Drama Club",
    category: "Art",
    description:
      "Perform on stage and explore the world of theater and acting.",
    fullDescription:
      "The Drama Club stages multiple productions each year, from classical plays to modern experimental theater. Members develop acting skills, learn stage management, and explore costume and set design. We also conduct improvisation workshops and participate in inter-college theater festivals. No prior experience necessary - just bring your passion!",
    members: 56,
    bannerClass: "club-banner-8",
  },
];

// State
let currentCategory = "All";

// Render Clubs
function renderClubs() {
  const container = document.getElementById("clubs-container");
  const searchQuery = document
    .getElementById("club-search")
    .value.toLowerCase();

  const filtered = clubsData.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery) ||
      club.description.toLowerCase().includes(searchQuery);
    const matchesCategory =
      currentCategory === "All" || club.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  container.innerHTML = filtered
    .map(
      (club) => `
        <div class="card overflow-hidden">
            <div class="h-32 ${
              club.bannerClass
            } flex items-center justify-center">
                <h3 class="text-white text-center px-4 poppins">${
                  club.name
                }</h3>
            </div>
            
            <div class="p-6 space-y-4">
                <div class="flex items-center justify-between">
                    <span class="badge badge-${club.category.toLowerCase()}">${
        club.category
      }</span>
                    <div class="flex items-center gap-1 text-text-secondary text-sm">
                        <i data-lucide="users" class="w-4 h-4"></i>
                        <span>${club.members} members</span>
                    </div>
                </div>
                
                <p class="text-text-secondary text-sm">${club.description}</p>
                
                <div class="flex gap-2 pt-2">
                    <button onclick="joinClub(${
                      club.id
                    })" class="btn btn-primary btn-sm flex-1">
                        Join Club
                    </button>
                    <button onclick="viewDetails(${
                      club.id
                    })" class="btn btn-secondary btn-sm">
                        <i data-lucide="eye" class="w-4 h-4"></i>
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

  document.querySelectorAll("#club-filters .filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    }
  });

  renderClubs();
}

// Filter Clubs (Search)
function filterClubs() {
  renderClubs();
}

// Join Club
function joinClub(id) {
  const club = clubsData.find((c) => c.id === id);
  showToast(`Joined: ${club.name}`);
}

// View Details
function viewDetails(id) {
  const club = clubsData.find((c) => c.id === id);

  const memberAvatars = Array.from(
    { length: 8 },
    (_, i) =>
      `<div class="w-10 h-10 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-white text-sm">${String.fromCharCode(
        65 + i
      )}</div>`
  ).join("");

  const content = `
        <div class="space-y-6">
            <div class="h-40 ${
              club.bannerClass
            } rounded-lg flex items-center justify-center">
                <h2 class="text-white poppins">${club.name}</h2>
            </div>
            
            <div class="flex items-center gap-4 flex-wrap">
                <span class="badge badge-${club.category.toLowerCase()}">${
    club.category
  }</span>
                <div class="flex items-center gap-2 text-text-secondary">
                    <i data-lucide="users" class="w-5 h-5"></i>
                    <span>${club.members} members</span>
                </div>
            </div>
            
            <div>
                <h4 class="text-text-primary mb-2 poppins">About</h4>
                <p class="text-text-primary leading-relaxed">${
                  club.fullDescription
                }</p>
            </div>
            
            <div>
                <h4 class="text-text-primary mb-3 poppins">Active Members</h4>
                <div class="flex -space-x-2 flex-wrap">
                    ${memberAvatars}
                    <div class="w-10 h-10 rounded-full bg-background border-2 border-white flex items-center justify-center text-text-primary text-xs">
                        +${club.members - 8}
                    </div>
                </div>
            </div>
            
            <div class="pt-4 border-t border-gray-200">
                <button onclick="joinClub(${
                  club.id
                }); closeModal();" class="btn btn-primary w-full">
                    Join ${club.name}
                </button>
            </div>
        </div>
    `;
  openModal(club.name, content);
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  renderClubs();
});
