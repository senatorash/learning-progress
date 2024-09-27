import { useEffect } from "react";
import BlogCard from "./BlogCard";
import { useGetAllBlogsMutation } from "../../lib/blogsApi/blogsApi";

const AllBlogs = () => {
  // initialise redux toolkit query hook
  const [getAllBlogs, { isError, isLoading, isSuccess, data }] =
    useGetAllBlogsMutation();
  useEffect(() => {
    // fetch all blogs
    getAllBlogs(1);
  }, [getAllBlogs]);

  //  Handle success state and render blogs

  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {isError && <h1>Something went wrong</h1>}
        {isLoading && <h1>Please Wait...</h1>}
        {isSuccess && data.length > 0 ? (
          data.map((blog) => {
            return (
              <BlogCard
                key={blog._id}
                blogId={blog._id}
                title={blog.title}
                content={blog.content}
              />
            );
          })
        ) : (
          <h1>No blogs available</h1>
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
