import { create } from "apisauce";

const client = create({
  baseURL: "http://192.168.101.5:19002/api",
});

// apiClient.get("/listings").then(response => {
//     if(!response.ok){
//         response.problem
//     }
// })

export default client;
