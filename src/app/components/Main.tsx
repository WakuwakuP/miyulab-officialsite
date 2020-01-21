import { NextPage } from 'next';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../actions';
import Nav from './organisms/Nav';

interface Props {
  actions: any;
  state: any;
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => {
  useEffect(() => {
    if (props.state.ui.firstView) {
      props.actions.firstView();
      props.actions.refLogin();
    }
  });
  return (
    <main className='main'>
      <Nav pathname={props.pathname} />
      {props.children}
      <style jsx>{`
      .main {
        width: 100%;
        margin: 0 auto;
      }
      @media (min-width: 768px) {
        .main {
          display: grid;
          grid-template-columns: 200px 1fr;
          width: 100%;
        }
      }

      @media (min-width: 1024px) {
        .main {
          width: 1024px;
        }
      }
    `}</style>
    </main>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
