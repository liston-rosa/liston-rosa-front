import axios from "axios";

async function getData(resp) {
  return resp?.data.map((e) => e);
};



export async function fetchMainObj() {
  // const serverURL = process.env.APP_URL;
  const serverURL = 'https://listonrosa.onrender.com'
  try {
    let { data } = await axios(`${serverURL}/artwork`);
    let error = data.error;
    let objs = await getData(data);
    const response = [error, ...objs];
    return response;
  } catch (e) {
    console.error(`error message ${e}`);
  }
}

export async function fetchSingleArtWork(id) {
  // const serverURL = process.env.APP_URL;
  const serverURL = 'https://listonrosa.onrender.com'
  try {
    let { data } = await axios(`${serverURL}/artwork/${id}`);
    let error = data.error;
    let obj = data.data
    const response = [error, obj]
    return response;
  } catch (e) {
    console.error(`error message ${e}`);
  }
}
