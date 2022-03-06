<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-06 13:39:26
-->
<template>
  <!-- <el-row align="middle">
    <el-col :span="10" :offset="6">
      
      <div class="login_title">GinAdmin</div>
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
          <el-input type="password" show-password v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="primary" @click="onReset()">重置</el-button>
        </el-form-item>
      </el-form>

    </el-col>
  </el-row> -->
  <div class="login-box" :style="{marginTop:top}">
    <div class="pannel-title">
      GinAdmin后台管理系统
    </div>
    <el-form ref="formRef" :model="form" :rules="rules">
    <div class="pannel-body">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
          <el-input type="password" show-password v-model="form.password"></el-input>
        </el-form-item>
        
    </div>
    <div class="pannel-footer">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button type="primary" @click="onReset()">重置</el-button>
        </el-form-item>
    </div>
    </el-form>
    
  </div>
</template>

<style scoped>
  .login-box{
    width: 300px;
    height: 200px;
    margin:0 auto;
    border-radius: 10px;
  }

  .pannel-title{
    text-align: center;
    padding-top:20px;
    padding-bottom: 5px;
    background-color: #f0f0f0;
    border-bottom: 1px solid;
    border-color: antiquewhite;
    border-radius: 10px 10px 0 0;
  }

  .pannel-body{
    text-align: center;
    padding:10px 10px;
    background-color: #f0f0f0;

  }

  .pannel-footer{
    text-align: center;
    padding:1px 0px;
    background-color: #f0f0f0;
    padding-left:90px;
    border-radius: 0 0 10px 10px;
  }

</style>

<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  name:"LoginView",
  setup() {

    const form = reactive({
      username:"",
      password:""
    })

    const top = ref(0)

    const formRef = ref(null)

    onMounted(()=>{
      top.value = document.documentElement.clientHeight/2-100 + 'px';
    })

    const rules = {
      username:[
        {required:true,message: '请输入用户名', trigger: 'blur' }
      ],
      password:[
        {required:true,message: '请输入密码', trigger: 'blur' }
      ]
    }

    function onSubmit(){
       console.log(form)
    }

    function onReset(){
      formRef.value.resetFields()
    }

    return {onSubmit,onReset,rules,form,formRef,top}
  },
}
</script>

