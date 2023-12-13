import earlyAccessData from "../mockData/earlyAccessData";
import VrWomanPng from "../assets/img/vr_headset_woman.png";

export const LeftEarlyAccessSectionTemplate = ({ leftEarlyAccessData }) => {
    const { alt } = leftEarlyAccessData;
    return <><div className = "early_access_section__left"><img src = {VrWomanPng} alt = {alt} /></div></>;
};


export const RightEarlyAccessSectionTemplate = ({rightEarlyAccessData}) => {
    const { header, descriprion, mini_header, href, cta } = rightEarlyAccessData;
    return (
    <>
        <div className = "early_access_section__right">
            <p className = "right__mini_header">
                {mini_header}
            </p>
            <h2 className ="right__header">
                {header}
            </h2>
            <p className = "right__description">
                {descriprion}
            </p>
            <a href={href} className="right__cta">{cta}</a>
        </div>
    </>
    
  );
};

export const EarlyAccess = () =>{
    const {leftEarlyAccessData, rightEarlyAccessData} = earlyAccessData;

    return (
        <>
            <LeftEarlyAccessSectionTemplate leftEarlyAccessData = {leftEarlyAccessData} />;
            <RightEarlyAccessSectionTemplate rightEarlyAccessData = {rightEarlyAccessData} />;
        </>
    );
 };
