const Heading = ({ firsttitle, title, subtitle }) => {
    return (
      <div className="text-center mb-10 mt-10 max-w-[450px] mx-auto space-y-2">
          <p className="text-sm text-yellow-500">{firsttitle}</p>
          <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
          <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    )
  }
  
  export default Heading