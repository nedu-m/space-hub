import commander from "../../assets/crew/image-douglas-hurley.png";
import commanderWebp from "../../assets/crew/image-douglas-hurley.webp";

import missionSpecialist from "../../assets/crew/image-mark-shuttleworth.png";
import missionSpecialistWebp from "../../assets/crew/image-mark-shuttleworth.webp";

import pilot from "../../assets/crew/image-victor-glover.png";
import pilotWebp from "../../assets/crew/image-victor-glover.webp";

import engineer from "../../assets/crew/image-anousheh-ansari.png";
import engineerWebp from "../../assets/crew/image-anousheh-ansari.webp";

export const crewData = [
  {
    id: 1,
    name: "Douglas Hurley",
    images: {
      png: commander,
      webp: commanderWebp,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 2,
    name: "Mark Shuttleworth",
    images: {
      png: missionSpecialist,
      webp: missionSpecialistWebp,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 3,
    name: "Victor Glover",
    images: {
      png: pilot,
      webp: pilotWebp,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: 4,
    name: "Anousheh Ansari",
    images: {
      png: engineer,
      webp: engineerWebp,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];