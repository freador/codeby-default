import React from 'react';
import './ProductDescription.less';

class Description extends React.Component {
  render() {
    return (
      <div>
        <div className="ProductDescription row">
            <h3 className="ProductDescription__title">Descrição</h3>
            <div className="ProductDescription__text">
              <p>A Modally acredita que o conforto faz um bom guarda-roupa. Queremos que você aproveite sua liberdade com simplicidade, qualidade e ao mesmo tempo tenha certeza que sua roupa é particulamente confortável de usar.</p>
              <p>87% modal</p>
              <p>10% seda</p>
              <p>3% elastano</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Description;
