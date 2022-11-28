import './App.css';
import "./css/style.css"
import AppRouter from './AppRouter';
import { CartProvider } from './components/CartContext';

function App() {
  return (
   <CartProvider>
    <AppRouter/>
   </CartProvider>
  );
}

export default App;
