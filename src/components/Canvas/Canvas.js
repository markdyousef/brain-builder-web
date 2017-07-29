import React from 'react';
import styled from 'styled-components';
import Model from '../Model';

const Container = styled.section`
    max-width: 100%;
    height: 350px;
    background-color: #fafafa;
`;

export default () => {
    return (
        <Container>
            <Model />
        </Container>
    );
}
