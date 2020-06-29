import Axios from "./Api"

const getSubdistricts = async() => {
  return await Axios.get("/");
}

export {
  getSubdistricts
}