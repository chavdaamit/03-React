import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;

export const getAllEmployee = async () => {
  try {
    const res = await axios.get(`${BASEURL}/all-Employee`);

    if (res.status !== 200) {
      throw new Error("Failed to fetch employee data");
    }

    return res.data.employees;
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
    throw error;
  }
};

export const addEmployee = async (empData) => {
  try {
    const res = await axios.post(`${BASEURL}/add`, empData);

    if (res.status !== 201) {
      throw new Error("Failed to add employee data");
    }

    return res.data;
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
    throw error;
  }
};

export const DeleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`${BASEURL}/${id}`);

    if (res.status !== 200) {
      throw new Error("Failed to delete employee data");
    }


    return res.data;
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
    throw error;
  }
};

export const UpdateEmplpyee = async (id, empData) => {
  try {
    const res = await axios.patch(`${BASEURL}/${id}`, empData);

    if (res.status !== 200) {
      throw new Error("Failed to update employee data");
    }

    
    return res.data;
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
    throw error;
  }
};

export const getEmpById = async (id) => {
  try {
    const res = await axios.get(`${BASEURL}/${id}`);

    if (res.status !== 200) {
      throw new Error("Failed to fetch employee data");
    }

   

    return res.data.employee;
  } catch (error) {
    console.error(
      "Get Employee Error:",
      error.response?.data?.message || error.message,
    );

    throw error;
  }
};
