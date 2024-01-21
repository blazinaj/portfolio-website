import React from "react";
import { GridView } from "../components/GridView";

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
      // @ts-ignore
      items={hobbies.map((hobby) => ({
        title: hobby.name,
        subTitle: hobby.description,
      }))}
    />
  );
};

const MOCK_HOBBIES = [
  {
    id: 0,
    name: "Family",
    description:
      "Spending time with my wife and kids. I'm close with my parents and siblings, and we operate as a team to support each other.",
  },
  {
    id: 1,
    name: "Power Sports",
    description:
      "I love to ride motorcycles, ATVs, and Side by Sides. I've been riding since I was a kid, and I love the feeling of freedom and adventure as well as the responsibility of maintaining and operating the machines.",
  },
  {
    id: 2,
    name: "Camping",
    description:
      "I spend a lot of time camping with my family and friends. Tent camping, hammock camping, or in a trailer; I love the outdoors and the feeling of being self-sufficient.",
  },
  {
    id: 3,
    name: "3D Printing",
    description:
      "I'm a creator at heart. I love to design and build things, and 3D printing is a great way to use my development skills to create physical objects. I share this hobby with my kids, and we love to design and print things together.",
  },
  {
    id: 4,
    name: "Gaming",
    description:
      "I've been a gamer since I was a kid. I love to play games with my kids, and I love to play games with my friends. I'm a big fan of strategy, racing, and RPG games. I have a special passion for VR gaming, especially racing simulators.",
  },
  {
    id: 5,
    name: "Music",
    description:
      "Forever a musical novice, I grew up playing trumpet in school bands. As an adult, I've very slowly been learning to play piano which has been challenging and fun.",
  },
];
