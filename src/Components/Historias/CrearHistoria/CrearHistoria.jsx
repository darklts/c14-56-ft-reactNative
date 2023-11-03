import React, { useRef } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const CrearHistoria = () => {
  const cambioDeInput = useRef()
  const userData = JSON.parse(localStorage.getItem('userData'))

  const [cookies] = useCookies(['authToken'])

  const storeElements = e => {
    const elements = e?.target?.files
    const formData = new FormData()

    for (let i = 0; i < elements?.length; i++) {
      formData.append('file', elements[i])
    }
    let selectArray = Array.from(elements)
    // console.log('despues')
    console.log(elements)
    let token = cookies?.authToken
    const headers = {
      Authorization: `Bearer ${token}`,
    }

    axios
      .post(
        `https://linkup-5h1y.onrender.com/api/v1/uploads/history/${userData?._id}`,
        formData
      )
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // let addImageUrl = []

  // selectArray.map(file => {
  //   const url = URL.createObjectURL(file);
  //   addImageUrl.push(url);
  //   return url;
  // })

  return (
    <div>
      <input
        multiple
        type="file"
        className="hidden"
        ref={cambioDeInput}
        onChange={storeElements}
      />

      <div className="text-center">
        <div
          className="avatar mt-3 mx-3 h-14 w-14 cursor-pointer"
          onClick={() => cambioDeInput.current?.click()}
        >
          <div
            className={`w-24 rounded-full ring ring-info ring-offset-base-100 ring-offset-2 hover-bg-slate-100`}
          >
            <img src={userData?.photoProfile?.path} />
          </div>
        </div>
        <p className="text-xs truncate text-center">Crear</p>
      </div>
    </div>
  )
}

export default CrearHistoria
