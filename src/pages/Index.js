import React, { useState, useEffect } from 'react';
import Container from '../components/Container'
import Subdistrics from '../components/Subdistrics'
import {getSubdistricts} from '../services/JeparaServices'

const Index = () => {
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
  return(
    <Container>
        <div className="flex flex-col mx-auto max-w-2xl mt-3">
          <div className="text-xl md:text-2xl font-bold text-gray-700">Jumlah Kasus Positif di Jepara</div>
          <div className="flex flex-col content-center sm:flex-row sm:space-x-4 space-y-2">
            <div className="w-full rounded-md border p-5 text-center mt-2 bg-white">
              <div className="text-orange-600 text-3xl font-bold">{totalPositif}</div>
              <div className="text-gray-700">Positif</div>
            </div>
            <div className="w-full rounded-md border p-5 text-center bg-white">
              <div className="text-green-600 text-3xl font-bold">{totalRecover}</div>
              <div className="text-gray-700">Sembuh</div>
            </div>
            <div className="w-full rounded-md border p-5 text-center bg-white">
              <div className="text-red-600 text-3xl font-bold">{totalDeath}</div>
              <div className="text-gray-700">Meninggal</div>
            </div>
            <div className="w-full rounded-md border p-5 text-center bg-white">
              <div className="text-yellow-600 text-3xl font-bold">{totalAll}</div>
              <div className="text-gray-700">Total Positif</div>
            </div>
          </div>
          <Subdistrics data={subdistricts}/> 
        </div>
      </Container>
  )
}

export default Index