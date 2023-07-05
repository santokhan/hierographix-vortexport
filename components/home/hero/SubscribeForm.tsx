import { ContactOutlineVisible } from "@/components/shared/header/ContactUs";

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
            className={[
              "flex items-center h-12 px-4 rounded-lg bg-vpurple-500 text-white border border-transparent -ml-2",
              "hover:bg-transparent hover:border hover:dark:bg-vpurple-950 hover:bg-white hover:border-vpurple-500 hover:text-vpurple-500 focus:ring-4 focus:ring-vpurple-500/50",
              "transition-all duration-200 ease-in-out whitespace-nowrap"]
              .join(" ")
            }
          >
            Talk with us
          </button>
        </label>
      </div>
    </form>
  );
}
