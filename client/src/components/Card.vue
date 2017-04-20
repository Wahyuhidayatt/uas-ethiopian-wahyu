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
                  <p>Content:{{article.content}}</p>
                </el-col>
                <div class="tombol">
                  <el-button size="small" icon="edit" type="info"><router-link :to="'/edit-article/'+article._id">Edit</router-link></el-button>
                  <el-button size="small" icon="delete" type="danger"@click="removeArticles(article._id)">Delete</el-button>
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
      'editArticles',
      'removeArticles'
    ])
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style lang="css">
img.image {
    width: 258px;
    height: 220px;
}
.content p {
  text-align: left;
  margin-left: 13px;
}
.el-card.box-card.custom {
    margin-top: 2px;
    margin-bottom: 30px;
    margin-left: 25px;
    padding-right: 116px;
}
button.el-button.el-button--danger.el-button--small {
    margin-left: -146px;
}
button.el-button.el-button--info.el-button--small {
    margin-right: 147px;
}
.tombol {
    margin-right: 55px;
}
.el-col-12 {
    width: 49%;
}
</style>
