<template>
    <div>
        <button @click="removeFromCart(productId)" type="button" class="btn btn-danger">X</button>
    </div>
</template>

<script>
export default {
    methods: {
        props: {
            productId: { default: null,}
        },
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id)
      this.$toasted.success('Removed from Cart', {
        icon: 'block',
        position: 'top-right',
        duration: 3000
      })
    }
    }
}
</script>