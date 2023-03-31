import { BrowserRouter } from 'react-router-dom'
import { PDFViewer } from '@react-pdf/renderer'
import './index.css';

import './PlaniApp.css'


import { PlaniComponent } from './layouts/planiComponenet/PlaniComponent'
import { habilidades, objetivosGenerales, recursos, cursos, profesores, unidades } from './database/objetivos'
import { PDFDocument } from './layouts/objectives/pdfDocument/PDFDocument';
import { Objectives } from './layouts/objectives/Objectives'


const addName = (array, name) => {
  return array.map((obj) => ({ ...obj, name: obj[name] }))
}

export const PlaniApp = () => {

  const habilidadName = addName(habilidades, 'habilidad');
  const recursoName = addName(recursos, 'recurso');
  const cursoName = addName(cursos, 'name');
  const profesorName = addName(profesores, 'name');
  const unidadName = addName(unidades, 'name');




  return (
    <BrowserRouter>
      <div className='component_container'>
        <div className='d-flex page_style'>
          <div className='w-40 p-3'>
            <PlaniComponent className='component_style' data={cursoName} name="Cursos" />
          </div>
          <div className='w-40 p-3'>
            <PlaniComponent data={profesorName} name="Profesores" />
          </div>
          <div className='w-40 p-3'>
            <PlaniComponent data={unidadName} name="Unidades" />
          </div>
        </div>

        <div className='d-flex page_style'>
          <div className='w-40 p-3'>
            <PlaniComponent data={habilidadName} name="Habilidades" />
          </div>
          <div className='w-40 p-3'>
            <PlaniComponent data={recursoName} name="Recursos" />
          </div>

        </div>
        <Objectives curso={cursoName} />
      </div>


      <PDFDocument />
    </BrowserRouter>
  )
}
