/* eslint-disable react/prop-types */

export default function SubHeading({heading}) {
  return (
    <h2
      className={`text-5xl left-0 bg-blue font-Lobster text-center italic font-bold text-indigo-950 md:text-6xl lg:text-7xl`}>
      {heading}
    </h2>
  );
}
