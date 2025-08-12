import axios from "axios";

export const fetchSpecific = async (url) => {
  try {
    const res = await axios.get(url); // This sends a GET request to backend.
    return res.data;
  } catch (error) {
    return console.log("Error in fetching note", error);
  }
};
