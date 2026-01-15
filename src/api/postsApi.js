import api from "./axios";

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};


export const addPost = async (data) => {
  const res = await api.post("/posts", data);
  return res.data;
};

export const updatePost = async (id, data) => {
  const res = await api.put(`/posts/${id}`, data);
  return res.data;
};

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`);
};
