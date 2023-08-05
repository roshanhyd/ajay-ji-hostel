import { render, screen } from '@testing-library/react';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/root-reducer';
import { Provider } from 'react-redux';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { user: rootReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
test('renders learn react link', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Welcome to App/i);
  expect(linkElement).toBeInTheDocument();
});
