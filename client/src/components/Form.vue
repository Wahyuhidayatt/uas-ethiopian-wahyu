<template lang="html">
  <div class="">
    <el-row class="container">
      <h2>Add New Article</h2>
      <el-card class="box-card">
        <div style="margin: 20px;"></div>
        <el-form label-width="100px">
          <el-form-item label="Title">
            <el-input v-model="newHouse.title"></el-input>
          </el-form-item>
          <el-form-item label="Content">
            <el-input v-model="newHouse.price"></el-input>
          </el-form-item>
          <el-form-item label="Author">
            <el-input v-model="newHouse.description"></el-input>
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
      'postArticle'
    ])
  }
}
</script>

<style lang="css">
</style>
