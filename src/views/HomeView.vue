<script lang="ts">
    import LeftAside from "@/views/components/aside.vue";
    export default {
        components: {LeftAside}
    }
</script>

<template>
      <div class="view">
          <el-container>
              <el-header class="header">
                  header
              </el-header>
              <el-container class="container">
                  <el-aside width="20vw" class="aside">
                      <left-aside></left-aside>
                  </el-aside>
                  <el-main class="main">
                      Main
                  </el-main>
              </el-container>
          </el-container>
      </div>
</template>

<style scoped>
    .view{
        width: 100%;
        height: 100%;
    }
</style>
