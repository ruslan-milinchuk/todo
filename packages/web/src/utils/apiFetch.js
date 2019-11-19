const apiFetch = async (url, options) => {
  const res = await fetch(`http://localhost:4000/tasks${url}`, options);
  return await res.json();
};

export default apiFetch;
