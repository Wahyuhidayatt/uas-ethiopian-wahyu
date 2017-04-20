<template lang="html">
  <div class="">
    <el-row class="container">
      <h2>Add New Article</h2>
      <el-card class="box-card">
        <div style="margin: 20px;"></div>
        <el-form label-width="100px">
          <el-form-item label="Title">
            <el-input v-model="newArticle.title"></el-input>
          </el-form-item>
          <el-form-item label="Content">
            <el-input v-model="newArticle.content"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click='postArticle()'>Submit</el-button>
      </el-card>
    </el-row>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'articles',
      'newArticle'
    ])
  },
  methods : {
    ...mapActions([
      'postArticle',
      'getArticles'
    ])
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
