<script>
   import Button from "../components/Button.svelte";
   import Messages from "../components/Messages.svelte";

   const obj = {
      text: "Custom Buttom",
      title: "Custom Title"
   }

   let newMessage;
   const addMessage = (e) => {
      newMessage = e.detail
   }
</script>

<!--on:addMsg will listed dispatcher-->
<Button {...obj} on:addMsg={addMessage}/>
<Messages {newMessage} />