import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
//import FormularioPalabra from './components/FormularioPalabra';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria, palabra y noticias
  const [country, guardarCountry] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  const [palabra, guardarPalabra] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=05999112ed464d9b9cccbaa799a9405f`;
      const respuesta = await fetch(url);

      const noticias = await respuesta.json();
      console.log('noticias', noticias)

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [country]);

  return (
    <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario 
              guardarCountry={guardarCountry}
            />

  

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
