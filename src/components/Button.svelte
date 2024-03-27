<script>
   // this is for send data to another component
   import { createEventDispatcher } from 'svelte'
   const dispatch = createEventDispatcher()

   // this is for declare props
   export let text = 'Button'
   export let title

   const changeText= () => {
      text = "Button Clicked"
      dispatch('addMsg', text)
   }
</script>

<button {title} on:click={changeText}>{text}</button>

<style>
   button{
      color: blue;
   }   
</style>