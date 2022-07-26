import axios from "axios";

export const getDailySetence = async (url) => {
  try {
    const res = await axios.get(`${url}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
