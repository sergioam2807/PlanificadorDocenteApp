import './objectives.css';
import { objetivosGenerales } from '../../database/objetivos';
import { useSelected } from '../../hooks/useSelected';


export const Objectives = () => {

    const { selected, onSelected } = useSelected();

    return (
        <>

            <div className="container_principal">
                {
                    objetivosGenerales.map((objetivo) =>
                        <div className="container_card" key={objetivo.id}>
                            <div className="container_title" >
                                <p className='title_basal'>Objetivo basal {objetivo.id}</p>
                            </div>
                            <div className="container_objetivo_aprendizaje">
                                <h3 className='title_objetivo'>{objetivo.name}</h3>
                                <p className='texto_objetivo'>{objetivo.objetivo}</p>
                            </div>

                            <div className='container_button'>
                                <button className='boton_objetivo' onClick={onSelected} value={objetivo.objetivo}>Seleccionar</button>
                            </div>

                        </div>
                    )
                }
            </div>


        </>
    )
}

