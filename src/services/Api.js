 
import axios from "axios";

export default axios.create({
  baseURL: "https://corona.jepara.go.id/services/dataKecamatan/",
  headers: {
    "Content-type": "application/json"
  }
})