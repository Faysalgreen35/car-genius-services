import banner from '../../../../assets/images/banner/1.jpg';
import banner2 from '../../../../assets/images/banner/2.jpg';
import banner3 from '../../../../assets/images/banner/3.jpg';
import banner4 from '../../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} className="w-full rounded-lg" />
                <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#131316] to-[#15151500]'>
                    <div className=' top-1/3  text-white space-y-7 w-[40%] pl-10 '>
                        <h2 className='text-7xl font-bold '> Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div>
                            <button className="btn btn-error mr-5">Discover</button>

                            <button className="btn btn-outline btn-success">LatestProject</button>
                        </div>


                    </div>


                </div>

                <div className="absolute flex   transform  bottom-0 right-5 mb-12 ">


                    <a href="#slide4" className="btn btn-circle  mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white  bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#131316] to-[#15151500]'>
                    <div className=' top-1/3  text-white space-y-7 w-[40%] pl-10 '>
                        <h2 className='text-7xl font-bold '> Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div>
                            <button className="btn btn-error mr-5">Discover</button>

                            <button className="btn btn-outline btn-success">LatestProject</button>
                        </div>


                    </div>


                </div>

                <div className="absolute flex   transform  bottom-0 right-5 mb-12 ">


                    <a href="#slide1" className="btn btn-circle  mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle text-white  bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#131316] to-[#15151500]'>
                    <div className=' top-1/3  text-white space-y-7 w-[40%] pl-10 '>
                        <h2 className='text-7xl font-bold '> Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div>
                            <button className="btn btn-error mr-5">Discover</button>

                            <button className="btn btn-outline btn-success">LatestProject</button>
                        </div>


                    </div>


                </div>

                <div className="absolute flex   transform  bottom-0 right-5 mb-12 ">


                    <a href="#slide2" className="btn btn-circle  mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle text-white  bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                <div className='absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#131316] to-[#15151500]'>
                    <div className=' top-1/3  text-white space-y-7 w-[40%] pl-10 '>
                        <h2 className='text-7xl font-bold '> Affordable Price For Car Servicing</h2>
                        <p>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                        <div>
                            <button className="btn btn-error mr-5">Discover</button>

                            <button className="btn btn-outline btn-success">LatestProject</button>
                        </div>


                    </div>


                </div>

                <div className="absolute flex   transform  bottom-0 right-5 mb-12 ">


                    <a href="#slide3" className="btn btn-circle  mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle text-white  bg-red-700">❯</a>
                </div>
            </div>
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex   transform  bottom-0 right-0 mb-12 mr-12">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex   transform  bottom-0 right-0 mb-12 mr-12">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle  bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex   transform  bottom-0 right-0 mb-12 mr-12">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-red-700">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;