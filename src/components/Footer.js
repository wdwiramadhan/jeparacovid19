import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="mt-10 text-sm p-3 border-t w-full">
        <div className="max-w-2xl mx-auto flex-row flex justify-between">
          <div className="w-full text-gray-600 font-light leading-relaxed"><span className="font-medium">Jepara COVID-19 </span> 
            merupakan website alternative mengenai informasi data COVID-19 di Jepara. Data yang ditampilkan bersumber dari 
            <a href="https://corona.jepara.go.id/" className="text-blue-600 hover:text-gray-600"> corona.jepara.go.id</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer