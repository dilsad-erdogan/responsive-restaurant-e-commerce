const Button = ({ text, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 max-w-[145px] items-center justify-center`}>{text}</div>
  )
}

export default Button