import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function SearchAutoComplete({ data, type, title }) {

    if (data.length <= 0) {
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
                defaultValue={type? [] : null}
                renderInput={(params) => (
                    <TextField {...params} label={title} />
                )}
            />
        );
    }
}