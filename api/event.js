import { API_URL } from "@/api/apiConfig";
import axios from "axios";
import { useState } from "react";

export const addEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/addevent`, eventData);
  console.log(response.data);
  return response.data;
};

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(`${API_URL}/events/${eventId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

