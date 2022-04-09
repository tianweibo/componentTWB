import {App} from 'Vue';
import UploadImage from './UploadImage.vue';
UploadImage.install=(app: App)=>{
    app.component(UploadImage.name,UploadImage)
}
export default UploadImage
