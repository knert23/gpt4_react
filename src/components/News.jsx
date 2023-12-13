import newsData from "../mockData/newsData";
import block1PNG from "../assets/img/news/1block.png"
import block2PNG from "../assets/img/news/2block.png"
import block3PNG from "../assets/img/news/3block.png"
import block4PNG from "../assets/img/news/4block.png"
import block5PNG from "../assets/img/news/5block.png"

const Header = ({ title }) => <h1 className="news_header">{title}</h1>;

const LeftContainerNews = ({ leftNewsInfoData }) => (
  <div className="container__left">
    <img src={block1PNG} alt={leftNewsInfoData.title} />
    <div className="container_text__left">
      <div className="upper_text__left">
        <p className="date">{leftNewsInfoData.date}</p>
        <h3 className="news_title">{leftNewsInfoData.title}</h3>
      </div>
      <a href={leftNewsInfoData.href} className="cta">
        Читать полную статью
      </a>
    </div>
  </div>
);

export const RightContainerNewsImage = ({ alt }) => {
  switch (alt) {
    case "block2":
      return <img src={block2PNG} alt={alt} />;
    case "block3":
      return <img src={block3PNG} alt={alt} />;
    case "block4":
      return <img src={block4PNG} alt={alt} />;
    case "block5":
      return <img src={block5PNG} alt={alt} />;
    default:
      return ;
  }
};

const RightContainerNews = ({ rightNewsInfoData }) => {
  return rightNewsInfoData.map((item, index) => (
    <div className="container__right" key={index}>
      <RightContainerNewsImage alt={item.alt} />
      <div className="container_text__right">
        <div className="upper_text__right">
          <p className="date">{item.date}</p>
          <h3 className="news_title">{item.title}</h3>
        </div>
        <a href={item.href} className="cta">
          Читать полную статью
        </a>
      </div>
    </div>
  ));
};

const NewsTemplate = ({ leftNewsInfoData, rightNewsInfoData, headerData }) => {
  const leftContainerNewsTmpl = <LeftContainerNews leftNewsInfoData={leftNewsInfoData} />;
  const rightContainerNewsTmpl = <RightContainerNews rightNewsInfoData={rightNewsInfoData} />;

  return (
    <div className="news__section">
      <Header {...headerData} />
      <div className="news_block">
        <div className="news_block__left">{leftContainerNewsTmpl}</div>
        <div className="news_block__right">{rightContainerNewsTmpl}</div>
      </div>
    </div>
  );
};

const News = () => {
  const { leftNewsInfoData, rightNewsInfoData, headerData } = newsData;

  return (
    <NewsTemplate
      leftNewsInfoData={leftNewsInfoData}
      rightNewsInfoData={rightNewsInfoData}
      headerData={headerData}
    />
  );
};

export default News;
