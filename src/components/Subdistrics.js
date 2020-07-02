import React from "react"

const Subdistrics = (props) => {
  const removeKec = name => name.split('').splice(5,1) + name.split('').splice(6).join('').toLowerCase()
  return (
    <div className="mt-3 rounded-md shadow-md py-4 sm:px-5 px-3 bg-white mb-3">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-2/6 sm:w-1/6 px-1 py-2 text-sm text-gray-800">Kecamatan</th>
            <th className="w-1/6 px-1 py-2 text-sm text-gray-800">Positif</th>
            <th className="w-1/6 px-1 py-2 text-sm text-gray-800">Sembuh</th>
            <th className="w-1/6 px-1 py-2 text-sm text-gray-800">Meninggal</th>
            <th className="w-1/6 px-1 py-2 text-sm text-gray-800">Total</th>
          </tr>
        </thead>
        <tbody>
          { 
            props.data ? 
            props.data.map(subdistrict => 
            <tr key={subdistrict.nama_kec}>
              <td className="border px-1 py-1 text-gray-700">{removeKec(subdistrict.nama_kec)}</td>
              <td className="border px-1 py-1 text-center text-gray-700">{subdistrict.covid_all}</td>
              <td className="border px-1 py-1 text-center text-gray-700">{subdistrict.covid_sembuh}</td>
              <td className="border px-1 py-1 text-center text-gray-700">{subdistrict.covid_meninggal}</td>
              <td className="border px-1 py-1 text-center text-gray-700">{parseInt(subdistrict.covid_meninggal) + parseInt(subdistrict.covid_sembuh) + parseInt(subdistrict.covid_all)}</td>
            </tr>
            )  : <tr></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Subdistrics