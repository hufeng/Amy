import { StackNavigator } from 'react-navigation';
import HomeScene from '../home';
import MathScene from '../math';
import WordScene from '../word';

export default StackNavigator({
  HomeScene: { screen: HomeScene },
  MathScene: { screen: MathScene },
  WordScene: { screen: WordScene }
});
