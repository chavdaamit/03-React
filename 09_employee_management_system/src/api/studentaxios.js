import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;

export const getAllEmployee = async () => {
  try {
    const res = await axios(`${BASEURL}/all-Employee`);

    if (res.status !== 200) {
      throw new Error("faild to fetch employee data");
    }

    return res.data.employees;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const addEmployee = async (empData) => {
  try {
    const res = await axios.post(`${BASEURL}/add`, empData);

    if (res.status !== 201) {
      throw new Error("faild to fetch employee data");
    }

    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const DeleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`${BASEURL}/${id}`);

    if (res.status !== 200) {
      throw new Error("Failed to delete Employee data");
    }

    console.log("Delete Response", res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
