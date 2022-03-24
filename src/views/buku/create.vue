<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH BUKU</h4>
                        <hr>
                        
                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="judul_buku" class="fw-bold">JUDUL BUKU</label>
                                <input type="text" class="form-control" v-model="buku.judul_buku" placeholder="Masukkan Judul Buku">
                                <!-- Validation -->
                                <div v-if="validation.judul_buku" class="mt-2 alert alert-danger">
                                    {{ validation.judul_buku[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="author" class="fw-bold">Pembuat Buku:</label>
                                <input type="text" class="form-control" v-model="buku.author" placeholder="Masukkan Author Buku">
                                <!-- Validation -->
                                <div v-if="validation.author" class="mt-2 alert alert-danger">
                                    {{ validation.author[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="sinopsis" class="fw-bold">Sinopsis:</label>
                                <textarea class="form-control" v-model="buku.sinopsis" rows="4" placeholder="Masukkan Konten Sinopsis Buku"></textarea>
                                <!-- Validation -->
                                <div v-if="validation.sinopsis" class="mt-2 alert alert-danger">
                                    {{ validation.sinopsis[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="tanggal_terbit" class="fw-bold">Tanggal Terbit:</label>
                                <input type="date" class="form-control" v-model="buku.tanggal_terbit" placeholder="Masukkan Tanggal Terbit Buku">
                                <!-- Validation -->
                                <div v-if="validation.tanggal_terbit" class="mt-2 alert alert-danger">
                                    {{ validation.tanggal_terbit[0] }}
                                </div>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-success">SIMPAN</button> |
                            <router-link :to="{ name: 'buku.index' }" class="btn btn-md btn-primary">KEMBALI</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const buku = reactive({
            judul_buku: '',
            author: '',
            sinopsis: '',
            tanggal_terbit: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let judul_buku     = buku.judul_buku
            let author         = buku.author
            let sinopsis       = buku.sinopsis
            let tanggal_terbit = buku.tanggal_terbit
            axios.post('http://localhost:8000/api/buku', {
                judul_buku: judul_buku,
                author: author,
                sinopsis: sinopsis,
                tanggal_terbit: tanggal_terbit
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'buku.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            buku,
            validation,
            router,
            store
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>