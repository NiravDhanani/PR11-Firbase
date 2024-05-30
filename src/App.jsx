import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, VIEW_USER } from "./action/action";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const alluse = useSelector((state) => state.FirebaseReducer.user);

  const FormHandle = (e) => {
    e.preventDefault();
    let obj = {
      userId: Math.floor(Math.random() * 100),
      name,
      email,
      phone,
      company,
      message,
    };

    dispatch(ADD_USER(obj));

    setName("");
    setCompany("");
    setPhone("");
    setMessage("");
    setEmail("");
  };

  useEffect(() => {
    dispatch(VIEW_USER());
  }, [FormHandle]);

  useEffect(() => {
    setData(alluse);
  }, [alluse]);

  return (
    <div className="container main">
      <h1 className="d-flex justify-content-center border-bottom mb-5 ">Email Us</h1>
      <div className="row">
      <div className="col-lg-6 border-bottom mb-3">
          <h2 className="d-flex justify-content-center ">Enter Data</h2>
          <form className="d-flex flex-wrap" onSubmit={FormHandle}>
            <div className="px-2 w-50 my-2">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="px-2 w-50 my-2">
              <label>Company</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />
            </div>
            <div className="px-2 w-50 my-2">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="px-2 w-50 my-2">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="px-2 w-100 my-2">
              <label>Message</label>
              <textarea
                className="form-control"
                placeholder="Enter Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <div className="px-2 w-100 my-2 d-flex justify-content-center">
              <button className="btn btn-primary ">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-6 ">
          <h2 className="d-flex justify-content-center " >View Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                Object.entries(data).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.company}</td>
                    <td>{value.phone}</td>
                    <td>{value.message}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
    
      </div>
    </div>
  );
}

export default App;
