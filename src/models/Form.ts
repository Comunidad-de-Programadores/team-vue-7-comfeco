import { Vue } from 'vue-property-decorator'
import { ValidationObserver } from 'vee-validate'

export default class Form extends Vue {
  loading = false;
  $refs!: {
    observer: InstanceType<typeof ValidationObserver>;
  };

  /**
   * shows a toast with a message
   */
  showMessage (
    message:{type:string, duration?:number, text:string} = { duration: 3000, type: 'is-success', text: '' }):void {
    this.$buefy.toast.open({
      ...message,
      message: message.text
    })
  }
}
