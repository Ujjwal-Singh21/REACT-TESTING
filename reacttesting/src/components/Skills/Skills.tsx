import { useState, useEffect } from "react";
import { SkillsProps } from "./Skills.type";

export const Skills = (props: SkillsProps) => {

  const [isLoggedIn, setisLoggedIn] = useState(false)

  const { skills } = props

  useEffect(() => {
    setTimeout(() => {
      setisLoggedIn(true)
    }, 1001)
  }, [])

  return (
    <>
      <ul>
        {
          skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))
        }
      </ul>

      {
        isLoggedIn ? 
        (
          <button> Start Learning </button>
        ) :
        (
          <button onClick={() => setisLoggedIn(true)}> Login </button>
        )
      }
    </>
  )
}
