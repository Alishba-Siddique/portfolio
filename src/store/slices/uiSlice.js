import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  isMobile: false,
  isLoading: true,
  selectedIndicator: '/',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedIndicator: (state, action) => {
      state.selectedIndicator = action.payload;
    },
  },
});

export const { toggleMenu, setMobile, setLoading, setSelectedIndicator } =
  uiSlice.actions;
export default uiSlice.reducer;
