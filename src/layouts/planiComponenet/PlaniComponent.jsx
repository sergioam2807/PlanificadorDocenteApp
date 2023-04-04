
import './../planiComponenet/PlaniStyle.css';
import { useSelected } from '../../hooks/useSelected';
import { useState } from 'react';


export const PlaniComponent = ({ data, name, value ,setValue, valueName  }) => {

    const { selectedItems, handleAddButtonClick, handleDeleteButtonClick } = useSelected();


    return (
        <>
            <div className='container_select'>
                <div className='label_style'>
                    <label className='d-flex justify-content-center align-items-center'>
                        Seleccione {name}:
                    </label>
                </div>

                <div className='d-flex justify-content-center container'>
                    <select
                        className='form-select d-flex justify-content-center'
                        id='floatingSelect'
                        value={value}
                        name={valueName}
                        onChange={setValue}

                    >

                        <option value=''>Seleccione una opción</option>
                        {
                            data.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.name}
                                >{item.name}</option>

                            )
                            )
                        }

                    </select>
                    <button type='button' className='btn btn-info' 
                        onClick={() => {
                                handleAddButtonClick();
                                handleDataUpdate();
                              }
                            }>+</button>
                </div>

                <div >
                    <ul className='container_item' id='container_item' >
                        {selectedItems.map((item) => (
                            <li
                                key={item.id}
                                className="m-2 ">
                                <button
                                    className=' btn btn-outline-success text_sizing '
                                    onClick={() => {
                                        handleDeleteButtonClick(item.id);
                                        handleDataUpdate();
                                    }}>
                                    {item.name}
                                </button>
                            </li>


                        ))}
                    </ul>
                </div>

            </div>


        </>
    )
}
