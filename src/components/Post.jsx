import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/PostListStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          {post.tags.map((tg) => (
            <span key={tg} className="badge text-bg-primary hashtag">
              {tg}
            </span>
          ))}

          <div className="alert alert-success reactions">
            This Post is reacted by {post.views} peoples.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
