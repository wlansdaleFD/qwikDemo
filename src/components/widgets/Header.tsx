import { component$, useStore } from "@builder.io/qwik";
import Logo from "~/components/atoms/Logo";
import { IconGithub } from "~/components/icons/IconGithub";
import ToggleTheme from "~/components/core/ToggleTheme";
import ToggleMenu from "~/components/core/ToggleMenu";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  return (
    <header
      class={`sticky top-0 z-40 flex-none mx-auto w-full transition-all ${
        store.isScrolling
          ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
          : ""
      }`}
      id="header"
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-6xl md:px-4">
        <div class="flex justify-between">
          <a class="flex items-center" href={"/"}>
            <Logo />
          </a>
          <div class="flex items-center md:hidden">
            <ToggleTheme iconClass="w-6 h-6" />
            <ToggleMenu iconClass="w-6 h-6" />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex text-gray-600 dark:text-slate-200 h-[calc(100vh-100px)] md:h-auto overflow-y-auto md:overflow-visible"
          aria-label="Main navigation"
        >
          <ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto text-xl md:text-base">
            <li class="dropdown">
              <button class="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">
                Pages
              </button>
              <ul class="dropdown-menu rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white md:min-w-[200px] dark:md:bg-slate-800 drop-shadow-xl">
                <li>
                  <a
                    class="font-medium rounded-t md:hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium md:hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    class="font-medium rounded-b md:hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                href={"#"}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                class="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                href={"/blog"}
              >
                Blog
              </a>
            </li>
            <li class="md:hidden">
              <a
                class="font-bold hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                href="https://github.com/onwidget/qwind"
              >
                Github
              </a>
            </li>
          </ul>
          <div class="md:self-center flex items-center mb-4 md:mb-0 ml-2">
            <div class="hidden items-center md:flex">
              <ToggleTheme />
              <a
                href="https://github.com/onwidget/qwind"
                class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                aria-label="Qwind Github"
              >
                <IconGithub />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
});
