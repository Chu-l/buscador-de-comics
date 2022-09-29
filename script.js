//KEYS
const apiPublic = '83425d97b5309c28ab016ca642b55dff';
const apiPrivate = 'd3f4ca4c5f3a11cd27e88350423903ba4821af0b';

const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apiPublic}`;

fetch(url)
.then(resp => resp.json())
.then(json => console.log(json))
