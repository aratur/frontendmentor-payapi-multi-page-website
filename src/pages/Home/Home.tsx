import React from 'react';
import StartBuilding from './StartBuilding/StartBuilding';
import WhoWeWorkWith from './WhoWeWorkWith/WhoWeWorkWith';
import EasyToImplement from './EasyToImplement/EasyToImplement';
import SimpleUI from './SimpleUI/SimpleUI';
import PersonalFinance from './PersonalFinance/PersonalFinance';
import ReadyToStart from '../../components/ReadyToStart/ReadyToStart';
import style from './home.module.scss';

const Home = () => (
  <main className={style.home__main}>
    <StartBuilding />
    <WhoWeWorkWith />
    <EasyToImplement />
    <SimpleUI />
    <PersonalFinance />
    <ReadyToStart />
  </main>
);

export default Home;
