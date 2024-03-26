import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  extra: AxiosInstance;
}>();
