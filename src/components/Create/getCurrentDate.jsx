export default function getCurrentDate() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;

  return year + "-" + month + "-" + date;
}
