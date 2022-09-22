import { Input as AntDInput} from "antd";
import styled from "styled-components"

const StyledInput = styled(AntDInput)`
        padding: 16px;
        width: 320px;
        height: 55px;
        border-radius: 10px;
        font-family: Helvetica;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        color: black;
`;

const Input = (props) => {
    return (
        <StyledInput {...props} />
    )
}

export default Input