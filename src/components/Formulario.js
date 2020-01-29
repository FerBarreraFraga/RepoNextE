import React from 'react';  
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCountry}) => {

    const OPCIONES = [
        { value: 'us', label: 'USA'},
        { value: 'ar', label: 'Argentina'},
        { value: 'fr', label: 'Francia'},
        { value: 'mx', label: 'Mexico'},
    ]

    const [ country, SelectNoticias ] = useSelect('us', OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();

        guardarCountry(country);
    }

    return ( 
        <div className="row">
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Pais</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['btn-block']}  btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}


 
export default Formulario;