import React from "react";
import s from './Section.module.css';
import HW1 from "../p2-homeworks/h1/HW1";
import HW2 from "../p2-homeworks/h2/HW2";
import HW3 from "../p2-homeworks/h3/HW3";
import HW4 from "../p2-homeworks/h4/HW4";
import HW6 from "../p2-homeworks/h6/HW6";

type SectionPropsType = {
  color: string
}

const Section: React.FC<SectionPropsType> = () => {
  return (
    <section className={s.section}>
      <HW1/>
      <HW2/>
      <HW3/>
      <HW4/>
      <HW6/>
    </section>
  )
}

export default Section;
