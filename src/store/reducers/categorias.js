import { createStandaloneToast } from '@chakra-ui/toast';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoriasService from 'services/categorias';
import { resetarCarrinho } from './carrinho';

const { toast } = createStandaloneToast()

const initialState = [];

export const carregarCategorias = createAction('categorias/carregarCategorias') 

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasService.buscar
);

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarTodasAsCategorias: (state, { payload}) => {
      return payload
    }
  },
  extraReducers: builder => {
    builder
    .addCase(
      resetarCarrinho.type, 
      () => {
        toast({
          title: 'Sucesso!', 
          description: 'Compra completada com sucesso!', 
          status: 'success',
          duration: 2000, 
          isClosable: true
        })
      }
    )
  }
});

export const { adicionarTodasAsCategorias } = categoriasSlice.actions; 
export default categoriasSlice.reducer; 