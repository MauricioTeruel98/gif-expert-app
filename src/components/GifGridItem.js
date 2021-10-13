import React from 'react'

// ()Con props

// export const GifGridItem = ( props ) => {

//     console.log(props);

//     return (
//         <div>
//             {/* {img.title} */}
//         </div>
//     )
// }

// ()Con destructuracion

export const GifGridItem = ( {id,title,url} ) => {

    console.log({id,title,url});

    return (
        <div className='card animate__animated animate__bounce'>
            <img src={url} alt={title}/>
                <p>{title}</p>
        </div>
    )
}