<template>
    <div class="img-login">
      <div class="background-login">
        <img class="img-logo" src="../assets/img/Deekrub.png">
        <div class="flex justify-content-center mb-5">
          <!-- <div class="flex flex-column gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" placeholder="ชื่อผู้ใช้งาน"  aria-describedby="username-help" />
          </div> -->
          <span class="p-float-label">
            <InputText v-model="username" type="text" placeholder="ชื่อผู้ใช้งาน"  @keyup.enter="checklogin()" />
            <label for="username">กรุณากรอกยูสเซอร์เนม</label>
          </span>
        </div>
        <div class="flex justify-content-center mb-1">
          
          <span class="p-float-label">
            <Password v-model="password" :feedback="false" placeholder="กรุณากรอกรหัสผ่าน" inputId="password"  class="w-full" @keyup.enter="checklogin()"/>
            <!-- <InputText v-model="password" type="text" placeholer="รหัสผ่าน" /> -->
            <!-- <InputText v-model="password" inputId="password" :feedback="false" class="w-full" togleMask /> -->
            <label for="password">กรุณากรอกรหัสผ่าน</label>
          </span>
        </div>
        <div class="flex justify-content-between mb-5">
            <div class="font-color">
                <p @click="$router.push('/register')" class="cursor">สมัครสมาชิก</p>
              </div>
              <div class="font-color">
                <p  @click="$router.push('/forgetpassword')" class="cursor">ลืมรหัสผ่าน</p>
              </div>
        </div>
        <div class="flex justify-content-center">
          <Button label="เข้าสู่ระบบ" style="font-family: 'Kanit', sans-serif;" class="button-login" severity="success"
            @click="checklogin()" />
        </div>
      </div>
    </div>
  </template>
    
  <script>

  import Button from 'primevue/button';
  import Password  from 'primevue/password';
  export default {
    components: {
      Button,
      Password
    },
  

  
  
    data: () => ({
      isLoading: false,
      username: "",
      password: "",
    }),
  
  }
  
  </script>
      
  <style>
  .p-input-icon-left, .p-input-icon-right {
      position: initial !important;
      display: inline-block;
  }
  .cursor{
    cursor: pointer;
  }
  .cursor:hover{
    color: rgb(255, 196, 0);
  }
  .img-login {
    width: 100%;
    background: url("../assets/img/backgrond.jpg");
    height: 100vh;
    background-size: cover;
    /* This will cover the entire container */
    background-repeat: no-repeat;
    background-position: center center;
    /* Center the image horizontally and vertically */
    display: flex;
    align-items: center;
  }
  
  .background-login {
  
    background: rgba(255, 255, 255, 0.295);
    margin-left: auto;
    margin-right: 18%;
    padding: 3%;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 25px;
    border: 3px solid #ffff;
  }
  
  
  
  .font-color {
    color: #ffffff;
    -webkit-text-stroke: 0.5px;
  }
  
  .img-logo {
    width: 100px;
    margin-left: 25%;
    margin-bottom: 5%;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
  }


  
  @media only screen and (max-width:1200px) {
    .background-login {
      background: rgb(235 191 191 / 43%);
      margin-left: auto;
      margin-right: 12%;
      padding: 3%;
      padding-top: 50px;
      padding-bottom: 50px;
      border-radius: 25px;
      border: 3px solid #bf1212;
    }
  }
  
  @media only screen and (max-width:576px) {
    .background-login {
      background: rgba(255, 255, 255, 0.795);
      margin-left: auto;
      margin-right: auto;
      padding: 12%;
      border-radius: 25px;
      border: 3px solid #bf1212;
    }
  
    .font-color {
      color: #db0000;
    }
  }
  </style>