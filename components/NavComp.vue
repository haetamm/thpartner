<template>
  <nav class="fixed w-full nav-background border-b-2 border-gray-300 text-gray-900">
    <div class="container mx-auto flex justify-between">
      <div class="relative p-0.5 px-2 xs:p-2 md:px-0 font-bold flex items-center ml-0 md:ml-2">
        <svg
          id="Layer_1"
          class="text-white h-[41px] w-[33px] md:w-[40px] md:h-[62px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="currentColor"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 40.66 62.22"
          style="enable-background:new 0 0 40.66 62.22;"
          xml:space="preserve"
        >
          <g>
            <path d="M18.42,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C18.02,14.85,18.42,15.26,18.42,15.76z" />
            <path d="M8.31,1.39l24.19,0c0.55,0,1,0.45,1,1v0.11c0,0.5-0.41,0.91-0.91,0.91H8.31c-0.5,0-0.91-0.41-0.91-0.91V2.3   C7.39,1.8,7.8,1.39,8.31,1.39z" />
            <path d="M26.64,43.59H13.97V15.57c0-0.4-0.32-0.72-0.72-0.72h-0.59c0,0-0.72,0.31-0.81,0.71v28.58c0.08,0.04,0.1,0.13,0.1,0.13   v0.62c0,0.4,0.32,0.72,0.72,0.72h14.04c0.4,0,0.72-0.32,0.72-0.72v-0.51C27.43,43.94,27.07,43.59,26.64,43.59z" />
            <path d="M2.24,5.85h36.13c0.55,0,1,0.45,1,1v0.11c0,0.5-0.41,0.91-0.91,0.91H2.24c-0.5,0-0.91-0.41-0.91-0.91v-0.2   C1.32,6.25,1.73,5.85,2.24,5.85z" />
            <path d="M22.88,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C22.47,14.85,22.88,15.26,22.88,15.76z" />
            <path d="M27.43,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C27.02,14.85,27.43,15.26,27.43,15.76z" />
            <path d="M33.61,45.28L33.61,45.28L33.6,32.27c0-0.4-0.32-0.72-0.72-0.72H32.3c-0.4,0-0.72,0.32-0.72,0.72v12.34L20.54,58.27l0,0   l-0.01,0.01l0.01-0.01L9.42,44.56V12.32h22.06v5.45c0,0.4,0.32,0.72,0.72,0.72h0.51c0,0,0.79-0.41,0.69-0.84v-6.01   c0.1-0.02,0.1-0.04,0.1-0.06v-0.5c0-0.44-0.79-0.78-0.79-0.78H8.13c-0.23,0-0.44,0.11-0.57,0.28c-0.11,0.12-0.17,0.29-0.17,0.46   v34.19l0,0l11.84,14.55l0,0l1.31,1.6l1.29-1.59l0,0L33.61,45.28z" />
          </g>
        </svg>
        <a href="#" class="relative text-white block text-3xl md:text-5xl font-bold md:font-semibold select-none font-custom">TH</a>
      </div>
      <div class="flex justify-end">
        <div class="flex topBotomBordersOut items-center">
          <NuxtLink to="/" class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">
            HOME
          </NuxtLink>
          <NuxtLink to="/team" class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">
            TEAM
          </NuxtLink>
          <a class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">CONTACT</a>
          <a class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">APPOINTMENT</a>

          <!--Toggleable Link-->
          <a class="toggleable text-white">
            <input id="toggle-one" type="checkbox" value="selected" class="toggle-input">
            <label for="toggle-one" class="block cursor-pointer py-6 px-2 lg:p-6 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom">SERVICES</label>
            <div role="toggle" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl  overflow-auto lg:overflow-hidden h-screen md:h-[500px] lg:h-[330px]">
              <div class="container mx-auto w-full flex flex-wrap justify-between mb-8">
                <div class="w-full text-white mb-2 md:mb-8">
                  <h2 class="font-bold text-2xl">
                    Main Hero Message for the menu section
                  </h2>
                  <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                </div>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Heading 1
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Heading 2
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Heading 3
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg
                      class="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2">
                      Heading 4
                    </h3>
                  </div>
                  <p class="text-gray-100 text-sm">
                    This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.
                  </p>
                  <div class="flex items-center py-3">
                    <svg
                      class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                    </svg>
                    <a href="#" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
              </div>
            </div>
          </a>
        </div>
        <div class="text-white flex items-center xs:hidden mx-1 xs:mx-0">
          <svg
            id="menu"
            width="40"
            class="hover:text-white"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          ><g data-name="Layer 2"><g data-name="menu-2"><circle cx="4" cy="12" r="1" /><rect
            width="14"
            height="2"
            x="7"
            y="11"
            rx=".94"
            ry=".94"
          /><rect
            width="18"
            height="2"
            x="3"
            y="16"
            rx=".94"
            ry=".94"
          /><rect
            width="18"
            height="2"
            x="3"
            y="6"
            rx=".94"
            ry=".94"
          /></g></g></svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@use "~/assets/scss/navbar.scss"
</style>
