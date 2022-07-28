import styled from "styled-components/native";
import { appFonts } from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${appFonts.semiBold};
  font-size: 48px;
`;
