import { useEffect, useState } from "react";
import axios from 'axios';
import Person from './Person';

const GetAgeFromAPI = (props) => {
  const [ nameAndAgeList, setNameAndAgeList ] = useState([]);
  const [ currentId, setCurrentId ] = useState(0);

  useEffect(() => {
    if (props.finalName.length === 0) return;

    axios.get(`https://api.agify.io/?name=${props.finalName}`)
      .then(res => {
        setNameAndAgeList([
          ...nameAndAgeList, {id: currentId, name: props.finalName, age: res.data.age}
        ])
        setCurrentId(currentId + 1)
      })
  }, [props.finalName])


  const updateAge = (incomingId, incomingAge) => {
    let updatedList = nameAndAgeList.map( person => {
      if (person.id === incomingId) {
        return {...person, age: incomingAge}
      }
      return person
    })

    console.log(updatedList)

    setNameAndAgeList(updatedList)

  }

  return (
    <div>
      {nameAndAgeList.map((person, index) => (
        <Person updateAge={updateAge} key={index} person={person} />
      ))}
    </div>
  )
}

export default GetAgeFromAPI

