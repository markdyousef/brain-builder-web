import React from 'react';
import styled from 'styled-components';
import Neuron from '../Neuron';

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

const renderLayer = (width, height, depth) => {
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

export default ({ width, height, depth }) => renderLayer(width, height, depth)
