import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../Card'
import Label from '../Label';
import Neuron from '../Neuron';
import Conv from './Conv';
import Dense from './Dense';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Inner = styled.div`
    position: relative;
    height: 100%;
    ${''/* min-height: 50px; */}
    ${''/* display: flex; */}
`;

const Front = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
`;

const Row = styled.div`
    display: flex;
`;

const renderFront = (height, depth, widthIndex, widthDem) => {
    const heightArray = Array(height).fill(Math.random());
    const depthArray = Array(depth).fill(Math.random());
    return (
        <Front style={{ left: widthIndex * 5, bottom: widthIndex * 7}}>
            {heightArray.map((id, i) =>
                <Row key={id + i}>
                    {depthArray.map((id, j) =>
                        <Neuron
                            key={id + j}
                            dimension={widthIndex}
                            alpha={(1.0 - (widthIndex / widthDem))}
                            index={[i,j]}
                        />
                    )}
                </Row>
            )}
        </Front>
    );
}

const renderLayer = (layer) => {
    const { width, height, depth } = layer;
    const widthArray = Array(width).fill(Math.random());
    return (
        <Container>
            <Inner>
                {widthArray.map((id, index) =>
                    <Row key={id + index}>
                        {renderFront(height, depth, index, widthArray.length)}
                    </Row>
                )}
            </Inner>
        </Container>
    );

}

export default class Layer extends Component {
    renderLayer = () => {
        const { type, width, height, depth, showLabels } = this.props;
        switch(type) {
            case 'convolutional':
                const { hyperParameters: { filter } } = this.props;
                return (
                    <Conv>
                        {renderLayer(filter)}
                        {showLabels&&this.renderLabels({
                            type: 'filter',
                            ...filter
                        })}
                        {renderLayer({ width, height, depth })}
                        {showLabels&&this.renderLabels({
                            type: 'convolutional',
                            width,
                            height,
                            depth
                        })}
                    </Conv>
                );
            default:
                return (
                    <Dense>
                        {renderLayer({ width, height, depth })}
                        {showLabels&&this.renderLabels({
                            type: 'dense',
                            width,
                            height,
                            depth
                        })}
                    </Dense>
                );
        }

    }
    renderLabels = (textObject) => {
        return <Label textObject={textObject}/>
    }
    render() {
        const { width, height, depth, showLabels } = this.props;
        return (
            <Card>
                {this.renderLayer(width, height, depth)}
            </Card>
        );
    }
}
