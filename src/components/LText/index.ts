import {App} from 'Vue';
import LText from './LText.vue';
LText.install=(app: App)=>{
    app.component(LText.name,LText)
}
export default LText
