import Btn from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { ButtonProps } from '@mui/material'

interface BokBtnProps extends ButtonProps {
  sigwidth?: string
  sigheight?: string
  sigfontsize?: string
  sigborderradius?: number
  sigmargin?: string
}

const BokBtn1 = styled(Btn)<BokBtnProps>(
  ({ sigwidth, sigheight, sigfontsize, sigborderradius, sigmargin }) => `
  background-color: #76DCB0;
  width: ${sigwidth};
  height: ${sigheight};
  font-size: ${sigfontsize};
  font-family: 'NanumGothic';
  border: 1px solid #76DCB0;
  border-radius: ${sigborderradius};
  box-shadow: 0px 4px 7px rgba(0,0,0,0.25);
  color: #fff;
  margin: ${sigmargin};
  display: flex;
  z-index: 0;
  &:hover {
    background-color: #fff;
    border: 1px solid #76DCB0;
    color: #76DCB0;
  }
`
)

export default BokBtn1
