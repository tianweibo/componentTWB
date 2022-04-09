import {App} from 'Vue';
import LText from './components/LText';
import LImage from './components/LImage';
import ChoiceGift from './components/ChoiceGift';
import UploadImage from './components/UploadImage';
const components=[LText,LImage,ChoiceGift,UploadImage];
const install =(app: App)=>{
    components.forEach(component=>{
        app.component(component.name,component)
    })
}
// import {LText} from 'interactiveCom';
// app.use(LText);
export {
    install,
    LText,
    LImage,
    ChoiceGift,
    UploadImage
}
// import coms from 'interactiveCom'
// app.use(coms)
export default{
    install
}