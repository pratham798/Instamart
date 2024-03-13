"use-client";

/* eslint-disable import/no-anonymous-default-export */
async function getInitialData() {
  try {
    const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details', { next: { revalidate: 600 } });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default {
  getInitialData,
};
