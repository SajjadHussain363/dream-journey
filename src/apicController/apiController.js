import Axios from 'axios'

const POST = async (route, formData, header={}) => {
  var result = await Axios({
    method: 'POST',
    headers: header,
    url: process.env.REACT_APP_API_URL+route,
    data: formData
  })

  return result.data
}

const GET = async (route, formData, header = {}) => {
  const userData = localStorage.getItem("userData");
  let accessToken = null;
  
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      accessToken = parsedData.access_token;
    } catch (error) {
      console.warn("Error parsing userData from localStorage:", error);
    }
  }
  
  const headers = { ...header };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  
  var result = await Axios({
    method: 'GET',
    headers: headers,
    url: process.env.REACT_APP_API_URL + route,
    data: formData
  });
  
  return result.data;
};

const DELETE = async (route, id, formData, header) => {
  var result = await Axios({
    method: 'Delete', 
    headers: header,
    url: process.env.REACT_APP_API_URL + route + `/${id ? id : null}`,
    data: formData
  }) 
  return result.data;
}

const PUT = async (route, id, formData,  header) => {
  var result = await Axios({
    method: 'PUT',
    headers: header, 
    url: process.env.REACT_APP_API_URL+route+'/'+id,
    data: formData
  })
  return result.data
}

const PATCH = async (route, id, formData,  header) => {
  var result = await Axios({
    method: 'PATCH',
    headers: header, 
    url: process.env.REACT_APP_API_URL+route+'/'+id,
    data: formData
  })
  return result.data
}

const GETID = async (route, id, formData, header={}) => {
  var result = await Axios({
    method: 'GET',
    headers: header,
    url: process.env.REACT_APP_API_URL+route+'/'+id,
    data: formData
  })
  return result.data
}

export { POST, GET, DELETE, PUT, GETID, PATCH }