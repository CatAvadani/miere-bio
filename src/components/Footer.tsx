function Footer() {
  return (
    <div className='relative bg-orange-200 text-black p-4 text-center h-80'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20'
        style={{ backgroundImage: "url('/public/images/footer-bg.png')" }}
      ></div>
      <div className='relative z-10'>
        <p>&copy; {new Date().getFullYear()} Miere Bio. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
