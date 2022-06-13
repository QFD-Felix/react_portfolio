import "./intro.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="ImgContainer">
            <img src = "assets/man.jpg" alt=""/>
          </div>
        </div>

        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Qiufeng Du</h1>
            <h3>Software Developer</h3>
          </div>
          <a href="#education">
            <ArrowBackIosNewIcon className="Arrow"/>
          </a>
          
        </div>
    </div>
  )
}
