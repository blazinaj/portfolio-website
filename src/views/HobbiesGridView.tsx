import React from "react";
import {GridView} from "@/components/GridView";
import {Interest} from "@/types/Interest";

interface HobbiesGridViewProps {
    hobbies: Interest[];
}

/**
 * Vertical list of projects.
 *
 * Each element has:
 * - icon
 * - name
 * - chips for the technologies used in the project.
 *
 */
export const HobbiesGridView = ({ hobbies }: HobbiesGridViewProps) => {
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

