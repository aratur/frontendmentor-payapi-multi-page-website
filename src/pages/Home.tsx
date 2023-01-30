import React from 'react';
import StartBuilding from '../components/HomePageFragments/StartBuilding';
import WhoWeWorkWith from '../components/HomePageFragments/WhoWeWorkWith';
import EasyToImplement from '../components/HomePageFragments/EasyToImplement';
import SimpleUI from '../components/HomePageFragments/SimpleUI';
import HomeSectionPersonalFinance from '../components/HomePageFragments/HomeSectionPersonalFinance';
import ReadyToStart from '../components/ReadyToStart';
import style from './home.module.scss';

const Main = () => (
  <main className={style.main}>
    <StartBuilding />
    <WhoWeWorkWith />
    <EasyToImplement />
    <SimpleUI />
    <HomeSectionPersonalFinance />
    <ReadyToStart />
  </main>
);

export default Main;
