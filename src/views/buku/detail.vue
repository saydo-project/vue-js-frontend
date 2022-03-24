<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA BUKU</h4>
                        <hr>
                        <router-link :to="{ name: 'buku.index' }" class="btn btn-md btn-primary">KEMBALI</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th class="col">Judul Buku</th>
                                    <th class="col">Pembuat Buku</th>
                                    <th class="col">Sinopsis</th>
                                    <th class="col">Tanggal Terbit</th>
                                    <th class="col">Tanggal Dimasukkan</th>
                                    <th class="col">Tanggal Diupdate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(buku, index) in buku" :key="index">
                                    <td>{{ buku.judul_buku }}</td>
                                    <td>{{ buku.author }}</td>
                                    <td>{{ buku.sinopsis }}</td>
                                    <td>{{ buku.tanggal_terbit }}</td>
                                    <td>{{ new Date(buku.created_at).toLocaleDateString() }}</td>
                                    <td>{{ new Date(buku.updated_at).toLocaleDateString() }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let buku = ref([])

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/buku')
            .then(response => {
              
              //assign state buku with response data
              buku.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //return
        return {
            buku
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>