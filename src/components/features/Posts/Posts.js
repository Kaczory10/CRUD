import { useSelector } from "react-redux";
import { getAllPosts } from "../../../store/postsRedux";
import Post from "../Post/Post";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div>
      <div className="d-flex align-flex-center justify-content-between p-3">
        <h2>All posts</h2>
        <Link to="/post/add" className="btn btn-outline-primary">Add post</Link>

      </div>
      <div className="d-flex gap-3 flex-wrap px-3">
        {posts.map((post) => (
          <Post {...post} key={ post.id } />
        ))}
      </div>
    </div>
  );
};

export default Posts;
