<template lang="html">
  <div class="">
    <el-row class="container">
      <el-card class="box-card">
    <el-form :label-position="labelPosition" label-width="100px">
      <el-form-item label="Title">
        <el-input v-model="formEditArticle.title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input v-model="formEditArticle.price"></el-input>
      </el-form-item>
    </el-form>
      <el-button type="primary" @click='editArticles(formEditArticle._id)'>Submit</el-button>
  </el-card>
</el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      labelPosition: 'top'
    }
  },
  computed : {
    ...mapGetters([
      'houses',
      'newHouse',
      'formEditArticle'
    ])
  },
  methods : {
    ...mapActions([
      'editHouse',
      'getEdited'
    ])
  },
  mounted() {
    this.getEdited(this.id)
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
</style>
