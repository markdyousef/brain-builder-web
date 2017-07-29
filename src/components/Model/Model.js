import React, { Component } from 'react';
import styled from 'styled-components';
import Layer from '../Layer';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ede;
`;

const Layers = styled.div`
    height: 100%;
    display: flex;
`;

export default class Model extends Component {
    render() {
        return (
            <Container>
                <Layers>
                    <Layer type="input"/>
                    <Layer />
                    <Layer />
                    <Layer />
                </Layers>
            </Container>
        )
    }
}
