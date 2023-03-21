import React from 'react'
import '../../assets/styles/Job/ApplyModal.css'
import square from '../../assets/image/Square.png'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'
import BokBtn1 from '../Common/BokBtn1'
type Props = {
  open?: boolean
  close?: any
}
export default function ApplyModal({ open, close }: Props) {
  const process = '방문, 워크넷'
  const [worknet] = useState<boolean>(process.includes('워크넷'))
  const url = 'https://www.naver.com'

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <main className="modal-main">
            <div className="Modal-container">
              <div>
                <div className="Modal-title">
                  <div className="Big-category">지원방법</div>

                  <div className="Close-button" onClick={close}>
                    <CgClose size="24" color="gray" />
                  </div>
                </div>
                <div>
                  <img className="square" src={square} alt="" />
                  <hr />
                </div>
              </div>

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
              <div className="Modal-line-container Button-container">
                <div>
                  {/* 접수방법 확인하기 */}
                  {worknet ? (
                    <div>
                      <BokBtn1
                        sigwidth="300px"
                        sigheight="50px"
                        sigfontsize="20px"
                        sigborderradius={25}
                        sigmargin=""
                        onClick={() => {
                          window.open(url)
                        }}
                      >
                        워크넷에서 지원하기
                      </BokBtn1>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </main>
        </section>
      ) : null}
    </div>
  )
}
