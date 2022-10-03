import { MainForm } from "../../Components/MainForm";
import { Result } from "../../Components/Result";
import { HomeContainer, MainContent } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <MainContent>
        <MainForm />
        <Result />
      </MainContent>
    </HomeContainer>
  );
};
