import { useEffect, useState } from "react";
import {
  getPosts,
  addPost,
  updatePost,
  deletePost,
} from "../api/postsApi";

const Messages = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // FETCH
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  // ADD / UPDATE
  const handleSubmit = async () => {
    if (!title.trim()) return;

    if (editingId) {
      await updatePost(editingId, { title });
      setEditingId(null);
    } else {
      await addPost({ title });
    }

    setTitle("");
    loadPosts();
  };

  // EDIT
  const handleEdit = (post) => {
    setTitle(post.title);
    setEditingId(post.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (confirm("Delete this post?")) {
      await deletePost(id);
      
      loadPosts();
      console.log("deleted");
      
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between mb-6">
        
        <h2 className="text-xl font-bold">Posts</h2>

        <div className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title..."
            className="border px-3 py-2 rounded w-64"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      {/* GRID */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded shadow flex flex-col justify-between"
            >
              <p>{post.id}</p>
              <h3 className="font-semibold text-sm line-clamp-2">
                {post.title}
              </h3>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(post)}
                  className="flex-1 bg-yellow-400 text-sm py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="flex-1 bg-red-500 text-white text-sm py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
