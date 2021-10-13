//snipped: rafc
import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Marvel', 'Dragon-Ball'];
    //sipped: useState
    const [categories, setCategories] = useState(['Marvel']);

    // const handleAdd = () =>{
    //     setCategories( /* estado anterior*/ cats => [...cats, 'HunterX'] ); //Sobreescribe el estado anterior, que en este caso es el array
    //     console.log(categories)
    // }

    //Forma de comunicar componentes: Le pasamos la referencia de setCategories al componente de <AddCategory/> de esta manera:
    // <AddCategory setCategory = { setCategories }/>  -  Aqui le estamos pasando propiedades a AddCategories

    return (
        <>
           <h2>Gif Expert App</h2>
           <AddCategory setCategorys = { setCategories }/>
           <hr/>

           <button>Agregar</button>

            <ol>
                {
                    categories.map( category => 
                        //return <li key = { category }>{ category }</li>
                        //El key siempre tiene que ser unico
                        
                        <GifGrid 
                            key={category}
                            category={ category }
                        />

                    )
                }
            </ol>

        </>
    )
}
