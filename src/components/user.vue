<template>
    <div class="user">
        <div>{{user_id}}</div>
    </div>
</template>

<script>
    export default {
        props:['user_id']
    }
</script>
// 加了scoped相当于当前样式私有化样式
<style lang="scss" scoped>

</style>