<template>
    <div class="school">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{gender}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            msg: '我是一个学生',
            myAge: this.age
        }
    },
    methods: {
        updateAge(){
            this.myAge ++
        }
    },

    //简单声明接收
    // props: ['name','gender','age'], 
    
    //接收的同时对数据进行类型限制
    /* props: {
        name: String,
        gender: String,
        age: Number
    } */

    //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    props: {
        name: {
            type: String, //name的类型是字符串
            required: true //name是必要的
        },
        gender: {
            type: String,
            default: '男' //默认值
        },
        age: {
            type: Number,
            required: true
        }
    }
}
</script>

