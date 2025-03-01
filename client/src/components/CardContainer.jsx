import Card from "./Card"
import TOP from "../assets/odin-project.png"
import FSO from "../assets/full-stack-open.png"
import CS50P from "../assets/cs50p.png"
import D2L from "../assets/d2l.png"
import JakesResume from "../assets/jakes-resume.png"
import NeetCode from "../assets/neetcode.png"
import Handbook from "../assets/tech-interview-handbook.png"
import OSSU from "../assets/ossu.png"
import MissingSemester from "../assets/missing-semester.png"
import JavaProgramming from "../assets/java-programming.png"
 
const CardContainer = () => {
    return (
        <div className="flex flex-wrap  justify-around gap-50 pb-15 pl-20 pr-20">
        <Card image={TOP} name="The Odin Project" desc="Great intro into web development" link="https://www.theodinproject.com/" />
        <Card image={FSO} name="Full Stack Open" desc="Amazing resource to learn about more modern web development with a backend focus" link="https://fullstackopen.com/en/" />
        <Card image={CS50P} name="CS50’s Introduction to Programming with Python" desc="A great way to build a solid foundation in Python programming" link="https://cs50.harvard.edu/python/2022/" />
        <Card image={D2L} name="Dive into Deep Learning" desc="Will take you from 0 to hero with deep learning" link="https://d2l.ai/index.html" />
        <Card image={JakesResume} name="Jake's Resume" desc="The absolute best resume for recruiters in tech and ATS systems" link="https://g.co/kgs/ZrzTdLPhttps://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs" />
        <Card image={NeetCode} name="NeetCode" desc="Amazing leetcode roadmap" link="https://neetcode.io/" />
        <Card image={Handbook} name="Technical Interview Handbook" desc="In-depth explanation and guide of the technical interview process" link="https://www.techinterviewhandbook.org/" />
        <Card image={OSSU} name="Open Source Society University" desc="A bunch of free top tier resources for a complete educaiton in CS" link="https://github.com/ossu/computer-science" />
        <Card image={MissingSemester} name="Missing Semester of Your CS Education" desc="Introduction into the tools that will pay dividends in your SWE journey" link="https://missing.csail.mit.edu/" />
        <Card image={JavaProgramming} name="Java Programming MOOC" desc="Learn java, complete with exercises and an auto grader" link="https://java-programming.mooc.fi/" />
      </div>
    )
}

export default CardContainer