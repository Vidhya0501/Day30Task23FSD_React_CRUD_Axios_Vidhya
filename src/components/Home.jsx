import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://651666ac09e3260018c9b81d.mockapi.io/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?");
    if (confirm) {
      axios
        .delete("https://651666ac09e3260018c9b81d.mockapi.io/users/" + id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="m-2">
      <h4>User Data</h4>
      <Link to="/create" className="btn btn-success mb-2">Create</Link>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>

            <th scope="col">Website</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{d.name}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>

              <td>{d.website}</td>
              <td>{d.phone}</td>
              <td>{d.company.name}</td>
              <td>{d.address.city}</td>

              <td>
                <Link to={`/view/${d.id}`} className="btn btn-primary me-1">
                  View
                </Link>
                <Link to={`/edit/${d.id}`} className="btn btn-warning me-1">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
