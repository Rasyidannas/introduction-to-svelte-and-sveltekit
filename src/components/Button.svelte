<script>
   // this is for declare props
   export let text = 'Button'
   export let title

   const changeText= () => {
      text = "Button Clicked"
   }
</script>

<button {title} on:click={changeText}>{text}</button>

<style>
   button{
      color: blue;
   }   
</style>