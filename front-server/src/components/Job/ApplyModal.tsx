import React from 'react'
import '../../assets/styles/Job/ApplyModal.css'
import square from '../../assets/image/Square.png'
import { CgClose } from 'react-icons/cg'
type Props = {
  open?: boolean
  close?: any
}
export default function ApplyModal({ open, close }: Props) {
  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main className="modal-main">
            <div className="Modal-container">
              <div>
                <div className="Modal-title">
                  <div className="Big-category">전형방법</div>
<<<<<<< HEAD
                  <button onClick={close}>&times;</button>
=======

                  <div className="Close-button" onClick={close}>
                    <CgClose size="24" color="gray" />
                  </div>
>>>>>>> a97a76d13f0c757d53c6de18c4561360a5b884ca
                </div>
                <div>
                  <img className="square" src={square} alt="" />
                  <hr />
                </div>
              </div>
<<<<<<< HEAD
              <div>
                <div className="Modal-line-container">
                  <div className="Mid-category Modal-flexgrow1">접수마감</div>
                  <div className="Modal-flexgrow2">데이터</div>
                </div>
                <div className="Modal-line-container">
                  <div className="Mid-category Modal-flexgrow1">전형방법</div>
                  <div className="Modal-flexgrow2">데이터</div>
                </div>
                <div className="Modal-line-container">
                  <div className="Mid-category Modal-flexgrow1">접수방법</div>
                  <div className="Modal-flexgrow2">데이터</div>
                </div>
                <div className="Modal-line-container">
                  <div className="Mid-category Modal-flexgrow1">제출서류</div>
                  <div className="Modal-flexgrow2">데이터</div>
                </div>
=======

              <div className="Modal-line-container">
                <div className="Mid-category">접수마감</div>
                <div>데이터</div>
              </div>
              <div className="Modal-line-container">
                <div className="Mid-category">전형방법</div>
                <div>데이터</div>
              </div>
              <div className="Modal-line-container">
                <div className="Mid-category">접수방법</div>
                <div>데이터</div>
              </div>
              <div className="Modal-line-container">
                <div className="Mid-category">제출서류</div>
                <div>데이터</div>
>>>>>>> a97a76d13f0c757d53c6de18c4561360a5b884ca
              </div>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  )
}
