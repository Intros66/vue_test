export default {
    install(Vue,x,y,z){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        }),

        //定义全局指令
        Vue.directive('fbind',{
            //只调用一次，指令第一次绑定到元素时调用
            bind(element,binding){
                //此处的this是window
                console.log('fbind-bind',this);
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element){
                console.log('fbind-inserted',this);
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                console.log('fbind-update',this);
                element.value = binding.value
            }
        }),

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        }),

        //给Vue原型上添加一个方法(vm和vc都能用)
        Vue.prototype.hello = () => {alert('Hello')}

        console.log(x,y,z);
    },
    
}
