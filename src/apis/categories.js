import { instance } from ".";

const getAllCategories = async () => {
  const res = await instance.get("");
  return res.data;
};

export { getAllCategories };