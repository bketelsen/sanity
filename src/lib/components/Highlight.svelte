<script>
  export let portableText
  $: text = portableText.span.text

</script>

<span class="px-1 bg-accent/60 text-primary-content">
  {text}
</span>
