import React, {useState} from 'react';

const Search = ({search = Function.prototype}) => {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        const value = e.target.value;
        setValue(value)
        search(value);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="text"
                    id="search-field"
                    placeholder='Enter category'
                    onChange={handleKey}
                    value={value}
                />
            </div>
        </div>
    );
};

export default Search;