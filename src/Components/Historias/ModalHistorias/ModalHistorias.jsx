import React, { useState, useEffect } from 'react'
import './ModalHistorias.css'

const ModalHistorias = ({
  mi_modal,
  imageUrls,
  imageLength,
  actualIndex,
  users,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const takeImages = imageUrls
  const takeUsers = users
  const defaultImageUrl =
    'https://previews.123rf.com/images/pandavector/pandavector1709/pandavector170906212/86095866-persona-%C3%BAnico-icono-de-estilo-de-contorno-persona-ilustraci%C3%B3n-de-stock-de-s%C3%ADmbolo-del-vector.jpg'

  const allUsers = actualIndex > 0 ? takeUsers?.slice(-imageLength) : takeUsers

  let elementKeys = Object.keys(takeImages)
  let stayElements = elementKeys?.slice(actualIndex)

  const newObject = {}

  stayElements?.forEach(key => {
    newObject[key] = takeImages[key]
  })

  let allValues = []
  const takeAllValues = () => {
    for (let x of Object?.values(newObject)) {
      // console.log(x)
      x.forEach(a => {
        allValues?.push(a)
      })
    }
  }
  takeAllValues()

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToNextSlide = () => {
    if (currentIndex < imageLength - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div>
      <dialog className="modal " ref={mi_modal}>
        <div className="modal-box p-0 bg-transparent overflow-hidden w-2/6 h-full">
          <div className="modal-action ">
            <div className=" carousel w-full rounded-3xl">
              {allValues?.map((imageUrl, index) => (
                <div
                  key={index}
                  id={`slide${index}`}
                  className={`carousel-item relative w-full flex flex-col align-center justify-center`}
                >
                  <div className="">
                    {allUsers[index] ? (
                      <div className="flex w-full h-1/2 absolute nose ">
                        <img
                          src={allUsers[index]?.profile}
                          alt="Foto de perfil"
                          className="w-12 h-12 rounded-full ml-1 "
                        />
                        <p className="mt-3 ml-2 text-slate-100">
                          {allUsers[index]?.name}
                        </p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="h-full bg-slate-300 ">
                    <img
                      src={
                        allUsers[index]
                          ? allUsers[index]?.storie
                          : defaultImageUrl
                      }
                      className="object-cover h-full w"
                    />

                    <div
                      className={`absolute flex transform -translate-y-1/2 left-5 right-5 top-1/3 justify-between `}
                    >
                      <a
                        href={`#slide${index - 1}`}
                        className="btn btn-circle"
                        onClick={goToPreviousSlide}
                      >
                        ❮
                      </a>
                      <a
                        href={`#slide${index + 1}`}
                        className="btn btn-circle"
                        onClick={goToNextSlide}
                      >
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ModalHistorias
