export default function SubscribeForm() {

  function handleSubmit(e: any) {
    e.preventDefault()
  }

  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="rounded-lg bg-gray-100 dark:bg-[#353547] flex">
        <input
          type="text"
          id="sub-email"
          className={[
            "bg-transparent h-12 px-4 rounded-l-lg w-full text-gray-800 dark:text-white border dark:border-vpurple-900",
            "focus:outline-none focus:border-vpurple-500 focus:bg-transparent focus:dark:border-vpurple-500",
          ].join(" ")}
          placeholder="Enter your email"
        />
        <label htmlFor="sub-email">
          <button
            type="submit"
            className="bg-vlinear -ml-2 text-white h-12 px-4 lg:px-6 rounded-lg whitespace-nowrap hover:bg-vlinear-hover focus:ring-4 focus:ring-vpurple-500/50 transition-all ease-in-out duration-300"
          >
            Talk with us
          </button>
        </label>
      </div>
    </form>
  );
}
