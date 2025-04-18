import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface ActiveSectionState {
  value: string;
}

const initialState: ActiveSectionState = {
  value: "Chats", // initial active section
};

// Create the slice
const activeSectionSlice = createSlice({
  name: "activeSection",
  initialState,
  reducers: {
    setActiveSection(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;
