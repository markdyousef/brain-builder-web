import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    background-color: #ddd;
    align-items: center;
    justify-content: space-around;
`;

const Type = styled.span``;

const Shape = styled.span``;

export default ({ textObject }) => {
    const { type, width, height, depth } = textObject;
    return (
        <Container>
            <Type>{type}</Type>
            <Shape>{`shape: (${width}, ${height}, ${depth})`}</Shape>
        </Container>
    )
}
