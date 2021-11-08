import axios from '../libraries/axios/index';

export const IP = 'https://api.ipify.org?format=json';

//saga API
export function getMainPageCard(props: any) {
  return axios.get(
    `/breeds?limit=${props.limit}&page=${props.pageSet}&order=${props.value}`
  );
}

export function getMainSearchCard(query: string) {
  return axios.get(`/images/search?${query}`);
}

//breeds API
export function getCardBreeds(query: string) {
  return axios.get(`/breeds?limit=${query}`);
}

//votes API
export function getVotes(query: string) {
  return axios.get(`/votes?sub_id=${query}`);
}

export function deleteVotes(query: string) {
  return axios.delete(`/votes/${query}`);
}

export function sendLikeVotes(body: any) {
  return axios.post('/votes', body);
}

//favourite API
export function getFavourites(query: string) {
  return axios.get(`/favourites?sub_id=${query}`);
}

export function sendFavourites(body: any) {
  return axios.post('/favourites', body);
}

export function deleteFavourites(query: number) {
  console.log(query);
  return axios.delete(`/favourites/${query}`);
}

//images API
export function getLikedImg(query: string) {
  return axios.get(`/images/${query}`);
}

export function getLikedAllImg(queryLimit: number, queryId: string) {
  return axios.get(`/images?limit=${queryLimit}&sub_id=${queryId}`);
}

export function deleteUploadImg(query: string) {
  return axios.delete(`/images/${query}`);
}

export function postImgUpload(data: any, headers: any) {
  return axios.post(`/images/upload`, data, headers);
}

//gsr
export const GSR = 'https://api.thedogapi.com/v1/images/';

//node

export const FCM = 'http://localhost:5000/fcm';
export const INTRO = 'http://localhost:5000/hm/intro';
export const MEMBER = 'http://localhost:5000/hm/members';

export const queryTypes = {
  mime: 'mime_types=',
  breed: 'breed_id='
};
