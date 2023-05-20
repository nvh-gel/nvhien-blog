import { FC } from "react";
import Container from "react-bootstrap/esm/Container";
import Header from "../../components/header/header.lazy";
import News from "../../components/news/news.lazy";
import NewsData from "../../interface/news";
import { programmingMenu } from "../../menu-items";

interface ProgrammingProps {}

const newsData: NewsData[] = [
  {
    title: "ChatGPT Comes to Your iPhone With OpenAI's New iOS App",
    content: "OpenAI on Thursday dropped a ChatGPT app for iOS. The new app gives you a way to take OpenAI's AI chatbot on the go.\nThe free app works on iPhones and iPads, supports voice input and syncs your history across devices. Like using ChatGPT on a computer, the iOS app can answer questions, help with travel plans, write poems and more...",
    url: "https://www.cnet.com/tech/services-and-software/chatgpt-comes-to-your-iphone-with-openais-new-ios-app/",
    img: "https://www.cnet.com/a/img/resize/7b6d562a59a510a770ec37325bea17f9cdf81749/hub/2023/05/18/e1f84082-50e8-47b1-8e9d-d7df6492dd56/untitled-design.png?auto=webp&fit=crop&height=675&width=1200",
  },
];

const Programming: FC<ProgrammingProps> = () => (
  <div data-testid="Programming">
    <Header items={programmingMenu} />
    <Container>
      <News news={newsData} />
    </Container>
  </div>
);

export default Programming;
