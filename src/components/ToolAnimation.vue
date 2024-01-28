<script setup lang="ts">
const props = defineProps(['timing', 'cssClass', 'items']);
const datas = props.items;
</script>

<template>
  <div :class=props.cssClass :style=props.timing>
    <div>
      <span v-for="data in datas">{{ data }}</span>
    </div>
    <div>
      <span v-for="data in datas">{{ data }}</span>
    </div>
  </div>
</template>

<style scoped>
.scroll,
.scroll-reverse {
  position: relative;
  display: flex;
  max-width: 800px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)
}

.scroll div {
  white-space: nowrap;
  animation: scroll var(--time) linear infinite;
  animation-delay: calc(var(--time)*-1);
}

.scroll div:nth-child(2) {
  animation: scroll2 var(--time) linear infinite;
  animation-delay: calc(var(--time)/-2);
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll2 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-200%);
  }
}

.scroll div span,
.scroll-reverse div span {
  display: inline-flex;
  margin: 10px;
  letter-spacing: 0.05em;
  background: #EF5962;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  transition: 0.5s;
}

.scroll div span:hover,
.scroll-reverse div span:hover {
  background: #136F63;
  cursor: pointer;
}

/* For reverse animation */
.scroll-reverse div {
  white-space: nowrap;
  animation: scroll-first-reverse var(--time) linear infinite;
  animation-delay: calc(var(--time)*-1);
}

.scroll-reverse div:nth-child(2) {
  animation: scroll-second-reverse var(--time) linear infinite;
  animation-delay: calc(var(--time)/-2);
}

@keyframes scroll-first-reverse {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

@keyframes scroll-second-reverse {
  0% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>
