import { books } from "@/data/books";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="container">
      {books.map((blog) => (
        <div className="card" key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <img src={blog.image} alt={blog.title} className="image" />
          </Link>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
