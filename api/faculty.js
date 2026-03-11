import { API } from "#api/data";

export const getFaculty = async () => {
  try {
    const response = await fetch(API + "/faculty");
    const result = await response.json();

    return result;
  } catch (e) {
    console.log('SOMETHING WENT WRONG: ', e);
  }
}

export const getFacultyById = async (id) => {
  try {
    const response = await fetch(API + "/faculty/" + id);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log('SOMETHING WENT WRONG: ', e);
  }
}

export const getDepartmentByFacultyId = async (id) => {
  try {
    const response = await fetch(API + "/faculty/" + id + "/departments");
    const result = await response.json();

    return result;
  } catch (e) {
    console.log("ERROR GETTING DEPT BY FACULTY: ", e);

  }
}