import React from 'react';
import styled from 'styled-components';
import Neuron from '../Neuron';

const Container = styled.div`
    height: 100%;
    position: relative;
    display: flex;
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

const renderFront = (height, depth, widthDim) => {
    const heightArray = Array(height).fill(Math.random());
    const depthArray = Array(depth).fill(Math.random());
    return (
        <Front style={{ left: widthDim * 15, bottom: widthDim * 15}}>
            {heightArray.map((id, index) =>
                <Row key={id + index}>
                    {depthArray.map((id, index) =>
                        <Neuron key={id + index} dimension={widthDim} />
                    )}
                </Row>
            )}
        </Front>
    );
}

const renderLayer = (width, height, depth) => {
    const widthArray = Array(width).fill(Math.random());
    return (
        <Container>
            {widthArray.map((id, index) =>
                <Row key={id + index}>
                    {renderFront(height, depth, index)}
                </Row>
            )}
        </Container>
    );

}

export default ({ width, height, depth }) => {
    return (
        <div>
            {renderLayer(width, height, depth)}
        </div>
    );
}
