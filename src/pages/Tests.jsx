import React, { useEffect, useState } from 'react'

const Tests = () => {

  

  const [color, setColor] = useState('blue')
  const [size, setSize] = useState('h-10')

  const [currentColor, setCurrentColor] = useState(4)

  const [currentWidth, setCurrentWidth] = useState('w-10')

  const [columnas, setColumnas] = useState([
    ['delay-75', 'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100', 'bg-gray-100'],
    ['delay-100', 'bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-pink-200', 'bg-gray-200'],
    ['delay-150', 'bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-gray-300'],
    ['delay-200', 'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400', 'bg-gray-400'],
    ['delay-300', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500'],
    ['delay-500', 'bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-yellow-600', 'bg-purple-600', 'bg-pink-600', 'bg-gray-600'],
    ['delay-700', 'bg-red-700', 'bg-blue-700', 'bg-green-700', 'bg-yellow-700', 'bg-purple-700', 'bg-pink-700', 'bg-gray-700'],
    ['delay-1000', 'bg-red-800', 'bg-blue-800', 'bg-green-800', 'bg-yellow-800', 'bg-purple-800', 'bg-pink-800', 'bg-gray-800'],
    ['delay-1000', 'bg-red-900', 'bg-blue-900', 'bg-green-900', 'bg-yellow-900', 'bg-purple-900', 'bg-pink-900', 'bg-gray-900'],

  ])

  const handleRandomColor = () => {
    setCurrentColor(Math.floor(Math.random() * 7))
  }

  const handleWidth = (value) => {
    if (value < 10) {
      setCurrentWidth('w-1/12')
    }
    
    if (value >= 10 && value < 20) {
      setCurrentWidth('w-2/12')
    }

    if (value >= 20 && value < 30) {
      setCurrentWidth('w-3/12')
    }

    if (value >= 30 && value < 40) {
      setCurrentWidth('w-4/12')
    }

    if (value >= 40 && value < 50) {
      setCurrentWidth('w-5/12')
    }

    if (value >= 50 && value < 60) {
      setCurrentWidth('w-7/12')
    }

    if (value >= 60 && value < 70) {
      setCurrentWidth('w-8/12')
    }

    if (value >= 70 && value < 80) {
      setCurrentWidth('w-9/12')
    }

    if (value >= 80 && value < 90) {
      setCurrentWidth('w-10/12')
    }

    if (value >= 90 && value < 100) {
      setCurrentWidth('w-11/12')
    }

    if (value >= 100) {
      setCurrentWidth('w-full')
    }
  }

  return (
    <div>

      <div className="grid w- grid-cols-5 gap-x-5 bg-slate-400 text-black mx-4">
          <div className='bg-sky-400 col-start-5'>col-start-5</div>
          <div className='bg-fuchsia-300'></div>
          <div className='bg-lime-300 col-end-4'></div>
          <div className='bg-rose-400 col-span-2'></div>
          <div className='bg-orange-300 '></div>

          <div className='bg-red-100 text-left '></div>
          <div className='bg-blue-200 col-span-2'>col-span-2</div>
          <div className='bg-cyan-300'></div>
          <div className='bg-green-400'></div>
          <div className='bg-yellow-500 col-span-2'>col-span-2</div>
      </div>
    
      <div className={`flex flex-col items-stretch justify-between gap-x-5  text-black mx-4`}>
        {columnas.map((columna, i) => (
             
            <div key={i} className={`${columna[currentColor]} ${currentWidth} ease-in-out duration-[2000ms] ${size} rounded-r-3xl ${columna[0]}`}></div>
        
        ))}

        <input 
          type="range"
          min="0"
          max="100"


          className="my-4 w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-600" 
          onChange={(e) => handleWidth(e.target.value)}
          />
      </div>

      
      <div className='sticky top-0'>
        <div className='grid grid-cols-5 gap-x-2 mx-4 top-6'>
                
          <input type={'button'}
                value={'Reversa'} 
                className={`bg-red-500 text-white rounded drop-shadow-md cursor-pointer`}
                  onClick={() => setColumnas([...columnas].reverse())}     
          />

          <input type={'button'}
                  value={'Color'}
                  className={`bg-red-600 hover:bg-${color}-700 text-white rounded cursor-pointer`}
                  onClick={() => handleRandomColor()}
          />

          <input type={'button'}
                  value={'Size 5'}
                  className={`bg-red-700 p-2 hover:bg-${color}-700 text-white rounded cursor-pointer`}
                  onClick={() => setSize('h-5')}
          />

          <input type={'button'}
                  value={'Size 10'}
                  className={`bg-red-600 hover:bg-${color}-700 text-white rounded cursor-pointer`}
                  onClick={() => setSize('h-10')}
          />

          <input type={'button'}
                  value={'Size 14'}
                  className={`bg-red-500 hover:bg-${color}-700 text-white rounded cursor-pointer`}
                  onClick={() => setSize('h-14')}
          />
        </div>
          

          
      </div>
    </div>
  )
}

export default Tests