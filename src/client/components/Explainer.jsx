import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FirstPage extends Component {
  render() {
    return <p>Lorem ipsum dolor sit amet, per falli doctus in, accusam propriae ius ea. Ei duo debet everti appellantur, an sed alii quodsi feugiat. Eos id sint justo rationibus, cu iusto melius usu, ad pri velit audire eligendi. Putent oportere interpretaris at mea, usu modus summo albucius in. An possim voluptatum nec, ei usu adhuc utinam interesset, ea omnis suavitate complectitur nam. His ei iuvaret tacimates, ludus sadipscing ne sed, mei eu debet consetetur quaerendum.</p>
  }
}

class SecondPage extends Component {
  render() {
    return <p>Choro nostrud ex eos, posse graeco verterem et his, vide veritus minimum in per. Vis ut graece antiopam interpretaris, cum in mollis partiendo, mea definiebas consequuntur an. Saepe aeterno ius ex, choro scaevola maluisset mel at. Alienum scriptorem qui id, labitur eripuit ad usu. Ipsum gloriatur intellegam duo no. Quo eu aliquam iudicabit, ei nulla aeque vitae vel, sumo oblique consectetuer ea sea.</p>
  }
}

class ThirdPage extends Component {
  render() {
    return <p>Ei urbanitas liberavisse suscipiantur vim. Porro paulo alterum et eam, ea enim quodsi invenire vix. Aeterno fuisset constituto est et. Ea partem tibique persequeris mei. Eam in sint intellegebat. Eam eu suas harum tantas, exerci quaestio sit et, per ea amet meis salutandi. Ei inimicus intellegebat eos, animal omittam patrioque eam ut. Novum aeque docendi ea eam, duo sale illum recusabo id, id qui sumo dico viris. Habeo propriae mediocrem eam at, ius cu percipit antiopam disputationi.</p>
  }
}

class Explainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0
    }
  };

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.changeView((this.state.view + 1) % 3)
  };

  changeView(view) {
    this.setState({ view: view })
  };

  renderView() {
    switch(this.state.view) {
      case 0:
        return <FirstPage />;
        break;
      case 1:
        return <SecondPage />;
        break;
      case 2:
        return <ThirdPage />
        break;
    }
  };


  render() {
    return (
    <div>
      { this.renderView() }
      <button onClick={this.handleClick.bind(this)} className="btn front-page-btn">Change View</button>
    </div>
    )
  }
}

export default Explainer