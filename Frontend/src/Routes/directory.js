import App from './Pages/App';
import Chat from './Pages/Chat';

export const directory = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/room',
    component: Chat,
    exact: false,
  },
];
