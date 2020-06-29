import React, { useState, useEffect } from 'react';
import Container from './components/Container'
import {getSubdistricts} from './services/JeparaServices'

function App() {
  const [subdistricts, setSubdistricts] = useState(null);
  useEffect(() => {
    getSubdistricts().then(res => setSubdistricts(res.data)).catch(err => setSubdistricts(null))
  },[])
  return (
    <div>
      <Container>
        {
          subdistricts ? subdistricts.map(subdistrict => 
            <ul key={subdistrict.nama_kec}>
              <li>{subdistrict.nama_kec}</li>
            </ul>
          ) : ''
          
        }
      </Container>
    </div>
  );
}

export default App;
