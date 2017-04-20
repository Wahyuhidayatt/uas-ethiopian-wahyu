<template lang="html">
  <div class="main-container">
    <el-row >

      <el-col :span="8" :offset="8">
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
          <el-form-item prop="email" label="E-mail"
          :rules="[
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
          ]">
            <el-input v-model="formLabelAlign.email"></el-input>
          </el-form-item>
          <br>
          <el-form-item  label="Password">
            <el-input type="password" v-model="formLabelAlign.password"></el-input>
          </el-form-item>
        </el-form>

        <el-row >
          <el-col :span="24" >
            <el-button type="success" @click="">Login</el-button>
            <el-button type="text"  @click="dialogFormVisible = true">Not a member? Sign up for Free</el-button>
            <el-dialog title="New User" v-model="dialogFormVisible">
              <el-form :model="formRegister">
                <el-form-item label="Email" :label-width="formLabelWidth">
                  <el-input v-model="formRegister.email" auto-complete="on"></el-input>
                </el-form-item>
                <el-form-item label="Password" :label-width="formLabelWidth">
                  <el-input type="password" v-model="formRegister.password" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
              </span>
            </el-dialog>
          </el-col>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        formLabelAlign: {
          email: '',
          password: ''
        },
        dialogFormVisible : false,
        formRegister : {
          email : '',
          password : '',
        },
        formLabelWidth : '0px'
      };
    }
  }
</script>

<style lang="css" scoped>
.kotak{
  margin: auto;
  background-color: #F9FAFC;
  border-radius: 4px
}
.el-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.imgcontainer {
  text-align: center;
  margin : 40px 0
}
.imgcontainer img {
  max-width: 100%;
}
.main-container{
  background-size: auto;
  background-repeat: repeat;
  height: 100vh;
}
</style>
