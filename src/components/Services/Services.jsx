import img from "../../assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    title: "Biryani",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt.",
    img: img,
  },
  {
    id: 2,
    title: "Chiken Kari",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt.",
    img: img,
  },
  {
    id: 3,
    title: "Cold Cofee",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt.",
    img: img,
  },
];

const Services = () => {
  return (
    <div className="justify-center items-center pt-10">
      <div className="text-center mb-20 max-w-[400px] mx-auto">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="text-xs text-gray-400 pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt.</p>
      </div>

      <div className="p-5 flex justify-center items-center gap-8">
        {ServicesData.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt="" className="max-h-[250px] pb-4" />
            <h1 className="text-2xl font-bold text-center pt-3 pb-3">{data.title}</h1>
            <p className="text-xs text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services