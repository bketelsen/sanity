<script>
  export let portableText
  $: text = portableText.span.text

</script>

<span class="bg-primary text-primary-content">
  {text}
</span>
