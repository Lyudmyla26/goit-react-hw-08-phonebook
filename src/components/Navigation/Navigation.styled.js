import styled from 'styled-components';

export const NAV = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: 1000px;

  background: #e6eaff;
  text-shadow: 1px 1px 0 #fff;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
`;
export const Log = styled.div`
  display: flex;
  gap: 15px;
`;
