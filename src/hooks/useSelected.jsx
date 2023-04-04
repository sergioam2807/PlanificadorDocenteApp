import { useState } from "react";

export const useSelected = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  


  const onSelected = ({ target }) => {
    const { value } = target;
    setSelectedValue(value)
    console.log(value)
  }


  const handleAddButtonClick = () => {
    const newItem = { id: Date.now(), name: selectedValue };
    setSelectedItems([...selectedItems, newItem]);
  }

  const handleDeleteButtonClick = (id) => {
    // console.log(selectedItems)
    const newList = selectedItems.filter((items) => items.id !== id)
    console.log(newList)
    setSelectedItems(newList)
  }


  return {
    selectedItems,
    selectedValue,

    onSelected,
    handleAddButtonClick,
    handleDeleteButtonClick
  }

}


