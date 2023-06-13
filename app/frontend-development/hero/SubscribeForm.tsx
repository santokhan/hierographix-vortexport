export default function SubscribeForm() {
  return (
    <form className="w-full max-w-md">
      <div className="rounded-lg bg-[#353547] flex">
        <input
          type="text"
          id="sub-email"
          className="bg-transparent h-12 px-4 rounded-lg w-full focus:outline-none"
          placeholder="Your email"
        />
        <label htmlFor="sub-email">
          <button
            type="submit"
            className="bg-vlinear text-white h-12 px-4 lg:px-6 rounded-lg whitespace-nowrap hover:brightness-90 focus:ring-4 focus:ring-vpurple-500/50"
          >
            Talk with us
          </button>
        </label>
      </div>
    </form>
  );
}
