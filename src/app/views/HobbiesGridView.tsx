import React from "react";
import { GridView } from "../components/GridView";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ForestIcon from "@mui/icons-material/Forest";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhishingIcon from "@mui/icons-material/Phishing";
import PetsIcon from "@mui/icons-material/Pets";
import PianoIcon from "@mui/icons-material/Piano";

/**
 * Vertical list of projects.
 *
 * Each element has:
 * - icon
 * - name
 * - chips for the technologies used in the project.
 *
 * @param projects
 * @constructor
 */
export const HobbiesGridView = ({ hobbies = MOCK_HOBBIES }) => {
  return (
    <GridView
      items={hobbies.map((hobby) => ({
        id: hobby.id,
        title: hobby.name,
        subTitle: hobby.description,
        icon: hobby.icon,
      }))}
    />
  );
};

const MOCK_HOBBIES = [
  {
    id: 0,
    name: "Family",
    description:
      "Spending time with my wife and kids, we operate as a team to support each other.",
    icon: <FamilyRestroomIcon />,
  },
  {
    id: 1,
    name: "Power Sports",
    description: "I love to ride motorcycles, ATVs, and Side by Sides.",
    icon: <TwoWheelerIcon />,
  },
  {
    id: 2,
    name: "Camping",
    description:
      "Tent camping, hammock camping, or in a trailer; I love the outdoors and the feeling of being self-sufficient.",
    icon: <ForestIcon />,
  },
  {
    id: 3,
    name: "3D Printing",
    description:
      "I'm a creator at heart, and 3D printing is a great way to use my development skills to create physical objects.",
    icon: <ViewInArIcon />,
  },
  {
    id: 4,
    name: "Gaming",
    description:
      "I play games with my kids my friends. I'm a big fan of strategy, racing, and RPG games. I have a recent passion for VR racing and flight simulators",
    icon: <SportsEsportsIcon />,
  },
  {
    id: 5,
    name: "Music",
    description:
      "I grew up playing trumpet in school bands. As an adult, I've very slowly been learning to play piano which has been challenging and fun.",
    icon: <PianoIcon />,
  },
  {
    id: 6,
    name: "Fishing",
    description:
      "They don't call it 'catching' for a reason. I primarily fish high lakes for rainbow and brook trout",
    icon: <PhishingIcon />,
  },
  {
    id: 7,
    name: "Pets",
    description: "Dogs, cats, horses, goats, and chickens. They're all great.",
    icon: <PetsIcon />,
  },
];
