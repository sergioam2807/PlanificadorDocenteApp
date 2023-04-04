import { BrowserRouter } from 'react-router-dom'
import { PDFViewer } from '@react-pdf/renderer'
import './index.css';

import './PlaniApp.css'


import { PlaniComponent } from './layouts/planiComponenet/PlaniComponent'
import { habilidades, objetivosGenerales, recursos, cursos, profesores, unidades } from './database/objetivos'
import { PDFDocument } from './layouts/objectives/pdfDocument/PDFDocument';
import { Objectives } from './layouts/objectives/Objectives'
import { useState } from 'react';


const addName = (array, name) => {
  return array.map((obj) => ({ ...obj, name: obj[name] }))
  
}

const habilidadName = addName(habilidades, 'habilidad');
const recursoName = addName(recursos, 'recurso');
const cursoName = addName(cursos, 'name');
const profesorName = addName(profesores, 'name');
const unidadName = addName(unidades, 'name');

export const PlaniApp = () => {

  const [form, setForm] = useState({
    habilidad:'',
    recurso:'',
    curso:'',
    profesor:'',
    unidad:''
  });

  const setFormValue = ({ target }) => {
    const { name ,value } = target;
    setForm({
      ...form,
      [name]:value,
    })
  };

  return (
    <BrowserRouter>
      <div className='component_container'>
        <div className='d-flex page_style'>
          <div className='w-40 p-3'>
            <PlaniComponent className='component_style' 
              data={cursoName} 
              name="Cursos"  
              value={form.curso}
              valueName="curso"
              setValue={setFormValue}
              />
          </div>
          <div className='w-40 p-3'>
            <PlaniComponent 
            data={profesorName} 
            name="Profesores" 
            value={form.profesor}
            valueName="profesor"
            setValue={setFormValue}
            />
          </div>
          <div className='w-40 p-3'>
            <PlaniComponent 
            data={unidadName} 
            name="Unidades" 
            value={form.unidad}
            valueName="unidad"
            setValue={setFormValue}
            />
          </div>
        </div>

        <div className='d-flex page_style' >
          <div className='w-40 p-3'>
            <PlaniComponent 
            data={habilidadName} 
            name="Habilidades" 
            value={form.habilidad}
            valueName="habilidad"
            setValue={setFormValue}
            />
          </div>
          <div className='w-40 p-3'>
            <PlaniComponent 
            data={recursoName} 
            name="Recursos" 
            value={form.recurso}
            valueName="recurso"
            setValue={setFormValue}
              />
          </div>

        </div>
        <Objectives curso={cursoName} />
      </div>

      <PDFDocument 
        curso={form.curso} 
        profesor={form.profesor} 
        habilidad={form.habilidad} 
        recurso={form.recurso} 
        unidad={form.unidad}/>
    </BrowserRouter>
  )
}
