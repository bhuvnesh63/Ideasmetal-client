import React from 'react'
import './Filter.scss'
const Filter = ({ data, handelChange }) => {



  const type = ["Aluminium", "Iron ", "Brass", "Stainless Steel", "Platinum"]


  console.log("api", data)

  return (
    <>
      <div className="main">
        <div>
          {type.map((value) => {
            return <div className='input'>
              <input type="checkbox" name="type" onChange={handelChange} value={value} id="" />
              {value}
            </div>
          })
          }
        </div>
      </div>
    </>
  )

}

export default Filter
