<template>
  <div :class="color" class="h-64 w-64 rounded-full flex items-center justify-center mx-auto" />
</template>

<script>
export default {
  name: 'SignalLight',
  props: {
    color: {
      type: String,
    }
  }
}
</script>
