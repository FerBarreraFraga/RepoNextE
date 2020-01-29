import React from 'react';
import Noticia from './Noticia';
import Error from './Error';

const ListadoNoticias = ({noticias}) => {

    if (noticias){
        return (
            <div className="row">
            {
            noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))
            }
        </div>
        )
    }
    
    return(
       <Error/>
    )
};


 
export default ListadoNoticias;