import React from "react";
import { imgs } from "../img/calendar.png";

const data = [
  [
    {
      title: "Lorem ipsum lorem ipsum",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe?",
    },
    {
      title: "Lorem ipsum lorem ipsum",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe?",
    },
    {
      title: "Lorem ipsum lorem ipsum",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe?",
    },
    {
      title: "Lorem ipsum lorem ipsum",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe?",
    },
  ],
  [
    {
      title: "Lorem ipsum lorem ipsum lorem ",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe?",
    },
    {
      title: "Lorem ipsum lorem ipsum",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro dolorum voluptates quo eum, inventore natus ad nihil maxime saepe?",
    },
  ],
];

const SectionComponint1 = (props) => {
  console.log(props);
  return (
    <div>
      <img src={imgs} className="sectionImg" />
      <p className="sectionP">{props.childern.title}</p>
      <span className="sectionSpan">{props.childern.text}</span>
    </div>
  );
};

let data1 = [];
let data2 = [];
{
  data[0].forEach((el, ixd) => {
    data1.push(<SectionComponint1 childern={el} key={ixd} />);
  });
}
{
  data[1].forEach((el, ixd) => {
    data2.push(<SectionComponint1 childern={el} key={ixd} />);
  });
}
export const Section = () => {
  return <><div>{data1}</div><div>{data2}</div></>;
};
