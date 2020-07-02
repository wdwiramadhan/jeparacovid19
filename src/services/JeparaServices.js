import jeparaApi from "./jeparaApi"

const getSubdistricts = async() => {
  return await jeparaApi.get("dataKecamatan");
}

export {
  getSubdistricts
}