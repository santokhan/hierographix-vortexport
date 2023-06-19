export default function SubscribeForm() {
  return (
    <form className="w-full max-w-md">
      <div className="rounded-lg bg-gray-100 dark:bg-[#353547] flex">
        <input
          type="text"
          id="sub-email"
          className="bg-transparent h-12 px-4 rounded-l-lg w-full focus:outline-none text-gray-800 dark:text-white border border-vpurple-900 focus:border-vpurple-500 transition-all ease-out"
          placeholder="Enter your email"
        />
        <label htmlFor="sub-email">
          <button
            type="submit"
            className="bg-vlinear -ml-2 text-white h-12 px-4 lg:px-6 rounded-lg whitespace-nowrap hover:bg-vlinear-hover focus:ring-4 focus:ring-vpurple-500/50 transition-all ease-in-out"
          >
            Talk with us
          </button>
        </label>
      </div>
    </form>
  );
}
