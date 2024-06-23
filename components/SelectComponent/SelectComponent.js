import Select, { Option } from 'rc-select';
import { VendorData } from 'contaxt/contaxt';
import { useContext, useState } from 'react';



const SelectElemnt =  ({id,hedlineText,SelectOptions,className }) => {

    const [fromData,setFromData]=useContext(VendorData)

    const handleChange = (value) => {
      setFromData((prevState) => ({
          ...prevState,
          vendorPaymentOptions: value 
        }));
      };

    return(
<label
  htmlFor={id}
  style={{display:"flex",flexDirection:"column"}}
  >{hedlineText}
  
  <Select
   animation={"slide-up"}
   mode='multiple'
   className={className}
   value={fromData.vendorPaymentOptions}
   onChange={handleChange}
  >
  {SelectOptions.map((option,i)=>{
    return <Option value={option} key={i} >{option}</Option>
  })}
  </Select>
  </label>
    )
   
}
export default SelectElemnt