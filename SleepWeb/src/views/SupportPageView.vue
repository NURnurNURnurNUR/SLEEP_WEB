<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
<div>
    <NavBar/>
</div>
<main>
    <div class="shape-container">
        <div class="shape">
            <div class="text-container-top">
              <h2>Support</h2>
                <div class="lower-text">
                    <p>If you have a question or need help, contact us!</p>
                </div>
            </div>
        </div>
            <div class="image">
                <img src = "/earth.png" class="first-image">
                <img src = "/moonearth.png" class="second-image">
            </div>
    </div>
</main>
</template>

<style scoped>
main 
{
    background-image: url("sky.jpg");
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
}
  .shape-container 
{
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    position: relative;
    padding-top: 2.5em;
    padding-bottom: 5em;
}
  
  .shape 
{
    height: 600px;
    width: 500px;
    border-radius: 10%;
    background-color: #000;
    opacity: 0.8;
    position:relative;
}
  
  .text-container-top 
{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
}
  
  .text-container-top h2 
{
    margin: 0;
    padding: 30px;
    color: white;
    font-size: 30px;
    font-weight: normal;
    letter-spacing: 0.5em;
}
.lower-text
{ 
   position: absolute;
   bottom: -6em; 
   left: 50%;
   transform: translateX(-50%);
   width: 100%;
   text-align: center;
   z-index: 2;
}

.lower-text p {
 margin: 0; 
 font-size: 20px; 
 color: white; 
}
  
  
.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}

.first-image {
    position: absolute;
    bottom: 0;
    right: 20%; 
    max-width: 30%;
    max-height: 150px;
    padding: 20px;
}

.second-image {
    position: absolute;
    top: 0;
    left: 20%; 
    max-width: 30%;
    max-height: 150px;
    padding: 20px;
}
</style>