import {useState} from 'react'
import {contenidos} from './database/objetivos.js'
import { Page,Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'


export const ComponentePrueba = ( ) => {

    const [selectedItems, setSelectedItems] = useState([]);
const [selectedValue, setSelectedValue] = useState(null);

    const onSelected = ( {target} ) =>{
        const { value } = target;
        setSelectedValue(value)
        console.log(value)        
    }

    function handleAddButtonClick() {
        setSelectedItems(selectedItems => [...selectedItems, selectedValue]);
        setSelectedValue(null);
      }

  return (
    <>
            <label style={{display:'inline', marginLeft:'50px', marginTop:'50px'}}>
                Seleccione:
                <select 
                    value={selectedValue}
                    name='recursos' 
                    onChange={onSelected} 
                    style={{marginLeft:'5px'}}
                    defaultValue= {{label:'Seleccione una opciòn', value: 'empty'}}>
                    
                {
                    contenidos.map((item)=>
                        <option 
                        key={item.id}
                        value={item.contenido} 
                        >{item.contenido}</option>
                    )
                }
                    
                </select>

                <button onClick={handleAddButtonClick}>Agregar</button>

            </label>

           
            <PDFViewer>
                <Document>
                    <Page>
                        <View>
                            <Text>{selectedItems}</Text>
                        </View>
                    </Page>
                </Document>

            </PDFViewer>
        </>
  )
}
