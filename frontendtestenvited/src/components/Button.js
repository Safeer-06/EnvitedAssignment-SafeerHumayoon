import { Button as AntDButton} from "antd";
import styled from "styled-components"

const StyledButton = styled(AntDButton)`
        padding: 16px;
        width: 320px;
        height: 55px;
        background: linear-gradient(90deg, #9756EC 3.25%, #E87BF8 100%);
        border-radius: 10px;
        font-family: Helvetica;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        color: white;
`;

const Button = (props) => {
    return (
        <StyledButton {...props} />
    )
}

export default Button