import React from 'react';
import styled from 'styled-components';
import Model from '../Model';

const Container = styled.section`
    margin: 20px;
    max-width: 100%;
    height: 500px;
    border: 1px solid #000;
`;

export default () => {
    return (
        <Container>
            <Model />
        </Container>
    );
}
