import React, {useState} from 'react';

export default function App() {

  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)

  const [modalImage, setmodalImage] = useState({
    show : false,
    src : ""
  })

  // function tampilkan modal
  const handleModal = ()=>{
    setModal(!modal)
  }

  const handleImageModal = (e)=>{
    setmodalImage({
      show : true,
      src : e.target.src
    })
  }  
  setTimeout(()=>{
    setLoading(false)
  }, 3000)
  // kondisi ketika loading bernilai true
  if(loading){
    return (
      <div className="loadingScreen">
        Loading Please Wait ...
      </div>
    )

  }

  return (
    <>
    {/* jika modal true,maka render close modal */}
    {modal && (
      <div className="modal">
      <h1>ini modal</h1>
      <button onClick={handleModal}>close modal</button>
    </div>
    )}

    {modalImage.show && (
      <div className="modal">
        <img src={modalImage.src} alt=""/>
        <button onClick={()=>{
          setmodalImage({
            show : false,
            src : ""
          })
        }}>Close Image Modal</button>
      </div>
    )}

    <div>
      <h1>halooo!!!</h1>
      <button onClick={handleModal}>open modal</button>
    </div>

    <div className="imgWrapper">
      <img src="https://images.pexels.com/photos/12737062/pexels-photo-12737062.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load" alt="" onClick={handleImageModal} />

      <img src="https://images.pexels.com/photos/12737062/pexels-photo-12737062.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load" alt="" onClick={handleImageModal}/>

      <img src="https://images.pexels.com/photos/12737062/pexels-photo-12737062.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load" alt="" onClick={handleImageModal}/>
    </div>
    </>
    
  );
}
