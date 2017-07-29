import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Card from '../Card'
import Label from '../Label';

export default class Layer extends Component {
    renderLayer = () => {
        const { type, width, height, depth } = this.props;
        switch(type) {
            case 'input':
                return <Input width={width} height={height} depth={depth} />
        }

    }
    renderLabels = () => {
        return <Label textObject={{...this.props}}/>
    }
    render() {
        return (
            <Card>
                {this.renderLayer()}
                {this.renderLabels()}
            </Card>
        );
    }
}
