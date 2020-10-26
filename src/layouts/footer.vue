<template>
    <div>
        <footer class="py-5 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">
                    Copyright &copy; github.com/Aakash456 {{year}}
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed:{
        year(){
            let date = new Date();
            return date.getFullYear();
        }
    }
}
</script>