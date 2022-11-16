import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function SearchAutoComplete({ data, type, title, setOptions, selectedVal }) {
    if (data && data.length <= 0) {
        return (
            <></>
        )
    } else {
        return (
            <Autocomplete
                multiple={type ? true : false}
                limitTags={2}
                // id="multiple-limit-tags"
                options={data}
                getOptionLabel={(option) => option.title}
                // defaultValue={type? [] : null}
                defaultValue={selectedVal}
                onChange={(event, value) => setOptions(value)}
                renderInput={(params) => (
                    <TextField {...params} label={title}/>
                )}
            />
        );
    }
}