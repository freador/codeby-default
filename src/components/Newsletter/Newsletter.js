import React from 'react';
import './Newsletter.less';

class Newsletter extends React.Component {
  render() {
    return (
      <div className="Newsletter row">
        <div className="Newsletter__wrap clearfix">
          <div className="Newsletter__cta">
            <span className="Newsletter__cta-text">Assine nossa newsletter:</span>
          </div>
          <div className="Newsletter__form row">
            <div className="input-group">
              <input type="e-mail" className="Newsletter__form-input form-control" placeholder="e-mail"/>
              <div className="input-group-btn">
                <button className="Newsletter__form-button" type="button">
                  Quero!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
