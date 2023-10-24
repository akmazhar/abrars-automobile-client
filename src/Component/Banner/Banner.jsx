

const Banner = () => {
  return (
    <div className="">
  
    <video autoPlay muted loop className="video">
        <source src="/c.mp4" type="video/mp4" />
        {/* <source src="https://shorturl.at/bkqQ4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
   
  );
};

export default Banner;
