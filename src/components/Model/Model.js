import React, { Component } from 'react';
import styled from 'styled-components';
import Layer from '../Layer';

const Container = styled.div`
    height: 300px;
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
                    <Layer type="input" width={5} height={20} depth={3} />
                    <Layer type="input" width={8} height={15} depth={6} />
                    <Layer type="input" width={4} height={15} depth={10} />
                    <Layer type="input" width={15} height={10} depth={6} />
                </Layers>
            </Container>
        )
    }
}
