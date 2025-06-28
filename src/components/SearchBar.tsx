import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e: any) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(value) ||
      item.content.toLowerCase().includes(value)
    );
    setResults(filteredResults);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ddd',
        }}
      />
      {query && (
        <div style={{ marginTop: '10px', maxHeight: '300px', overflowY: 'auto' }}>
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} style={{ padding: '10px 0', borderBottom: '1px solid #ddd' }}>
                <a href={result.link} style={{ color: '#0070f3', textDecoration: 'none' }}>
                  {result.title}
                </a>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>{result.content.slice(0, 100)}...</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
