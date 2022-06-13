import "./education.scss"

export default function Education() {
  return (
    <div className="education" id = "education">
      <div className="left">
        <div className="school">
          <h1>Education</h1>
          <h2>Bachelor of Science in Engineering - University of Alberta</h2>
          <h3>Edmonton AB, Canada.  September 2015 - June 2020</h3>
          <h2>Master of Engineering in Software Engineering & Intelligent Systems - University of Alberta</h2>
          <h3>Edmonton AB, Canada.  September 2020 - January 2022 (GPA 3.96)</h3>
        </div>
        <div className="scholarships">
          <h2>Scholarships</h2>
          <h3>Faculty of Engineering Academic Excellence Scholarship 2015 - 2016</h3>
          <h3>International Student Scholarship 2015 - 2018</h3>
        </div>

        <div className="logo">
          <img src="assets/eng_logo.png" alt=""/>
        </div>
        
      </div>

      <div className="right">
        <div className="uofa-campus">
          <img src="assets/ualberta-north-campus.jpeg" alt=""/>
        </div>
        <div className="uofa-logo">
          <img src="assets/uofa_logo.png" alt=""/>
        </div>
      </div>
    </div>
  )
}
