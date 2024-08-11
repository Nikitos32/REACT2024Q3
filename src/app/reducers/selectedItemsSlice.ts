import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectedState } from '../app/constants/interfaces';
import { RootState } from '../store/store';

const initialState: selectedState = {
  value: [],
};

export const selectedItemsSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    unselectItem: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((elem) => {
        return elem !== action.payload;
      });
    },
    clearStore: (state) => {
      return {
        ...state,
        value: [],
      };
    },
  },
});

export const { selectItem, unselectItem, clearStore } =
  selectedItemsSlice.actions;

export const selectCount = (state: RootState) => state.selectedItems.value;

export default selectedItemsSlice.reducer;
