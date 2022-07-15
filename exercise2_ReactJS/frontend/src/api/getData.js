import axios from "axios";

const getData = path => axios.get(`http://localhost:7890/api${path}`);
export default getData;
