import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newBlog) => {
  const header = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newBlog, header);
  return response.data;
};

const update = async (id, newBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`, newBlog);
  return response.data;
};

const deleteOne = async (id) => {
  const header = {
    headers: { Authorization: token },
  };
  const deletedBlog = await axios.delete(`${baseUrl}/${id}`, header);
  return deletedBlog;
};
const blogService = {
  getAll,
  create,
  update,
  deleteOne,
  setToken,
};

export default blogService;
