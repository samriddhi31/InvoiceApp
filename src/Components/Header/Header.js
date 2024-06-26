import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer >
    <Time></Time>
    <Title>Invoice</Title>
    <ProfilePic src={'https://s3-alpha-sig.figma.com/img/11fa/43e7/0be3456854983b1561d30739b3650b56?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h41RHo5KI~2wQBippI5qdPhelNnqT3Td7FjLVIH1Y3R8-MFuaSw1godRm8ITUDX0gU0ydx2CPU06v0SG9WLYjv7YyKPY~mtYo~laOTYwv2n4txkavIyRmSCX57gSa2LiOQvhzvEcpsjbGlxUhMqqI7mv-2C8rmu6NW2p5gbxSh-JnFNFdzQpSW6a2XYCgpqyi2nd0QcLDPAa3PzqWkHURuVj0wuohrSBcu6X5ObVjrY63cgPNF43485d4Q32m9vLnOn9nvSb0o7mx6Em3rD93aHFl5vH4u~6au0x5~5TY-2XW2MU8uysOkQ3VLiAf3Dx4PQ52lv6ERywyMb3oLMEmg__'} alt="Profile" />
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c85e8;
  padding: 40px;
  color: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Time = styled.div`
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
