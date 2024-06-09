import React, { useState } from 'react';
import styles from './ComboBox.moduel.css'

const ComboBox = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className='comboBox'>
            <select className='selectOfComboBox' value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ComboBox;
