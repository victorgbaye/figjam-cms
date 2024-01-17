import { useState } from 'react';

import Input, { SelectInput } from "../../components/UI/input/Input"

const CategoryPanel = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const options = [
        { value: 'Elements', label: 'Elements' },
        { value: 'Templates', label: 'Templates' },
      ];
  return (
    <div>
        <Input
        label='Name'
        />
        <SelectInput
        options={options}
        onChange={handleSelectChange}
        value={selectedValue}
        label='Root'
        />
    </div>
  )
}

export default CategoryPanel