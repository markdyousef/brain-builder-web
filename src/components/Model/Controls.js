import React from 'react';
import styled from 'styled-components';
import AddLayer from './AddLayer';

const Container = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid #000;
`;

export default ({ addLayer }) => {
    return (
        <Container>
            <AddLayer add={addLayer} />
        </Container>
    );
}
