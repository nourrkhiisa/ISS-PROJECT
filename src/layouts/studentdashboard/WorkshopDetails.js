import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WorkshopDetails() {
  let { id } = useParams();
  const [workshop, setWorkshop] = useState(null);

  useEffect(() => {
    // Fetch the workshop details using the ID
    fetch(`/api/workshop/${id}`)
      .then((response) => response.json())
      .then((data) => setWorkshop(data));
  }, [id]);

  if (!workshop) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{workshop.name}</h1>
      <p>{workshop.description}</p>
      <h2>Coach Details</h2>
      <p>{workshop.coachName}</p>
      <p>{workshop.coachProfession}</p>
    </div>
  );
}

export default WorkshopDetails;
