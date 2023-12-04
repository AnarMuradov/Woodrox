import React from "react";
import Card from "./Card";
import "./style.css";
const ProjectCards = () => {
  return (
    <div className="ProjectsCardContainer">
      <Card
        image={
          "https://preview.colorlib.com/theme/woodrox/img/projects/projects-1.jpg.webp"
        }
      />
      <Card
        image={
          "https://preview.colorlib.com/theme/woodrox/img/projects/projects-2.jpg.webp"
        }
      />
      <Card
        image={
          "https://preview.colorlib.com/theme/woodrox/img/projects/projects-3.jpg.webp"
        }
      />
      <Card
        image={
          "https://preview.colorlib.com/theme/woodrox/img/projects/projects-4.jpg.webp"
        }
      />
    </div>
  );
};

export default ProjectCards;
