<template>
    <div>
        <h4>Oops! There was an error:</h4>
        <p>{{ error }}</p>
    </div>
</template>

<script>
export default {
  props: ['error']
}
</script>