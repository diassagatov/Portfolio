import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const ProjectFull = ({params}) => {
    const param = useParams();
    return <>
        <Navbar/>
        {param["name"]}
    </>
}


export default ProjectFull;