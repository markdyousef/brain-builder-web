import React from 'react';
import styled from 'styled-components';

const Card = styled.nav`
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    background-color: #fff;
    margin: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    ${''/* position: relative; */}
    min-width: 300px;
    overflow: hidden;
`;

export default ({ children }) => {
    return (
        <Card>
            {children}
        </Card>
    );
}
