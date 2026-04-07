import React from "react";
import restApiData from "../restApi.json";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Our passionate team works together to create exceptional dishes, deliver outstanding service, and ensure every guest enjoys a memorable dining experience.
          </p>
        </div>
        <div className="team_container">
          {restApiData.data[0].team.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;