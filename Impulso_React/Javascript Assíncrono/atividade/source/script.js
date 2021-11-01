const btn = document.getElementById('btn')
const catImg = document.getElementById('cat');

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
}

const loading = async () => {
    catImg.src = await getCats()
}

btn.addEventListener('click', loading)

loading()