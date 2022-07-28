import React from "react";
import BannerBackground from "../../../assets/images/banner/banner.png";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import {
  Container,
  ContentContainer,
  ButtonContainer,
  ImageHeader,
  Title,
  SubTitle,
} from "./styles";
import { OnBoardProps } from "../../types/navigation";

const OnBoarding = () => {
  const navigation = useNavigation<OnBoardProps>();
  const handleGoToHome = () => {
    navigation.navigate({ name: "Home", key: "Home" });
  };
  //TODO:
  return (
    <Container>
      <ImageHeader source={BannerBackground} />
      <ContentContainer>
        <Title>Descubra a cidade</Title>
        <SubTitle>
          A forma divertida e rápida de conhecer lugares incríveis
        </SubTitle>
      </ContentContainer>
      <ButtonContainer>
        <Button title="Entrar" onPress={handleGoToHome} />
      </ButtonContainer>
    </Container>
  );
};

export default OnBoarding;
