import styled from 'styled-components';

interface Props {
    margin?: boolean;
    top?: boolean;
    painel?: boolean;
    shadow?: boolean;
}

const Container = styled.div<Props>`
box-shadow: ${({ shadow }) => shadow ? '0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)' : '0 0 0 1px rgba(0,0,0,.15)'};
background-color: ${({ painel }) => painel ? '#f3f6f8' : '#fff'};
background-clip: padding-box;
border-radius: 2px;
transition: box-shadow 83ms;
margin-bottom: 10px;
${({ margin }) => margin && 'margin: 1px 10px 0  1px;'}
${({ top }) => top && 'margin-top: 20px;'}
`;

export default Container;
