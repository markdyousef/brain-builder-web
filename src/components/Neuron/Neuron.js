import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 999em;
    background-color: rgba(27, 4, 170, 1.0);
`;

export default class Neuron extends Component {
    render() {
        const { dimension } = this.props;
        const alpha = 1.0 - (dimension / 10);
        return (
            <Container style={{ backgroundColor: `rgba(27, 4, 170, ${alpha})`}}>
            </Container>
        );
    }
}
