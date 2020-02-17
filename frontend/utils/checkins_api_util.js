export const createCheckin = (formData) =>{
  return $.ajax({
    url: '/api/checkins',
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const fetchCheckins = () => {
  return $.ajax({
    url: '/api/checkins',
    method: "GET"
  });
};

export const fetchCheckin = (checkinId) =>{
  return $.ajax({
    url: `/api/checkins/${checkinId}`,
    method: "GET"
  });
};

export const deleteCheckin = (checkinId) =>{
  return $.ajax({
    url: `/api/checkins/${checkinId}`,
    method: "DELETE"
  });
};