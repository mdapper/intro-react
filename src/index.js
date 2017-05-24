import React from 'react';
import { render } from 'react-dom';
// AppContainer é componente wrapper necessário para HMR
import { AppContainer } from 'react-hot-loader';

// Nosso componente principal
import App from './components/App';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App);
  });
}
