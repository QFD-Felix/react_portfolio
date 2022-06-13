import ProjectList from "../projectList/ProjectList"
import { useEffect, useState } from "react";
import "./projects.scss"
import { mlProject, softwareProject, hardwareProject, mobileProject, gameProject} from "../../project_data";

export default function Projects() {
  const[selected, setSelected] = useState("ml");
  const[data, setData] = useState([]);
  const list = [
    {
      id: "ml",
      title: "Machine Learning",
    },
    {
      id: "software",
      title: "Software Projects",
    },
    {
      id: "hardware",
      title: "With Hardware",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "game",
      title: "Small Game",
    },
  ]

  useEffect(() => {
    switch(selected){
      case "ml":
        setData(mlProject);
        break;
        case "software":
        setData(softwareProject);
        break;
        case "hardware":
        setData(hardwareProject);
        break;
        case "mobile":
        setData(mobileProject);
        break;
        case "game":
        setData(gameProject);
        break;
        default:
          setData(mlProject);
    }
  }, [selected])

  // const l = [
  //   {
  //     id: 1,
  //     line: [{li:"asdfasf"}, {li:"dfasdfd"}],
  //   }
  // ]

  return (
    <div className='projects' id = "projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item)=>(
          <ProjectList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected} 
          id={item.id}/>
        ))}
        {/* {l.map((item) => (item.line.map((itee) => ( <li>{itee.li}</li>))))} */}

      </ul>
      <div className="container">

      {data.map(d => (
        <div className="item">
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>
          <span>{d.detail}</span>
        </div>
      ))}

      </div>
    </div>
  )
}
