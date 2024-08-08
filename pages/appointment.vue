<template>
  <div class="flex-grow font-gabarito bg-white mx-auto">
    <div class="pt-[6rem] pb-10 inline-block sm:flex justify-center container mx-auto space-x-0 space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-20 px-6">
      <template v-for="option of options" :key="option.url">
        <div class="card-wrap w-full xs:w-[272px] md:hover:scale-[1.1]">
          <div :class="`card-header ${option.color}`">
            <img :src="option.img" alt="icon-default" width="130" height="100" :class="`h-[100px] ${option.color === 'one' ? 'w-[160px]' : 'w-[80px]'}`">
          </div>
          <div class="card-content">
            <h1 class="card-title">
              {{ option.title }}
            </h1>
            <p class="card-text">
              {{ option.description }}
            </p>
            <NuxtLink :to="option.url" class="card-btn one">
              Book Now
            </NuxtLink>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>

const options = [
  { color: 'one', url: '/booking/will-appointment', title: 'Will Appointment', img: '/meet.svg', description: 'Includes drafting of a Simple Will. For Complex wills, prices start from $300.' },
  { color: 'two', url: '/booking/consultation-zoom', title: 'Consultation (Zoom)', img: '/zoom.svg', description: 'Get their advice on your case or situation. Charges will be $300 per hour or part thereof.' }

]
useHead({
  title: 'TH | Appointment',
  meta: [
    { name: 'description', content: 'Make an appointment' }
  ]
})
</script>

<style scoped>

.card-wrap{
  background: #fff;
  border-radius: 20px;
  border: 5px solid #fff;
  overflow: hidden;
  color: var(--color-text);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
              rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.card-header{
  height: 200px;
  width: 100%;
  background: red;
  border-radius:100% 0% 100% 0% / 0% 50% 50% 100%;
  display: grid;
  place-items: center;

}

.card-header i{
  color: #fff;
  font-size: 72px;
}
.card-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
}
.card-title{
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 700;

}
.card-text{
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
}
.card-btn{
  border: none;
  border-radius: 100px;
  padding: 5px 12px;
  color: #fff;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.card-btn:hover {
  opacity: 0.8;
}
.card-header.one{
  background: linear-gradient(to bottom left, var(--card3-gradient-color1), var(--card3-gradient-color2));
}
.card-header.two{
  background: linear-gradient(to bottom left, var(--card4-gradient-color1), var(--card4-gradient-color2));
}

.card-btn.one{
  background: linear-gradient(to left, var(--card3-gradient-color1), var(--card3-gradient-color2));
}
.card-btn.two{
 background: linear-gradient(to bottom left, var(--card4-gradient-color1), var(--card4-gradient-color2));
}

</style>
