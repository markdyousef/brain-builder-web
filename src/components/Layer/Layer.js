import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.section`
    width: 200px;
    max-height: 100%;
    background-color: #ddd;
    margin: 5px;
    display: flex;
`;

export default class Layer extends Component {
    renderLayer = () => {
        const { type } = this.props;

        switch(type) {
            case 'input':
                return <Input width={5} height={20} depth={3} />
        }

    }
    render() {
        return (
            <Container>
                {this.renderLayer()}
            </Container>
        );
    }
}
