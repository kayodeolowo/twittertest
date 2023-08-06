import { GrStatusGood } from 'react-icons/gr'

function App() {


  return (
    <div className="container
   mx-auto 
   px-4
   sm:px-6
   lg:px-20  ">
      <h1 className="text-[#7F56D9] font-semibold mt-8"> Pricing </h1>
      <h1 className="font-semibold text-xl"> Simple, transparent pricing</h1>
      <p className="mt-2 text-gray-500 text-base"> We believe our prices are extremly competetive for the value offered</p>
      <div className="text-center bg-[#7F56D9] rounded-lg mt-2">
        <h1 className="text-white py-1 text-sm">  <span className="font-semibold"> we've just launched! </span> <span className="text-gray-300"> Recieve a 50% discount  for a limited  time with code</span> <span className="font-semibold"> EARLY BIRD </span> </h1>
      </div>


    <div className='flex flex-col xl:flex-row   gap-8 xl:justify-between xl:w-full w-fit xl:mx-0 mx-auto '>
    <div className="mt-8 cursor-pointer">
        <div className="w-[15rem] border rounded shadow-md text-center ">
          <h1 className="mt-4 text-2xl font-semibold"> Free</h1>
          <h2 className="text-gray-800 font-semibold text-sm"> Daydreamer </h2>
          <p className="text-sm text-gray-500"> Start dreaming </p>

          <div className='mt-4'>
            <div className='flex flex-row  items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Simulated trades for BTC and ETH</h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Daily email </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Blacktests updated daily </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Email support </h1>
            </div>

            <button className='bg-[#7F56D9] w-[90%] mx-auto rounded text-xs text-white mt-4 mb-4 py-1.5  cursor-pointer hover:bg-[#4a2c8b] '>Get started  </button>
          </div>
        </div>
      </div>


      <div className="mt-8 cursor-pointer">
        <div className="w-[15rem] border rounded shadow-md text-center ">
          <h1 className="mt-4 text-2xl font-semibold"> $20/mth </h1>
          <h2 className="text-gray-800 font-semibold text-sm"> Stargazer </h2>
          <p className="text-sm text-gray-500"> Billed anually.  </p>

          <div className='mt-4'>
            <div className='flex flex-row  items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Up to 15 simulated trades </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Up to 5 blacklisted coins </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Preset stratergies  </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Daily email </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Backtests updated daily  </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Piority email support  </h1>
            </div>

            <button className='bg-[#7F56D9] w-[90%] mx-auto rounded text-xs text-white mt-4 mb-4 py-1.5  cursor-pointer hover:bg-[#4a2c8b] '>Get started  </button>
          </div>
        </div>
      </div>


      <div className="mt-8 cursor-pointer">
        <div className="w-[15rem] border rounded shadow-md text-center ">
          <h1 className="mt-4 text-2xl font-semibold"> $40/mth </h1>
          <h2 className="text-gray-800 font-semibold text-sm"> Moonwalker </h2>
          <p className="text-sm text-gray-500"> Billed anually.  </p>

          <div className='mt-4'>
            <div className='flex flex-row  items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Unlimited simulated trades </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Unlimited blacklisted coins </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Custom  stratergy parameters  </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Daily email </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Backtests updated daily  </h1>
            </div>

            <div className='flex flex-row mt-2 items-center text-xs font-semibold text-gray-500 gap-2 w-fit  ml-4'>
              <img src='./images/mark.png' className='h-3 w-3' />
              <h1> Piority email support  </h1>
            </div>

            <button className='bg-[#7F56D9] w-[90%] mx-auto rounded text-xs text-white mt-4 mb-4 py-1.5  cursor-pointer hover:bg-[#4a2c8b] '>Get started  </button>
          </div>
        </div>
      </div>

    </div>
    
    </div>
  )
}

export default App
