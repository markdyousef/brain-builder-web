import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
`;

const Input = ({ ...props }) => (
    <input {...props} onChange={(event) => {
        event.preventDefault();
        props.onChange(event.target.value);
    }} />
);

const Button = ({ ...props, label }) => (
    <button {...props}>{label}</button>
);

const initialState = {
    type: '',
    width: 0,
    height: 0,
    depth: 0
}

export default class AddLayer extends Component {
    state = initialState;
    addLayer = () => {
        const { add } = this.props;
        add(this.state)
        this.setState(initialState)

    }
    render() {
        const { type, width, height, depth } = this.state;
        console.log(this.state)
        return (
            <Container>
                <Input
                    value={type}
                    placeholder="type"
                    onChange={value => this.setState({ type: value})}
                    type='text'
                />
                <Input
                    value={width}
                    placeholder="width"
                    onChange={value => this.setState({ width: parseInt(value)})}
                    type='number'
                />
                <Input
                    value={height}
                    placeholder="height"
                    onChange={value => this.setState({ height: parseInt(value)})}
                    type='number'
                />
                <Input
                    value={depth}
                    placeholder="depth"
                    onChange={value => this.setState({ depth: parseInt(value)})}
                    type='number'
                />
                <Button
                    label="Add"
                    onClick={this.addLayer}
                />
            </Container>
        );
    }
}
