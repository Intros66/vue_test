<template>
  <div id="app">
      <h1>{{msg}},学生姓名是 {{studentName}}</h1>

      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"></School>

      <!-- 给Student组件的实例对象绑定一个函数 
            给谁绑定事件，谁就去触发
            通过父组件给子组件绑定一个自定义事件实现：子给父传递数据
      -->
      <!-- <Student @atguigu="getStudentName" @demo="m1"></Student> -->

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法: 使用ref  ) -->
      <Student ref="student" @click.native="show"></Student>
      
  </div>
</template>

<script>
//引入School组件
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    data() {
        return {
             msg: '你好啊',
             studentName: ''
        }
    },
     components: {
        Student,
        School
    },
    methods: {
        getSchoolName(name){
            console.log('App收到了学校名',name);
        },
        getStudentName(name){
            console.log('demo被调用了',name);
            this.studentName = name
        },
        m1(){
            console.log('m1被触发了');
        },
        show(){
            alert(123)
        }
    },
    mounted() {
        this.$refs.student.$on('atguigu',this.getStudentName) //绑定自定义事件
        // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件一次
    },
}
</script>

<style scoped>
    #app {
        background-color: gray;
    }
</style>