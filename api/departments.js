import { API } from "#api/data";

export const getDepartments = async () => {
  try {
    const response = await fetch(API + "/departments");
    const result = await response.json();

    return result;
  } catch (e) {
    console.log('ERROR FETCHING: ', e);
  }
}

export const getDepartmentById = async (id) => {
  try {
    const response = await fetch(API + "/departments/" + id);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log('ERROR FETCHING BY ID: ', e);
  }
}

export const getFacultyByDepartmentId = async (id) => {
  try {
    const response = await fetch(API + "/departments/" + id + "/faculty");
    const result = await response.json();

    return result;
  } catch (e) {
    console.log("ERROR FETCHING DEPT BY FACULTY: ", e);

  }
}