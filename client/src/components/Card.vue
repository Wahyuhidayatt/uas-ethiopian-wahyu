<template lang="html">
  <div class="list">
    <el-row>
      <el-col :span="12" v-for="article in articles">
        <el-card class="box-card custom" >
          <el-row :gutter="20">
            <el-col :span="10" :offset="2">
              <div class="content box-card">
                <el-col :span="14">
                  <p>Title : {{article.title}}</p>
                  <p>Content :{{article.price}},-</p>
                  <p>Author : {{article.owner}}</p
                </el-col>
                <div class="tombol">
                  <el-button size="small" icon="edit" type="info"> <router-link :to="">Edit</router-link></el-button>
                  <el-button size="small" icon="delete" type="danger"@click="">Delete</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  computed : {
    ...mapGetters([
      'articles'
    ])
  },
  methods : {
    ...mapActions([
      'getArticles',
    ])
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
