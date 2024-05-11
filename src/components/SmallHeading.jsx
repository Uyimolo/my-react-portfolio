// eslint-disable-next-line react/prop-types
export default function SmallHeading({ heading, color = 'light' }) {
  const textColor = color === 'light' ? 'text-gray-200' : 'text-gray-900';
  return (
    <h2 className={`text-3xl font-Poppins text-center lg:text-4xl ${textColor}`}>
      {heading}
    </h2>
  );
}
