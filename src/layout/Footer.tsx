const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white h-44 py-20 mt-20 ">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
