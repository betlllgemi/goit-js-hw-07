const images = [
  {
    url: "./images/planning.jpg", 
    alt: "Team working on website wireframes and planning with sticky notes",
  },
  {
    url: "./images/innovation.jpg", 
    alt: "Hand holding a glowing light bulb against a colorful sunset background",
  },
  {
    url: "./images/mobile-design.jpg", 
    alt: "Person holding a smartphone displaying a minimalist web design",
  },
  {
    url: "./images/conference-room.jpg",
    alt: "Modern spacious conference room with a large wooden table and pink chairs",
  },
  {
    url: "./images/creative-office.jpg",
    alt: "Vibrant creative office space with a ping pong table and colorful walls",
  },
  {
    url: "./images/coworking.jpg",
    alt: "Large open plan office filled with people working on their laptops",
  }
];

const galleryList = document.querySelector('.gallery');

const markup = images
  .map(image => `<li class="gallery-item"><img class="gallery-img" src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

galleryList.insertAdjacentHTML("afterbegin", markup);