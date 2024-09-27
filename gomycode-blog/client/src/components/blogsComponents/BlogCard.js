import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <Link to={`/blogs/${props.blogId}`} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
