import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className="list_container">
 

      {data.map((data, i) => {
        return (
          <div className="employee_card" key={i}>
            <Link className="employee_card" to={`/employees/${data.id}`}>
              <img className="employee_image" src={data.image} />
              <span className="employee_name">{data.employee_name}</span>
              <span className="employee_title">{data.employee_title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
