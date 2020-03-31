import axios from 'axios';


const API_KEY = 'c2e86060edmsh255b51a92304ebfp127f05jsn047ee0be035a';

const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000,
    headers : {'X-RapidApi-Key': API_KEY }
});



export function getAlbums(search = 'drake'){
    const albums = request.get(`search?q=${search}`)
                .then(response => response.data.data)
                .catch(error => console.log(error));
                return albums
}