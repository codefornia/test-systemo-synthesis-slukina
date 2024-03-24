import './styles.css';
import { Header } from '@widgets/header';
import { GameBoard } from '@features/gameBoard';

export const Home = () => (
  <div className="homepage">
    <Header />
    <GameBoard />
  </div>
);
