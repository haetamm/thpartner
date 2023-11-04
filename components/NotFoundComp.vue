<template>
  <div id="app" class="bg-white font-gabarito">
    <div>404</div>
    <div class="txt">
      Not Found<span class="blink">_</span>
    </div>
  </div>
</template>
<style scoped>
* {
   box-sizing: border-box;
}

#app {
   padding: 1rem;
   display: flex;
   height: 100%;
   justify-content: center;
   align-items: center;
   color: var(--color);
   text-shadow: 0px 0px var(--glowSize);
   font-size: 6rem;
   flex-direction: column;
}

#app .txt {
   font-size: 1.8rem;
}

@keyframes blink {
   0%   { opacity: 0; }
   49%  { opacity: 0; }
   50%  { opacity: 1; }
   100% { opacity: 1; }
}

.blink {
   animation-name: blink;
   animation-duration: 1s;
   animation-iteration-count: infinite;
}
</style>
