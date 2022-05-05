// export default education
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";
// import StarIcon from "@material-ui/icons/Star";

import React from 'react'
import './education.css'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { Star } from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import { School } from '@mui/icons-material';
import "react-vertical-timeline-component/style.min.css";
import { fontSize } from '@mui/system';
function Education() {
  return (
    <div className="App">
      <h1 className='ed'>Education</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2019 - 2023"
          iconStyle={{ background: "#6495ED", color: "#fff"}}
          icon={<School />}
        >
          <h2>
          Bachelor of Technology Degree
          </h2>
          <h2 className="vertical-timeline-element-subtitle" style={{color:"rgb(0, 0, 0)",fontSize :15}}>Kalinga Institute of Industrial technology, Bhubaneshwar</h2>
          <h4 style={{color:"rgb(0, 0, 0)",fontSize :15}}>
          Department: Information Technology
          </h4>
          <h3  style={{color:"rgb(0, 0, 0)",fontSize :15}}>CGPA: 7.56/10.00</h3>
          <p style={{color:"rgb(0, 0, 0)",fontSize :15}}>
          Courses: Data Structures, Algorithms, OOP, DBMS, Computer Networking, OS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2017 - May 2019"
          iconStyle={{ background: "#6495ED", color: "#fff"}}
          icon={<School />}
        >
          <h2>
          Higher Secondary School
          </h2>
          <h2 className="vertical-timeline-element-subtitle" style={{color:"rgb(0, 0, 0)",fontSize :15}}> De Nobili School CMRI,Dhanbad</h2>
          <h4 style={{color:"rgb(0, 0, 0)",fontSize :15}}>
          Council For The Indian School Certificate Examinations (ISC)
          </h4>
          <h3  style={{color:"rgb(0, 0, 0)",fontSize :15}}> Percentage: 77.8%</h3>
          <p style={{color:"rgb(0, 0, 0)",fontSize :15}}>
          Courses: Science (Physics, Chemistry,
           Mathematics) + Biology (Elective) + English
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2015 - April 2017"
          iconStyle={{ background: "#6495ED", color: "#fff"}}
          icon={<School />}
        >
          <h2>
          Secondary School
          </h2>
          <h2 className="vertical-timeline-element-subtitle" style={{color:"rgb(0, 0, 0)",fontSize :15}}> De Nobili School CMRI,Dhanbad</h2>
          <h4 style={{color:"rgb(0, 0, 0)",fontSize :15}}>
          Council For The Indian School Certificate Examinations (ICSE)
          </h4>
          <h3  style={{color:"rgb(0, 0, 0)",fontSize :15}}> Percentage: 88.9%</h3>
          <p style={{color:"rgb(0, 0, 0)",fontSize :15}}>
          Courses: English, Hindi, History, Civics and Geography,
           Mathematics,Science (Physics, Chemistry, Biology), Computer Applications
           </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Star />}
        /> */}
      </VerticalTimeline>
    </div>
  );
}
export default Education