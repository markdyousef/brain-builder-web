import React from 'react';
import styled from 'styled-components';
import Model from '../Model';

const Container = styled.section`
    max-width: 100%;
    height: 300px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export default () => {
    return (
        <Container>
            <Model />
        </Container>
    );
}
