import {
  TypedUseSelectorHook,
  useDispatch as nonTyped_useDispatch,
  useSelector as nonTyped_useSelector,
} from 'react-redux';
import type { RootState, AppDispatch } from '@type/store';

export const useDispatch: () => AppDispatch = nonTyped_useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> =
  nonTyped_useSelector;
