 
import person from'../../../assets/images/about_us/person.jpg'
import parts from'../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className='relative lg:w-1/2'>
   <img src={person} className="max-w-sm w-3/4 rounded-lg shadow-2xl  " />
    <img src={parts} className="max-w-sm w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
   </div>
    <div className="lg:w-1/2 space-y-5 placeholder p-4">
        <h4 className='text-red-500 text-3xl font-bold  '>About Us</h4>
      <h1 className="text-5xl font-bold ">We are qualified & of experience in this field</h1>
      <p className="py-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <p className='py-6'>  The majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <button className="btn btn-secondary ">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default AboutUs;