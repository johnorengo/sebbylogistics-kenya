import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from './App';
import { SebbyLogo } from './components/SebbyLogo';

export function render() {
  return renderToString(<App />);
}

export function renderLogo() {
  return renderToStaticMarkup(<SebbyLogo />).match(/<svg[\s\S]*?<\/svg>/)![0];
}
