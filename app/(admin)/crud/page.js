'use client';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { books, addBook, deleteBook } from "@/data/books";

const AdminCrud = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  // Protect the route
  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/admin/login'); 
    }
  }, []);

  const handleAdd = () => {
    if (title && desc && image) {
      addBook({ title, description: desc, image });
      setTitle(""); setDesc(""); setImage("");
      alert("Book added!");
    }
  };

  const handleDelete = (id) => {
    deleteBook(id);
    alert("Book deleted!");
  };

//   const handleLogout = () => {
//     localStorage.removeItem('isAdmin');
//     router.push('/admin/login');
//   };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Add a New Book</h2>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>

      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <input placeholder="Image Path" value={image} onChange={(e) => setImage(e.target.value)} />
      <button onClick={handleAdd}>Add Book</button>

      <h2>Books List</h2>
      <div className="container">
        {books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image} className="image" />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCrud;
