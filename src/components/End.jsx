import React from 'react';
import endData from '../mockData/endData';
import logoSVG from '../assets/img/logo.svg';

const UpperContainerTemplate = ({ header, cta, href }) => (
  <div className="end__upper_container">
    <h1 className="end_header__upper">{header}</h1>
    <a href={href}>
      <button className="end__cta" btn>
        {cta}
      </button>
    </a>
  </div>
);

const LowerContainerTemplate = ({ leftLowerContainerData, rightLowerContainerData }) => {
  const leftLowerTemplate = (
    <div className="lower__left">
      <img src={logoSVG} alt={leftLowerContainerData.img.alt} className="end__logo" />
      <p className="end__address">{`${leftLowerContainerData.adress.coords.lat}, ${leftLowerContainerData.adress.coords.lon}, ${leftLowerContainerData.adress.location.city}, ${leftLowerContainerData.adress.location.country}. ${leftLowerContainerData.adress.reservedRights}`}</p>
    </div>
  );

  const rightLowerTemplate = rightLowerContainerData.map((container, index) => (
    <div key={index} className="end__right_container">
      <div className="end_title">
        <p className="end__references_title">{container.header}</p>
      </div>
      <div className="end__sub">
        {container.sub.map((item, subIndex) => (
          <a key={subIndex} href={item.href}>
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="end__lower_container">
      {leftLowerTemplate}
      <div className="lower__right">{rightLowerTemplate}</div>
    </div>
  );
};

const LicenseTemplate = ({ title }) => <p className="license">{title}</p>;

const EndTemplate = ({ upperContainerData, leftLowerContainerData, rightLowerContainerData, licenseData }) => (
  <div className="end__section">
    <UpperContainerTemplate {...upperContainerData} />
    <LowerContainerTemplate leftLowerContainerData={leftLowerContainerData} rightLowerContainerData={rightLowerContainerData} />
    <LicenseTemplate {...licenseData} />
  </div>
);

const End = () => {
  const { upperContainerData, leftLowerContainerData, rightLowerContainerData, licenseData } = endData;

  return (
    <EndTemplate
      upperContainerData={upperContainerData}
      leftLowerContainerData={leftLowerContainerData}
      rightLowerContainerData={rightLowerContainerData}
      licenseData={licenseData}
    />
  );
};

export default End;
