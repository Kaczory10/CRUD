import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>{props.title}</h5>
        <div>
          <span className="fw-bold">Author: </span>
          <span>{props.author}</span>
        </div>
        <div>
          <span className="fw-bold">Published: </span>
          <span>{props.publishedDate}</span>
        </div>
        <p>{props.shortDescription}</p>
        <div>
            <Link className="btn btn-primary" to={ `/post/${props.id}` }>
                Read more
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
