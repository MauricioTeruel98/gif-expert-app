// Son funciones que hacen ciertos trabajos

export const getGifs = async( category ) => {

    //encodeURI: Reemplaza espacios con signo de % o + para que no genere problemas en la url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=15&api_key=Xv5lQW9BXlB7AF6D7PHbxUlHoG4fO6h7`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs);
    
    return gifs;

}