import React from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search articles..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;