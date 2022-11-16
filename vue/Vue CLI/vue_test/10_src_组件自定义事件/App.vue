<template>
  <div class="app">
    <h1>{{ msg }} 学生姓名是：{{ studentName }}</h1>
    <!--通过父组件给子组件传递函数类型的props实现: 子给父传递数据-->
    <School :getSchoolName="getSchoolName"></School>

    <!--通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法，使用@或者v-on)-->
    <!--<Student @nb="getStudentName" @demo="m1"></Student>-->

    <!--通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第二种写法，使用ref)-->
    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: "app",
  components: {
    Student,
    School
  },
  data() {
    return {
      msg: "欢迎哦哦哦",
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到学校名：' + name)
    },
    getStudentName(name, ...params) {
      console.log('App收到学生名：' + name, params)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发！')
    },
    show() {
      alert('123')
    }
  },
  mounted() {
    //此方法更灵活
    /*setTimeout(() => {
      this.$refs.student.$on('nb', this.getStudentName)
    }, 3000)*/
    this.$refs.student.$on('nb', this.getStudentName)
    //一次性
    // this.$refs.student.$once('nb', this.getStudentName)

  }
}
</script>

<style scoped>
.app {
  background-color: #626161;
}
</style>