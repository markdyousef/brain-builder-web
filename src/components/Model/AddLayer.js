import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
`;

const Inputs = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
`;

const Input = ({ ...props }) => {
    return (
        <div>
            <span>{props.name}</span>
            <input {...props} onChange={(event) => {
                event.preventDefault();
                props.onChange(event.target.value);
            }} />
        </div>
    );
};

const Button = ({ ...props, label }) => (
    <button {...props}>{label}</button>
);

const Select = ({ ...props }) => (
    <select value={props.value} onChange={event => props.onChange(event.target.value)}>
        {props.children}
    </select>
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
    renderOptions = () => {
        const { type, width, height, depth } = this.state;
        return (
            <div>
                <Inputs>
                    <Input
                        name="width (w, :, :)"
                        value={width}
                        placeholder={0}
                        onChange={value => this.setState({ width: parseInt(value)})}
                        type='number'
                        max={15}
                        min={0}
                    />
                    <Input
                        name="height (:, h, :)"
                        value={height}
                        placeholder={0}
                        onChange={value => this.setState({ height: parseInt(value)})}
                        type='number'
                        max={15}
                        min={0}
                    />
                    <Input
                        name="depth (:, :, d)"
                        value={depth}
                        placeholder={0}
                        onChange={value => this.setState({ depth: parseInt(value)})}
                        type='number'
                        max={15}
                        min={0}
                    />
                    <Button
                        label="Add"
                        onClick={this.addLayer}
                    />
                </Inputs>
            </div>
        );
    }
    renderSelectType = () => {
        const layerTypes = ['dense', 'convolutional', 'recurrent'];
        return (
            <Select
                onChange={value => this.setState({ type: value })}
                value={this.state.type}
            >
                {layerTypes.map((layer, index) =>
                    <option
                        value={layer}
                        key={layer + index}
                    >
                        {layer.toUpperCase()}
                    </option>
                )}
            </Select>
        );
    }
    render() {
        const { type, width, height, depth } = this.state;
        return (
            <Container>
                {this.renderSelectType()}
                {this.renderOptions()}
            </Container>
        );
    }
}
