<script>
   import Button from "../components/Button.svelte";
  import Messages from "../components/Messages.svelte";

   const obj = {
      text: "Custom Buttom",
      title: "Custom Title"
   }
</script>

<Button {...obj}/>
<Messages />