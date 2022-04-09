import {App} from 'Vue';
import ChoiceGift from './ChoiceGift.vue';
ChoiceGift.install=(app: App)=>{
    app.component(ChoiceGift.name,ChoiceGift)
}
export default ChoiceGift
