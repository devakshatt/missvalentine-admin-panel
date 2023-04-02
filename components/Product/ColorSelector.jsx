import React from 'react';
import chroma from 'chroma-js';

import Select from 'react-select';
import { colourOptions } from '../../utils/helperFunctions';

const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.5).css()
                        : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : chroma.contrast(color, 'white') < 2.5 ? color.darken(2).hex()
                        : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? color.darken(2).hex()
                        : color.alpha(0.5).css()
                    : undefined,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.5).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: chroma(data.color).darken(2).hex(),
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: chroma(data.color).darken(2).hex(),
        ':hover': {
            backgroundColor: chroma(data.color).darken(2).hex(),
            color: 'white',
        },
    }),
};

const ColorSelector = (props) => (
    <Select
        closeMenuOnSelect={false}
        defaultValue={props.defaultValue}
        isMulti
        components={props.components}
        options={colourOptions}
        styles={colourStyles}
        value={props.value}
        onChange={props.onChange}
    />
);
export default ColorSelector;