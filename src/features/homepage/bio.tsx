export const Bio = () => {
  return (
    <section className="mx-auto py-10 border-b border-gray-300">
      <div className="float-left mb-5 sm:mr-10 w-full sm:w-fit">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/1508676?s=400&u=dbc0d74f489c3c18f4e935f49c59ebc6fd754a71&v=4"
            className="scale-105"
          />
        </div>
      </div>
      <span className="block w-fit mx-auto sm:inline">
        <h1 className="text-2xl font-medium font-sans">Rafee Jenkins</h1>
        <h2 className="text-xl font-normal">Software Engineer</h2>
        <p className="my-1 font-light">Manchester, UK</p>
      </span>
    </section>
  );
};
