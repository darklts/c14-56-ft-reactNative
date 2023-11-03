import React, { useRef, useState, useEffect } from 'react'
import useImageStore from '@store'
import ModalHistorias from '@HistoriesModal'

const Historia = () => {
  const mi_modal = useRef()
  // const imageUrls = useImageStore((state) => state.imageUrls);
  // const imageLength = imageUrls.length;

  const imagenDePerfil =
    'https://tr.rbxcdn.com/3010002b37a60b2768d0c99b6b16f159/420/420/Image/Png'

  const [showComponent, setShowComponent] = useState(false)

  // useEffect(() => {
  //   setShowComponent(imageLength > 0);
  // }, [imageLength]);

  const openModal = () => {
    if (mi_modal.current) {
      mi_modal.current?.showModal()
    }
  }

  return (
    <>
      {showComponent && (
        <div className="text-center">
          <div
            className="avatar mt-3 mx-3 h-14 w-14 cursor-pointer"
            onClick={openModal}
          >
            <div
              className={`w-24 rounded-full ring ring-info ring-offset-base-100 ring-offset-2 hover:bg-slate-100`}
            >
              <img src={imagenDePerfil} alt="Profile" />
            </div>
          </div>
          <p className="text-xs w-16 truncate text-center">Lucas</p>
        </div>
      )}
      {/* <ModalHistorias mi_modal={mi_modal} imageUrls={imageUrls} imageLength={imageLength} /> */}
    </>
  )
}

export default Historia
