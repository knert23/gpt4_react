import registrationBarData from "../mockData/registrationBarData";

export const LeftMiniHeaderTemplate = ({ miniHeaderData }) => {
    const {description} = miniHeaderData
    return <><p className="right__mini_header">{description}</p></>;
};

export const LeftHeaderTemplate = ({ headerData }) => {
    const {description} = headerData;
    return <><h3 className="right__header">{description}</h3></>;
};

export const RightButtonTemplate = ( {buttonsData}) => {
    const {href, title} = buttonsData;
    return (
            <>
                <a href ={href}>
                    <button className="cta_buttons__start btn2">{title}</button> 
                </a>
            </> 
            );
};

export const RegistrationBar = () => {
    const {headerData, miniHeaderData, buttonsData} = registrationBarData

    return (
        <>
            <div className = "registration_bar_section">
                <div className = "registration_bar_section__left">
                    <LeftMiniHeaderTemplate miniHeaderData = {miniHeaderData} />
                    <LeftHeaderTemplate headerData = {headerData} />
                </div>
                <div className = "registration_bar_section__right">
                    <div className="cta_buttons">
                        <RightButtonTemplate buttonsData = {buttonsData} />
                    </div>
                </div>
            </div>
        </>
    );
}