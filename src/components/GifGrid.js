import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {  //en este GifGrid necesitamos recibir la categoria y realizar una peticion http

    // const [images, setImages] = useState([]);

    const {data: images, loading} =  useFetchGifs( category );
    //data : images - renombra data por images

    // useEffect( ()=> {
    //    getGifs( category )
    //         .then(imgs => setImages( imgs )); //(setImages)
    // },[category]); 
    //Array o lista de dependencias

    /*
    //Todo esto lo pasamos hacia la carpeta helpers/getGifs
    const getGifs = async() => {

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
        setImages(gifs);

    }
    */

    //getGifs(); //Llamando de esta forma a la funcion se creará un ciclo infinito en donde siempre hará la peticion http cuando solamente es necesario hacerla una vez, para que solo lo realice una vez usamos el useEffect, como se lo muestra arriba

    return (
        <>

        <h3 className='animate__animated animate__bounce animate__delay-4s'>{category}</h3>

        { loading && <p className='animate__animated animate__flash'>Loading</p> }

        <div className='card-grid'>
            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            // img={img}
                            { ...img }
                        />
                    ))
                }
                
                {/*
                    //(img) => (key={img.id} {img.title})
                    images.map( ({id, title}) => ( 
                    <li key={id}>{title}</li>
                    ))*/
                }

        </div>

        </>
    )
}
