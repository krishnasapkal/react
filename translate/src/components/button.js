import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

  renderUi = (color) => {
    return   (<button className= {`ui button ${color}`}>
      <LanguageContext.Consumer>
       { ({language}) => {
          return    language == 'english' ? 'Submit' : 'Prastut Kara'
        }}
    </LanguageContext.Consumer>
    </button>
    )
    }
  
  render() {
    return (
      <ColorContext.Consumer>
      {
      this.renderUi
      }
      </ColorContext.Consumer>
    
    )
  }
}

export default Button;