import React, { useState } from "react";
import { Link } from "react-router-dom";
import './projects.css'

export default function Projects() {
  const [projects, setprojects] = useState([
    {
      id: "1",
      name: "To do list",
      desc: "A To do list app using React and Bootstrap",
      gitRep: "https://github.com/ShiroNhL2077/react-to-do-list-1/tree/master",
      pic: "todolist.jpg",
    },
    {
      id: "2",
      name: "E-shop",
      desc: "An E-shop app using React and Bootstrap",
      gitRep:
        "https://github.com/medayoubammar/E-commerce-laravel6/tree/show-products",
      pic: "eshop.jpg",
    },
    {
      id: "3",
      name: "Streaming site",
      desc: "A Streaming site To do lis app using React and Bootstrap",
      gitRep: "https://github.com/ShiroNhL2077/login-react",
      pic: "streaming.jpg",
    },
    {
      id: "4",
      name: "Gallery",
      desc: "A Gallery app using React and Bootstrap",
      gitRep: "",
      pic: "gallery.jpg",
    },
  ]);
  return (
    <div className="container container--">
      <div className="row row-- justify-content-evenly">
          {projects &&
            projects.map((item) => (
              <div key={item.id} className="col-5 card-- my-1 p-1 d-flex justify-content-between">
                <img src={item.pic} className="card--img" alt="" />
                <div className="p-5">
                  <p className="m-0 p-0 lead fw-bold">{item.name}</p>
                  <p className="m-0 p-0">{item.desc}</p>
                  <button className="btn btn-primary mt-2"><Link to={item.gitRep} className="fw-bold text-decoration-none link-light">GIthub Repository</Link></button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
