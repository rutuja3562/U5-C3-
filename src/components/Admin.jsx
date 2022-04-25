import axios from "axios";
import { useState } from "react";

export const Admin = () => {
const [user, setUser] = useState({
  employee_name: "",
  employee_id: "",
  select: "",
  salary: "",
  image: "",
  username: "",
  password: "",
  tasks: "",
  status: "",
  team:""
});

const handleChange=(e)=>{
  const {name, value} = e.target
  setUser({
    ...user,
    [name] :value
  })
}

const handleSubmit=(e)=>{
  e.preventDefault();
 const payload={
employee_name: "",
  employee_id: "",
  select: "",
  salary: "",
  image: "",
  username: "",
  password: "",
  tasks: "",
  status: "",
  team:""
 }
 fetch("http://localhost:8080/employee",{
   metod:"POST",
   headers:{"content-type":"application/json"},
   body:JSON.stringify(payload),
 })
setUser(user)
console.log(payload)
}

  return (
    <form className="createEmployee" >
      <input
        onChange={handleChange}
        type="text"
        placeholder="Employee Name"
        name="employee_name"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Employee id"
        name="employee_id"
      />
      <select onChange={handleChange} name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        onChange={handleChange}
        type="number"
        placeholder="Salary"
        name="salary"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Image"
        name="image"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="User Name"
        name="username"
      />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      />
      <select onChange={handleChange} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleChange} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input
        onSubmit={handleSubmit}
        className="createUser"
        type="submit"
        value={"submit"}
      />
    </form>
  );
};
