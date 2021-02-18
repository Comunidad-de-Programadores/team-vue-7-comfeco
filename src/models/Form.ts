import { Vue } from 'vue-property-decorator'

export default class Form extends Vue {
  loading = false;
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
