/* eslint-disable react/prop-types */

export default function Heading({heading}) {
  return (
    <h1 className='text-5xl font-Lobster text-center italic font-bold text-indigo-950 md:text-6xl lg:text-7xl'>
      {heading}
    </h1>
  );
}
