import React from "react";
import s from './TitleSection.module.css';

type PropsType = {
  title: string
}

const TitleSection:React.FC<PropsType> = ({title}) => {
  return <h2 className={s.title}>{title}</h2>
}

export default TitleSection;
