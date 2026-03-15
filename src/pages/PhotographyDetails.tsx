import { useParams, Link } from "react-router-dom";
import { photographers } from "../data/photographerData";

const PhotographyDetails = () => {
  const { id } = useParams<{ id: string }>();

  const photgrapherData = photographers.find(
    (photographer) => photographer.id == Number(id),
  );

  return <div>PhotographyDetails</div>;
};

export default PhotographyDetails;
