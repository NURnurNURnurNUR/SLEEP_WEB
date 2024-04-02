<script setup>
import NavBar from "/src/components/NavBar.vue"; 
</script>


<template>
    <div>
        <NavBar/>
      </div>
    <main>
        
      <div class="full_size_img">
        <div class="shape-container">
          <div class="shape">
            <div class="text-container-top">
              <h2>Sign in with email</h2>
              <div class="lower-text">
                 <p>Enter your email and we will send you the magic link</p>
              </div>
            </div>
            <div class="email-shape-container">
              <div class="email-shape">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Enter your email" v-model="emailValue" required> 
              </div>
            </div>
            <button class="btn account">Already have an account? SIGN IN</button>
          </div>
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
    padding-top: 5em;
    padding-bottom: 5em;
  }
  
  .shape 
  {
    height: 600px;
    width: 500px;
    border-radius: 10%;
    background-color: #000;
    opacity: 0.8;
  }
  
  .text-container-top 
  {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
  }
  
  .text-container-top h2
 {
    margin: 0;
    padding: 10px;
    color: white;
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
  font-size: 18px; 
  color: white; 
}
  
  .email-shape-container 
  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
  }
  
  .email-shape 
  {
    position: relative;
    height: 100px;
    width: 450px;
    border-radius: 20px;
    background-color: #121016;
    opacity: 0.8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .email-shape i 
  {
    color: white;
    font-size: 50px;
    margin-left:25px;
  }
  
  .btn 
  {
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  
  .account 
  {
    color: white;
    font-family: 'Roboto Mono';
    font-weight: bold;
    letter-spacing: 0.1em;
  }
  
  .account:hover 
  {
    background-color: #1C1E30;
    color: white;
  }


</style>