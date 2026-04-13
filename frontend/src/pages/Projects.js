import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/projects`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;