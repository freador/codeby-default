import React from 'react';
import { Link } from 'react-router';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import storeLogo from 'assets/images/store_logo.svg';
import storeLogoImg from 'assets/images/store_logo.png';

class HeaderLogo extends React.Component {

  render() {

    let logoImage = true;
    let logoAlt = 'Modally';


    let logoImageMarkup = (
      <a href="/" className="HeaderLogo__image">
        <SVGIcon className="HeaderLogo__svg" svg={storeLogo} fallback={storeLogoImg} height={40} width={100} alt-text={logoAlt} cleanupExceptions={['fill', 'width', 'height']} />
      </a>
    );

    let logoTextMarkup = (
      <h1 className="HeaderLogo__font">
        <Link to="/">Modally</Link>
      </h1>
    );

    let logoContent = logoImage ? logoImageMarkup : logoTextMarkup;

    return (
      <div className="HeaderLogo col-xs-6 col-sm-3 col-md-3 col-lg-3">
        {logoContent}
      </div>

    );
  }
}

export default HeaderLogo;
