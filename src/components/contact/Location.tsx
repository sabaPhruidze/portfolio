const Location = () => {
  return (
    <section className="mt-10 lg:flex lg:justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381144.0629384458!2d44.477120926519035!3d41.72725109970277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1sen!2sge!4v1768203085335!5m2!1sen!2sge"
        height="450"
        className="border-0 w-full lg:w-246 rounded-3xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default Location;
