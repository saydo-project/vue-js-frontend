<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA BUKU</h4>
                        <hr>
                        <router-link :to="{ name: 'buku.create' }" class="btn btn-md btn-primary">TAMBAH BUKU</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th class="col">Judul Buku</th>
                                    <th class="col">Pembuat Buku</th>
                                    <th class="col">Tanggal Terbit</th>
                                    <center>
                                    <th class="col">Option</th>
                                    </center>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(buku, index) in buku" :key="index">
                                    <td>{{ buku.judul_buku }}</td>
                                    <td>{{ buku.author }}</td>
                                    <td>{{ buku.tanggal_terbit }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'buku.detail', params:{id: buku.id } }" class="btn btn-md btn-success mr-1">DETAIL</router-link> |
                                        <router-link :to="{ name: 'buku.edit', params:{id: buku.id } }" class="btn btn-md btn-warning mr-1">EDIT</router-link> |
                                        <button @click.prevent="bukuDelete(buku.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
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

            //method delete
            function bukuDelete(id) {
            
                //delete data post by ID
                axios.delete(`http://localhost:8000/api/buku/${id}`)
                .then(() => {
              
                //splice posts 
                buku.value.splice(buku.value.indexOf(id), 1);

                }).catch(error => {
                console.log(error.response.data)
            })

        }

        //return
        return {
            buku,
            bukuDelete
        }


    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>