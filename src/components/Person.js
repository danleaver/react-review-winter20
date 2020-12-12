import { useState } from "react"

const Person = ({person, ...props}) => {
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateAge(person.id, age)
  }

  return (
    <div>
      <div style={{background: "lightblue"}}>{person.name}</div>
      <div style={{background: "lightblue"}}>{person.age}</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Age"
          onChange={(e)=> {
            setAge(e.target.value) 
          }}
        >
        </input> 
        <button>Update Age</button>
      </form>
    
    </div>
  )
}

export default Person