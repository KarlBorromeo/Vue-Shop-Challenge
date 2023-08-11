<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button{
    padding: .3rem 1rem;
    border: .5px solid blueviolet;
    border-radius: 20px; 
}
.fill{
  background-color: blue;
  color: white;
}
button:hover{
  cursor: pointer;
  background-color: rgba(102, 113, 16, 0.693);
  color: black;
}
.fill:active{
  background-color: rgb(166, 185, 19);
  color: black;
}
</style>