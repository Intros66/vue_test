//人员管理相关配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced: true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else {
                alert('必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(res =>{
                context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
            }).catch(err => alert(err.message))
        }
    },
    mutations: {
        ADD_PERSON(state,value){
            state.personList.push(value)
        }
    },
    state: {
        personList: [
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0]
        }
    }
}
