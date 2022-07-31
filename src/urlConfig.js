const baseUrl = process.env.API || "https://backend-rest-ecommerce.herokuapp.com/";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
