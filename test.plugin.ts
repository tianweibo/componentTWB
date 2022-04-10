import {App} from 'Vue';
//import HelloWorld from "./components/HelloWorld.vue"
const plugins={
    install:(app: App)=>{
        app.config.globalProperties.$echo=()=>{
            console.log('hello,plugins')
        },
        /* app.component('hello-world',HelloWorld), */
        app.provide('test',{message:"from plugins"})
    }
}
export default plugins