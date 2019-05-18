import React, { useEffect } from 'react';

function APItest() {

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://www.opensecrets.org/api/?method=getLegislators&id=CO&apikey=8a3d5344def45691a3e97161157257f6');
        
        const items = await JSON.parse(data);
        console.log(items);
    };

  return (
    <div className="App">
      <h1>APItest</h1>
    </div>
  );
}

export default APItest;