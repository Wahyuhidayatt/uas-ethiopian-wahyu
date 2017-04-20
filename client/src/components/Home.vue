<template lang="html">
  <div class="">
    <navbar></navbar>
    <form-add></form-add>
  </div>


</template>

<script>
import Navbar from './Navbar'
import FormAdd from './Form'
export default {
  components : {
    Navbar,
    FormAdd
  }
}
</script>

<style lang="css">
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
  button.el-button.el-button--primary {
    float: right;
    margin-bottom: 17px;
    padding: 12px 48px;
  }
  .el-card.box-card {
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 350px;
  }
</style>
