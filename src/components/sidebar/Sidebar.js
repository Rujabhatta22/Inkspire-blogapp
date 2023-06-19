import "./sidebar.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
          <div className="sidebarItem">
              <span className="sidebarTitle">ABOUT US</span>
              <img src="images/about.png" alt="aboutus" />
              <p>
                  Welcome to Inkspire!
                  We are passionate about creating a platform that empowers individuals to share their thoughts, experiences, and stories with the world.
                  Our goal is to provide a space where people from all walks of life can come together, connect, and engage in meaningful conversations.
              </p>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem">{c.name}</li>
            ))}
              </ul>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">FOR MORE INFORMATION</span>
              <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                
              </div>
              <div className="sidebarItem">
                <h4>Inkspire@gmail.com</h4>
              </div>
          </div>
      </div>
  )
}
