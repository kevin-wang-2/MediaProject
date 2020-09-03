import axios from "axios"

const basePath = "www.yiyang-tech.com:8181"

export default {
  async initializeData() {
    let timeStamp = Date.now() / 1000 - 3600 * 24;
    let data = (await axios.get(basePath + "/monitor/after/" + timeStamp.toString())).data;
    if(data.state !== "OK") {
      throw {
        error: data.error,
        message: data.message
      }
    } else return data.data
  },
  async loadData() {
    let data = (await axios.get(basePath + "/monitor")).data;
    if(data.state !== "OK") {
      throw {
        error: data.error,
        message: data.message
      }
    } else return data.data
  },
  async loadFreshness() {
    let data = (await axios.get(basePath + "/freshness")).data;
    if(data.state !== "OK") {
      throw {
        error: data.error,
        message: data.message
      }
    } else return data.data
  }
};
