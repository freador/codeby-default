import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import facebookIcon from 'assets/icons/facebook_icon.svg';
import facebookImg from 'assets/icons/facebook_icon.png';
import instagramIcon from 'assets/icons/instagram_icon.svg';
import instagramImg from 'assets/icons/instagram_icon.png';


class HeaderTop extends React.Component {

  render() {

    let phoneNumber;
    phoneNumber = '(21) 3593-4758';

    let phoneNumberURL;
    phoneNumberURL = 'tel:' + phoneNumber;

    let loginURL;
    loginURL = '#';

    let accountURL;
    accountURL = '#';

    return (
      <div className="HeaderTop clearfix">
        <div className="HeaderTop__wrap">
          <div className="col-md-2 col-lg-2 col-sm-2 hidden-xs HeaderTop__social">
            <button className="HeaderTop__button">
              <a href="">
                <SVGIcon className="HeaderTop__icon" svg={facebookIcon} fallback={facebookImg} height={15} fill="#2D4966" />
              </a>
            </button>
            <button className="HeaderTop__button">
              <a href="">
                <SVGIcon className="HeaderTop__icon" svg={instagramIcon} fallback={instagramImg} height={15} fill="#2D4966" />
              </a>
            </button>
          </div>
          <div className="HeaderTop__contact col-md-10 col-lg-10 col-xs-12 col-sm-10">
            <div className="HeaderTop__login pull-right">
              <span><a className="HeaderTop__login-link" href={loginURL}>Login</a></span>
            </div>
            <div className="HeaderTop__login pull-right">
              <span><a className="HeaderTop__login-link" href={accountURL}>Minha Conta</a></span>
            </div>
            <div className="HeaderTop__phone-cta">
              <span className="HeaderTop__phone-number">
                <a href={phoneNumberURL} className="HeaderTop__phone-url">
                  {phoneNumber}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
