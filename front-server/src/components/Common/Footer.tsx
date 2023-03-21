import React from 'react'
import '../../assets/styles/Common/Footer.css'
import Logo from '../../assets/image/MainLogo.png'
export default function Footer() {
  return (
    <div className="Footer-main-container">
      <div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="Footer-content-container">
          <div>대표 : 이재호 | 부대표 : 하상재</div>
          <div>주소 : 부산 강서구 녹산산업중로 333</div>
          <div>고객상담 전화번호 : 0000-0000</div>
          <div>이메일 : SSAFY @ naver.com</div>
          <div>Copyright ⓒ 싸라벨. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}
