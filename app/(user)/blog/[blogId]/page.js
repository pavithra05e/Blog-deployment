const BlogId = ({ params }) => {
  const id = params.blogId;

  return (
    <div className="detail-container">
      <img src={`/images/image${id}.png`} className="detail-image" />
      <h2>Blog {id} description.</h2>
    </div>
  );
};

export default BlogId;