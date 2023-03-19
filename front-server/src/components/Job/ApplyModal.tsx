import React from 'react'
import './ApplyModal.css'
import square from '../../assets/image/Square.png'
type Props = {
  open?: any
  close?: any
}
export default function ApplyModal({ open, close }: Props) {
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main className="modal-main">
            <div className='Modal-container'>
              <div>
                <div className='Modal-title'>
                <div className="Big-category">전형방법</div>
                <button onClick={close}>&times;</button>
                </div>
                <div>
                <img className="square" src={square} alt="" />
                <hr />
                </div>
              </div>

                <div className="Modal-line-container">   
                    <div className="Mid-category">접수마감</div>
                    <div>데이터</div>
                </div >
                <div className="Modal-line-container">  
                    <div className="Mid-category">전형방법</div>
                    <div>데이터</div>
                </div >
                <div className="Modal-line-container">  
                    <div className="Mid-category">접수방법</div>
                    <div>데이터</div>
                </div>
                <div className="Modal-line-container">  
                    <div className="Mid-category">제출서류</div>
                    <div>데이터</div>
                </div>
              
            </div>
          </main>
        </section>
      ) : null}
    </div>
  )
}
