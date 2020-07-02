import React, { useState, useEffect } from 'react';
import Container from './components/Container'
import Subdistrics from './components/Subdistrics'
import {getSubdistricts} from './services/JeparaServices'


function App() {
  const [subdistricts, setSubdistricts] = useState(null);  
  useEffect(() => {
    getSubdistricts().then(res => setSubdistricts(res.data))
  },[])
  let totalPositif = 0;
  let totalRecover = 0;
  let totalDeath = 0;
  let totalAll = 0;
  if(subdistricts){
    totalPositif = subdistricts.map(subdistrict => parseInt(subdistrict.covid_all)).reduce((prev, next) => prev + next);
    totalRecover = subdistricts.map(subdistrict => parseInt(subdistrict.covid_sembuh)).reduce((prev, next) => prev + next);
    totalDeath = subdistricts.map(subdistrict => parseInt(subdistrict.covid_meninggal)).reduce((prev, next) => prev + next);
    totalAll = totalPositif + totalRecover + totalDeath;
  }
  return (
    <div>
      <Container>
        <div className="flex flex-col mx-auto max-w-2xl mt-3">
          <div className="flex flex-col content-center sm:flex-row sm:space-x-4 space-y-2">
            <div className="w-full rounded shadow-md p-5 text-center mt-2">
              <div className="text-orange-600 text-lg font-bold">{totalPositif}</div>
              <div className="text-gray-700">Positif</div>
            </div>
            <div className="w-full rounded shadow-md p-5 text-center">
              <div className="text-green-600 text-lg font-bold">{totalRecover}</div>
              <div className="text-gray-700">Sembuh</div>
            </div>
            <div className="w-full rounded shadow-md p-5 text-center">
              <div className="text-red-600 text-lg font-bold">{totalDeath}</div>
              <div className="text-gray-700">Meninggal</div>
            </div>
            <div className="w-full rounded shadow-md p-5 text-center">
              <div className="text-yellow-600 text-lg font-bold">{totalAll}</div>
              <div className="text-gray-700">Total</div>
            </div>
          </div>
          {
            subdistricts ?  <Subdistrics data={subdistricts}/> : ' '
          }
        </div>
      </Container>
    </div>
  );
}

export default App;
