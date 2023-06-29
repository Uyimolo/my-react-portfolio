import Typewriter from "typewriter-effect";


const TypewriterHome = () => {
  return (
    <div className="font-bold bg-gradient-to-r from-blue-900 via-indigo-500 to-red-600 w-fit text-transparent bg-clip-text md:w-full">
    <Typewriter
      options={{
        strings: ["secure", "responsive", "optimized", "pixel-perfect"],
        autoStart: true,
        loop: true,
      }}
    />
  </div>
  )
}

export default TypewriterHome
