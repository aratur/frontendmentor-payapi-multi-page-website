import React from 'react';
import StartBuilding from '../components/HomePageFragments/StartBuilding/StartBuilding';
import WhoWeWorkWith from '../components/HomePageFragments/WhoWeWorkWith/WhoWeWorkWith';
import EasyToImplement from '../components/HomePageFragments/EasyToImplement/EasyToImplement';
import SimpleUI from '../components/HomePageFragments/SimpleUI/SimpleUI';
import PersonalFinance from '../components/HomePageFragments/PersonalFinance/PersonalFinance';
import ReadyToStart from '../components/ReadyToStart';
import style from './home.module.scss';

const Main = () => (
  <main className={style.main}>
    <StartBuilding />
    <WhoWeWorkWith />
    <EasyToImplement />
    <SimpleUI />
    <PersonalFinance />
    <ReadyToStart />
  </main>
);

export default Main;
