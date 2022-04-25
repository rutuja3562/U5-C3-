import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const EmployeeDetails = () => {
  const [data, setData] = useState({});
  const [sts, setSts] = useState("terminated");
  const [show,setShow] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
      setData(data);
    });
  },[]);
  return (
    <div className="user_details">
      <img className="user_image" src={data.image} />
      <h4 className="user_name"> {data.employee_name}</h4>
      <span className="user_salary">${data.salary}</span>
      <span className="tasks">
        <li className="task">{data.tasks}</li>
      </span>
      Status: <b className="status">{data.status}</b>
      <br />
      Title: <b className="title">{data.team}</b>
      <br />
      {/* Show this button only if user is not already terminated (users status is working) */}
     
      <button    >
        Fire Employee
      </button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
