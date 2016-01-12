import React from 'react';
import './Policies.less';
import SVGIcon from 'utils/SVGIcon';
import exchangeIcon from 'assets/icons/exchange_icon.svg';
import exchangeImg from 'assets/icons/exchange_icon.png';
import shippingIcon from 'assets/icons/shipping_icon.svg';
import shippingImg from 'assets/icons/shipping_icon.png';
import giftIcon from 'assets/icons/gift_icon.svg';
import giftImg from 'assets/icons/gift_icon.png';

class Policies extends React.Component {
  render() {
    return (
      <div className="Policies clearfix">
        <h2 className="Policies__title">
          Melhores Condições
        </h2>

        <div className="Policies__single row clearfix">
          <div className="col-xs-1 col-xs-offset-1">
            <SVGIcon className="Policies__icon" svg={exchangeIcon} fallback={exchangeImg} width={17} height={18} fill="#EDAF97"/>
          </div>
          <h3 className="Policies__single-title col-xs-9">
            Troca fácil
          </h3>

          <div className="col-xs-10 col-xs-offset-1">
            <p className="Policies__description">A gente dá 30 dias, após o recebimento, para você ter certeza de que a sua roupa ficou perfeita! E com certeza vai ficar.</p>
          </div>
        </div>

        <div className="Policies__single row clearfix">
          <div className="col-xs-1 col-xs-offset-1 Policies__icon-wrapper">
            <SVGIcon className="Policies__icon" svg={shippingIcon} fallback={shippingImg} width={20} height={22} fill="#EDAF97"/>
          </div>
          <h3 className="Policies__single-title">
            Frete Grátis
          </h3>

          <div className="col-xs-10 col-xs-offset-1">
            <p className="Policies__description">Oferecemos frete grátis em qualquer compra a partir de 2 produtos. Para (quase) qualquer lugar do Brasil.</p>
          </div>
        </div>

        <div className="Policies__single row clearfix">
          <div className="col-xs-1 col-xs-offset-1">
            <SVGIcon className="Policies__icon" svg={giftIcon} fallback={giftImg} width={14} height={18} fill="#EDAF97" />
          </div>
          <h3 className="Policies__single-title col-xs-9">
            Mimos de aniversário
          </h3>

          <div className="col-xs-10 col-xs-offset-1">
            <p className="Policies__description">Durante todo o mês do seu aniversário, você ganha 20% de desconto em qualquer produto da loja!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
