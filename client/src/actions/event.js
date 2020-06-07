import axios from "axios";
import { GET_EVENTS, EVENTS_ERROR, ADD_EVENT,DELETE_EVENT } from "./types";

// Get events
export const getEvents = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/event");

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: "error" },
    });
  }
};

// add events
export const addEvent = (name, venue, description, eventdate) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, venue, description, eventdate });
  try {
    const res = await axios.post(`/api/event/`, body, config);

    dispatch({
      type: ADD_EVENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: "error" },
    });
  }
};


// delete events
export const deleteEvent = (id) => async dispatch => {
  try {
    await axios.delete(`/api/event/delete/${id}`);

    dispatch({
      type: DELETE_EVENT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: EVENTS_ERROR,
      payload: { msg: "error" }
    });
  }
};