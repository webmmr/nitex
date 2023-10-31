export default function Testimonial({ item }) {
  return (
    <div className=" p-8 shadow-sm rounded-lg border">
      <img src={item.image} alt="Company" className="mb-6" width={100} />

      <p className="leading-6 text-stone-700 mb-8">{item.text}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center">
          <img
            src={item.personImage}
            alt={item.person}
            className="mr-4"
            width={70}
          />
          <div>
            <h5 className="font-bold text-lg text-stone-900">{item.person}</h5>
            <p className="text-stone-600">{item.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
