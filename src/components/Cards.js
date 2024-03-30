import React from 'react'

const Cards = ({item}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer hover:shadow-xl">
      <div className="relative w-100 h-[200px]  flex justify-center items-cente">
        <img className="w-40 h-full object-cover" src={item?.image} alt={item?.title} />
      </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{item?.title}</div>
      <p className="text-gray-700 text-base line-clamp-2">{item?.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500">{item?.category}</span>
        <span className="text-gray-900">{item?.price}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-500">{`Rating: ${item?.rating?.rate} (${item?.rating?.count} reviews)`}</span>
      </div>
    </div>
  </div>
  )
}

export default Cards