import { useParams } from "react-router-dom";

const TeamDetails = () => {
  const { id } = useParams();
  return <h2>Team Details for ID: {id}</h2>;
};

export default TeamDetails;
