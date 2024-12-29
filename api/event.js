import { API_URL } from "@/constants/apiConfig";
import axios from "axios";
import { useState } from "react";

export const addEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/addevent`, eventData);
  console.log(response.data);
  return response.data;
};
