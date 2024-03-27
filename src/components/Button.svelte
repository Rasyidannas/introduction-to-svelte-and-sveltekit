<script>
   // this is for declare props
   export let text = 'Button'
   export let title
</script>

<button {title}>{text}</button>

<style>
   button{
      color: blue;
   }   
</style>