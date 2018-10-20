<template>
    <div>
        <nav-bar/>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import NavBar from './components/NavBar';

require('@/assets/css/bootstrap.min.css')
require('@/assets/css/font-awesome.min.css')
require('@/assets/css/style.css')
require('@/assets/js/jquery-2.2.4.min.js')
require('@/assets/js/bootstrap.min.js')
export default {
    name: 'app',
    components: {
        NavBar,
    }
}
</script>