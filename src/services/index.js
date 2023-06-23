import { service } from "../config";

export const getArticles = async () => {
 
 //const response = await fetch(service.ARTICLE_API_SERVICE);
 const response = await fetch('https://diggdevelopment.com/admin-panel/api/allblogs');
  return await response.json();
}
