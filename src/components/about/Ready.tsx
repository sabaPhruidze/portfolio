const Ready = () => {
  return (
    <section className="w-full h-80 bg-white flex flex-col justify-center items-center px-10 text-center">
      <h2 className="font-bold text-3xl ">Ready to work {<br />} together?</h2>
      <p className="mt-5 font-semibold text-gray-500 ">
        I'm currently avaliable for freelance projects and open to full-time
        opportunities. if you think I'd be a good fit for your team, let's chat
      </p>
      <div className="flex flex-row mt-5 gap-5">
        <button className="px-15  bg-blue-500 font-bold text-white rounded-xl">
          Donwload Resume
        </button>
        <button className="px-15 border border-gray-500 font-bold  rounded-xl">
          Contact me
        </button>
      </div>
    </section>
  );
};

export default Ready;
