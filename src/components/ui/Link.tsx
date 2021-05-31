import React from 'react';
import styled from 'styled-components';

const Link = (children: any) => {
  return <StyledLink>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  display: block;
`;

export default Link;
