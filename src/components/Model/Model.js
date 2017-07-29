import React, { Component } from 'react';
import styled from 'styled-components';
import Layer from '../Layer';
import Controls from './Controls';

const Container = styled.div`
    height: 100%;
`;

const Layers = styled.div`
    height: 100%;
    display: flex;
`;

export default class Model extends Component {
    state = {
        layers: [
            { type: 'input', width: 15, height: 15, depth: 3 },
            {
                type: 'convolutional',
                width: 8,
                height: 8,
                depth: 15,
                hyperParameters: {
                    depth: 5,
                    stride: 2,
                    filter: {
                        width: 2,
                        height: 2,
                        depth: 2
                    },
                    padding: 0

                }
            },
            { type: 'recurrent', width: 6, height: 6, depth: 6 }
        ]
    }
    addLayer = (layer) => {
        const { type, width, height, depth } = layer;
        const { layers } = this.state;
        if (width && height && depth) {
            const newLayers = Object.assign([...layers, { type, width, height, depth }]);
            this.setState({ layers: newLayers });
        }
    }
    render() {
        const { layers } = this.state;
        return (
            <Container>
                <Layers>
                    {layers.map((layer, index) =>
                        <Layer
                            {...layer}
                            key={layer.depth}
                            showLabels
                        />
                    )}
                </Layers>
                <Controls addLayer={this.addLayer}/>
            </Container>
        )
    }
}
