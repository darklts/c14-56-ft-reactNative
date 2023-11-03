/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      //Components
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Header': path.resolve(__dirname, 'src/Components/Header'),
      '@Aside': path.resolve(__dirname, 'src/Components/Aside'),
      '@UserList': path.resolve(__dirname, 'src/Components/UserList'),
      '@UserCard': path.resolve(__dirname, 'src/Components/UserCard'),
      '@Plus': path.resolve(__dirname, 'src/Components/Plus'),
      '@Trends': path.resolve(__dirname, 'src/Components/Trends'),
      '@Search': path.resolve(__dirname, 'src/Components/Search'),
      '@NavBar': path.resolve(__dirname, 'src/Components/NavBar'),
      '@Post': path.resolve(__dirname, 'src/Components/Main/Post'),
      '@Comments': path.resolve(__dirname, 'src/Components/Main/Post/Comments'),
      '@Perfil': path.resolve(__dirname, 'src/Components/Perfil'),
      '@CreatePost': path.resolve(__dirname, 'src/Components/Main/CreatePost'),
      '@PostButtons': path.resolve(
        __dirname,
        'src/Components/Main/Post/InteractionButtons'
      ),
      '@PostContent': path.resolve(
        __dirname,
        'src/Components/Main/Post/PostContent'
      ),
      '@UserHeader': path.resolve(
        __dirname,
        'src/Components/Main/Post/UserHeader'
      ),
      '@Icons': path.resolve(__dirname, 'src/Components/Icons'),
      '@Avatar': path.resolve(__dirname, 'src/Components/Avatar'),
      '@HistoriesContainer': path.resolve(
        __dirname,
        'src/Components/Historias/ContenedorHistorias'
      ),
      '@HistoriesCreate': path.resolve(
        __dirname,
        'src/Components/Historias/CrearHistoria'
      ),
      '@HistoriesModal': path.resolve(
        __dirname,
        'src/Components/Historias/ModalHistorias'
      ),
      '@Histories': path.resolve(
        __dirname,
        'src/Components/Historias/Historia'
      ),
      '@Welcome': path.resolve(__dirname, 'src/Components/Bienvenida'),
      '@FormError': path.resolve(
        __dirname,
        'src/Components/Formulario/ErrorType'
      ),
      '@InputForm': path.resolve(__dirname, 'src/Components/InputForm'),

      //pages

      '@pages': path.resolve(__dirname, 'src/pages'),

      //store

      '@store': path.resolve(__dirname, 'src/store'),

      //assets
      '@logo': path.resolve(__dirname, 'src/assets/img/logoLinkUp.png'),
    },
  },
  plugins: [react()],
})
