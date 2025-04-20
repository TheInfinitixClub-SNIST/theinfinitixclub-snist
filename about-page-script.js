let offers = document.getElementById('offfers');
let offerings = [{
    link: "Assets/our-offerings-page-assets/workshops.png",
    heading: "Regular Workshops",
    Button: "recent Workshops"
},
{
  link: "Assets/our-offerings-page-assets/hackathons.png",
  heading: "Hackathons",
  Button: "recent Hackathons"
},
{
  link: "Assets/our-offerings-page-assets/mentor.png",
  heading: "Mentorship Programs",
  Button: "recent Programs"
},
{
  link: "Assets/our-offerings-page-assets/visits.jpg",
  heading: "Industrial Visits",
  Button: "recent Visits"
}
];

function addOfferings(offer) {
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('col');

  let cardDiv = document.createElement('div');
  cardDiv.classList.add("card");
  let img = document.createElement('img');
  img.src = offer.link;
  img.classList.add("card-img-top");
  cardDiv.appendChild(img);

  let bodyDiv = document.createElement('div');
  bodyDiv.classList.add('card-body');
  let h5 = document.createElement('h5');
  h5.textContent = offer.heading;
  bodyDiv.appendChild(h5);
  // let button = document.createElement('button');
  // button.textContent = offer.Button;
  // bodyDiv.appendChild(button);
  cardDiv.appendChild(bodyDiv);

  mainDiv.appendChild(cardDiv);
  offers.appendChild(mainDiv);

}
for (const offer of offerings) {
  addOfferings(offer);
}


let missionConteiner = document.getElementById("missionConteiner");

let missionObj = [
  {
    heading: "Promote Continuous Learning",
    text: "We believe in learning as a lifelong journey. Our platform encourages consistent upskilling through curated resources, expert-led sessions, and exposure to real-world challenges that keep members ahead of the curve.",
  },
  {
    heading: "Hands-On Project Experience",
    text: "Theory is important — but application is everything. We offer opportunities to work on practical, real-world projects that build confidence, strengthen portfolios, and prepare you for professional environments.",
  },
  {
    heading: "Foster Collaboration and Networking",
    text: "Growth thrives in community. We create spaces where learners connect, share knowledge, collaborate on ideas, and form lasting relationships with peers, mentors, and industry professionals.",
  },
  {
    heading: "Cultivate a Culture of Curiosity and Problem Solving",
    text: "Questions drive innovation. We foster an environment that values asking “why” and “how,” encouraging members to explore, experiment, and approach problems with a creative and analytical mindset.",
  },
  {
    heading: "Skill Development and Certification",
    text: "Structured learning pathways and targeted skill development help members progress with purpose. We also provide guidance for earning recognized certifications that validate your expertise and enhance your career prospects.",
  },
];

missionObj.forEach((mission) => {
  let mission_content = document.createElement("div");
  mission_content.classList.add("mission");

  let mission_head = document.createElement("div");
  mission_head.classList.add("mission_head");

  let m_heading = document.createElement("h4");
  m_heading.classList.add("m_heading");
  m_heading.textContent = mission.heading;

  let m_arrow = document.createElement("span");
  m_arrow.classList.add("arrow_span");
  const arrSvg = `
  <svg class="arrow_icon" width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11.9585 18.9583L20.5002 26.25L29.0418 18.9583M11.9585 8.75L20.5002 16.0417L29.0418 8.75" stroke="#D3D3D3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;
  m_arrow.innerHTML = arrSvg;

  let m_desc = document.createElement("div");
  m_desc.classList.add("m_desc");
  m_desc.innerHTML = `<p>${mission.text}</p>`;

  mission_head.appendChild(m_heading);
  mission_head.appendChild(m_arrow);
  mission_content.appendChild(mission_head);
  mission_content.appendChild(m_desc);
  missionConteiner.appendChild(mission_content);

  mission_head.addEventListener("click", () => {
    mission_content.classList.toggle("desc_active");
  });
});

const wareHouseContainer = document.getElementById("wareHouseContainer");

const warehouseObj = [
  {
    heading: "Data Heads",
    text: "These are our expert instructors, crafting and delivering engaging data science sessions. They act as knowledge architects, building the core foundations of your understanding.",
  },
  {
    heading: "Data Guides",
    text: "Our Data Guides are experienced mentors, dedicated to driving teams towards project success. They provide essential guidance and support, ensuring projects stay on track.",
  },
  {
    heading: "Data Groots",
    text: `Our Data Groots are passionate learners, enthusiastically exploring the world of data science. Just like Groot, they grow and evolve with each learning experience.\n"I am Groot" = "I am learning."`,
  },
];

function appendWarehouseCard(entry) {
  const card = document.createElement("div");
  card.classList.add("mission", "house-cont");

  const heading = document.createElement("h4");
  heading.classList.add("m_heading")
  heading.textContent = entry.heading;
  card.appendChild(heading);

  const para = document.createElement("p");

  para.textContent = entry.text;
  para.classList.add("warehouse-para");
  card.appendChild(para);

  wareHouseContainer.appendChild(card);
}

warehouseObj.forEach(entry => appendWarehouseCard(entry));

