
export const baseUrl = "https://api.themoviedb.org/3"
const apiKey = 'd7ce541cbdf7e4b870ae86c885414de2'


const apiConfig = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer d7ce541cbdf7e4b870ae86c885414de2'
    }
};



// const apiConfig = {
//     originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
//     w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
//     headers: {
//
//         headers: {
//             Authorization: Bearer ${apiKey},
//             "Content-Type": "application/json",
//         }
//     }
// }


export default apiConfig