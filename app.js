const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log("SUBMITTED");
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data[0].show.image.medium);
    makeImages(res.data);
})
const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);

        }
    }
}