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
            { type: "input", width: 10, height: 6, depth: 3 },
            { type: "input", width: 10, height: 11, depth: 3 },
            { type: "input", width: 12, height: 5, depth: 3 },
            { type: "input", width: 5, height: 5, depth: 3 }
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
        console.log('##UPDATE MODEL')
        return (
            <Container>
                <Layers>
                    {layers.map((layer, index) =>
                        <Layer {...layer} key={layer.type + index} />
                    )}
                </Layers>
                <Controls addLayer={this.addLayer}/>
            </Container>
        )
    }
}
