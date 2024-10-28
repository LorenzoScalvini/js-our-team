const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// Funzione per generare le card dei membri del team
function displayTeamMembers() {
  const teamContainer = document.getElementById("team-cards");

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
          <div class="card">
              <img src="${member.img}" class="card-img-top" alt="${member.name}">
              <div class="card-body bg-dark">
                  <h5 class="card-title text-light">${member.name}</h5>
                  <h6 class="card-subtitle mb-2 text-light">${member.role}</h6>
                  <p class="card-text text-light">Email: <a href="">${member.email}</a></p>
              </div>
          </div>
      `;

    teamContainer.appendChild(card);
  }
}

//Chiamo la funzione per visualizzare un output nell'html
displayTeamMembers();
