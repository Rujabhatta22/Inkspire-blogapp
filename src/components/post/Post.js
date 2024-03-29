import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:3000";
  return (
    <div className="post">
      {post.photo && (

      <img className="postImg"
        src={PF+ post.photo}
        alt="music" />
        )}
      <div className="postInfo" id="category"> 
        <div className="postCats">{
          post.categories.map(c => (
            <span className="postCat">{c.name}</span>
          ))
        }
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
          {post.title}
        </span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}
