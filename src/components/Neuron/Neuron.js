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
        const { dimension, index, alpha } = this.props;
        // const alpha = 1 - (dimension / index[0]);
        // console.log(alpha)
        return (
            <Container style={{ backgroundColor: `rgba(27, 4, 170, ${alpha})`}}>
            </Container>
        );
    }
}
